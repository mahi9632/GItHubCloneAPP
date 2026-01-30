import React, { useMemo } from 'react';
import profileConfig from '../config/profileConfig.json';
import { useUserProfile } from '../context/UserProfileContext';

type ChartProps = {
  selectedYear?: number;
};

type DayCell = {
  date: string;
  value: number;
  valid: boolean;
};

type MonthMark = {
  name: string;
  weekIndex: number;
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const SIDE_DAYS = ['Mon', 'Wed', 'Fri'];

const ContributionChart: React.FC<ChartProps> = ({ selectedYear }) => {
  const { contributions } = useUserProfile();
  const { contributions: text } = profileConfig.texts;

  const year = selectedYear ?? new Date().getFullYear();
  const rawData = contributions?.contributions ?? [];

  const { grid, total, months } = useMemo(() => {
    const countByDate = new Map<string, number>();
    let sum = 0;

    rawData.forEach(item => {
      countByDate.set(item.date, item.count);
      sum += item.count;
    });

    const firstJan = new Date(year, 0, 1);
    const start = new Date(firstJan);
    const shift = start.getDay() === 0 ? -6 : 1 - start.getDay();
    start.setDate(start.getDate() + shift);

    const weeks: DayCell[][] = [];
    const monthLabels: MonthMark[] = [];
    const addedMonths = new Set<number>();

    const cursor = new Date(start);
    let weekPos = 0;

    while (true) {
      const week: DayCell[] = [];
      let containsYear = false;

      for (let i = 0; i < 7; i++) {
        const iso = cursor.toISOString().slice(0, 10);
        const inside = cursor.getFullYear() === year;

        if (inside) {
          containsYear = true;
          const m = cursor.getMonth();
          if (!addedMonths.has(m)) {
            monthLabels.push({ name: MONTHS[m], weekIndex: weekPos });
            addedMonths.add(m);
          }
        }

        week.push({
          date: iso,
          value: inside ? countByDate.get(iso) ?? 0 : -1,
          valid: inside,
        });

        cursor.setDate(cursor.getDate() + 1);
      }

      if (containsYear) {
        weeks.push(week);
        weekPos++;
      } else if (weekPos > 0) {
        break;
      }

      if (cursor.getFullYear() > year && weekPos > 0) break;
    }

    return { grid: weeks, total: sum, months: monthLabels };
  }, [rawData, year]);

  const tooltipText = (cell: DayCell) => {
    if (!cell.valid) return '';
    if (cell.value === 0) return `No contributions on ${cell.date}`;
    if (cell.value === 1) return `1 contribution on ${cell.date}`;
    return `${cell.value} contributions on ${cell.date}`;
  };

  const cellColor = (value: number) => {
    if (value === -1) return '#161b22';
    if (value === 0) return '#babec5';
    if (value <= 3) return '#115432';
    if (value <= 6) return '#537e67';
    if (value <= 9) return '#469b58';
    return '#40e05b';
  };

  return (
    <div>
      <div className="mb-4 text-base font-semibold text-[#56595d]">
        {total.toLocaleString()} contributions in {year}
      </div>

      <div className="relative mb-3">
        <div className="relative ml-[26px] mb-2 h-4">
          {months.map(m => (
            <span
              key={m.name}
              className="absolute text-[10px] font-medium text-[#56595d]"
              style={{ left: m.weekIndex * 13 }}
            >
              {m.name}
            </span>
          ))}
        </div>

        <div className="flex gap-[3px]">
          <div className="mr-1 w-[22px] flex flex-col gap-[3px]">
            <div className="h-[10px]" />
            {SIDE_DAYS.map(d => (
              <React.Fragment key={d}>
                <div className="h-[10px] text-[9px] text-[#56595d] flex items-center">
                  {d}
                </div>
                <div className="h-[10px]" />
              </React.Fragment>
            ))}
          </div>

          {grid.map((week, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              {week.map(day => (
                <div
                  key={day.date}
                  className="w-[10px] h-[10px] rounded-[1px]"
                  style={{ backgroundColor: cellColor(day.value) }}
                  title={tooltipText(day)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <a className="text-[#539bf5] hover:underline" href="#">
          {text.learnHow}
        </a>

        <div className="flex items-center gap-2 text-[#7d8590]">
          <span>{text.less}</span>
          <div className="flex gap-1">
            {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map(c => (
              <span key={c} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span>{text.more}</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionChart;
