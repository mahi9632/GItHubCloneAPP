import React from "react"; 
import { GoLock } from "react-icons/go";

import profileConfig from "../config/profileConfig.json";
import GitMergeIcon from "../icons/GitMergeIcon";

const ContributionActivity: React.FC = () => {
  const currentMonth = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const { texts, mockData } = profileConfig;
  const privateContributions = mockData.privateContributions;

  return (
    <div >
      <h2 className="text-[#56595d] font-semibold text-base">
        {texts.profilePage.contributionActivityTitle}
      </h2>

      <div className="px-2 py-4">
        <div className=" flex flex-row gap-2 items-center justify-center py-4">
          <h3 className="text-[#56595d] font-semibold text-sm whitespace-nowrap">
            {currentMonth}
          </h3>
          <div className="w-full h-[1px] bg-[#d1d9e0]"></div>
        </div>

        <div className="relative pl-6">

          <div className="relative pb-6 flex flex-row gap-2 items-center">
            <div className="h-[50px] w-[2px]  bg-[#d1d9e0]  "></div>
            <div className="absolute translate-x-[-45%] translate-y-[20%] top-[2px] bg-[#f6f8fa] p-1 z-10 rounded-full">
              <GitMergeIcon/>
            </div>

            <div className="flex items-start justify-between pl-4 w-full">
              <div className="text-sm">
                <span className="text-[#56595d] font-semibold">
                  {privateContributions.count} contributions
                </span>
                <span className="text-[#59636e]"> {texts.profilePage.privateRepoSuffix}</span>
              </div>
              <div className="text-xs text-[#56595d] whitespace-nowrap ml-4">
                {privateContributions.dateRange}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button className="w-full text-center text-sm text-[#539bf5] hover:underline py-2 font-medium border border-gray-600 rounded-md">
            {texts.profilePage.showMoreActivity}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributionActivity;
