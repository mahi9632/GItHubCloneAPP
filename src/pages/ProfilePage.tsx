import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import profileConfig from "../config/profileConfig.json";
import { useUserProfile } from "../context/UserProfileContext";
import SideProfile from "../components/SideProfile";
import PopularRepositories from "../components/PopularRepositories";
import ContributionChart from "../components/ContributionChart";
import ActivityOverview from "../components/ActivityOverview";
import ContributionActivity from "../components/ContributionActivity";
import { GoRepo } from "react-icons/go";

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const { fetchUserProfile, fetchContributionsByYear, loading, error, user, fetchPopularRepositories, repositories } = useUserProfile();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { profilePage, activityOverview } = profileConfig.texts;

  useEffect(() => {
    if (username) {
      fetchUserProfile(username);
      fetchPopularRepositories(username);
    }
  }, [username]);

  useEffect(() => {
    if (username && user && selectedYear) {
      fetchContributionsByYear(username, selectedYear);
    }
  }, [selectedYear, username, user]);

  const yearOptions = useMemo(
    () => Array.from({ length: 11 }, (_, i) => new Date().getFullYear() - i),
    []
  );

  // Prepare repositories to display (show up to 5 and count extras)
  const contribRepos = repositories || [];
  const displayRepos = contribRepos.slice(0, 5);
  const extraReposCount = Math.max(0, contribRepos.length - displayRepos.length);

  if (loading) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#539bf5] mx-auto mb-4"></div>
          <p className="text-[#7d8590]">{profilePage.loading}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#f85149] text-xl mb-2">{profilePage.errorTitle}</p>
          <p className="text-[#7d8590]">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          <SideProfile />
          <div className="flex-1 min-w-0 space-y-6">
            <PopularRepositories />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col  border border-[#d1d9e0] rounded-md flex-1 min-w-0">
                {/* Year selector for mobile/tablet */}
                <div className="md:hidden p-4 border-b border-[#30363d]">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-[#161b22] text-[#e6edf3] border border-[#30363d] rounded-md text-sm focus:outline-none focus:border-[#1f6feb]"
                  >
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-4 overflow-x-auto">
                  <ContributionChart selectedYear={selectedYear} />
                </div>
                <div className="flex flex-row gap-2 w-full p-4 border-t-2 border-t-[#d1d9e0]">
                  <div className="w-1/2 border-r-2 border-r-[#d1d9e0]">
                    <h2 className="text-[#56595d] font-semibold text-xs mb-6">
                      {activityOverview.title}
                    </h2>
                    <div className="flex flex-row gap-2 text-sm items-center">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <span className="leading-tight  flex flex-row">
                        <GoRepo size={20} className="inline-block mr-1" /> 
                         <span> Contributed{' '}
                          {displayRepos.length > 0 ? (
                            <>
                              {displayRepos.slice(0, 3).map((repo, idx) => (
                                <span key={repo.id}>
                                  <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#58a6ff] hover:underline"
                                  >
                                    {repo.name}
                                  </a>
                                  {idx < displayRepos.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                              {extraReposCount > 0 && <> and {extraReposCount} others</>}
                            </>
                          ) : (
                            <span className="text-[#7d8590]">no public repositories</span>
                          )}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <ActivityOverview />
                </div>
              </div>

              {/* Year selector for desktop */}
              <div className="hidden md:flex flex-col gap-2 w-[100px]">
                {yearOptions.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${selectedYear === year
                        ? "bg-[#1f6feb] text-white font-semibold"
                        : "bg-transparent text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3]"
                      }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <ContributionActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
