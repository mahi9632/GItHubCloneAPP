import React, { useState } from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import { LuSquareMenu } from 'react-icons/lu';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from "react-toastify";


import profileConfig from '../config/profileConfig.json';
// import ProfileTabs from './ProfileTab/s';
import CopilotIcon from '../icons/CopilotIcon';
import { useUserProfile } from '../context/UserProfileContext';
import IssuesIcon from '../icons/IssuesIcon';
import PullRequestsIcon from '../icons/PullRequestIcon';
import NotificationsIcon from '../icons/NotificationsIcon';
import ProfileTabs from './ProfileTabs';


const featureLabels = {
  search: 'Search',
  notifications: 'Notifications',
  menu: 'Menu',
  create: 'Create',
  copilot: 'Copilot',
  issues: 'Issues',
  pullRequests: 'Pull Requests',
  profile: 'Profile',
} as const;

const TopNavBar: React.FC = () => {
  const { user } = useUserProfile();
  const { nav } = profileConfig.texts;

  const [showToolTip, setShowToolTip] = useState<string | null>(null);
  const descriptions = profileConfig.featureDescriptions as Record<string, string>;

  const handleFeatureClick = (feature: keyof typeof featureLabels) => {
    const name = featureLabels[feature];
    const description = descriptions[name] || descriptions.Menu || '';
    toast.info(`${name} \n ${description}`, { autoClose: 2000, theme: 'dark', position: 'top-center' });
  };


  return (
    <>
      <header className="bg-[#e8ebec] border-b px-1 border-[#30363d] max-w-full w-full top-0 left-0 right-0 z-50 overflow-hidden max-md:overflow-auto customscrollbar-none">

        <div className="flex items-center p-2 gap-4  w-full justify-between">

          <div className="flex items-center gap-2 h-8">
            <div
              onClick={() => handleFeatureClick('menu')}
              onMouseEnter={() => setShowToolTip('menu')}
              onMouseLeave={() => setShowToolTip(null)}
              className="  text-[#7d8590]  hover:bg-[#d7dadb] rounded-md transition-colors relative"
              aria-label={nav.menu}
            >
              <LuSquareMenu size={30} />
              {showToolTip === 'menu' && <div className="absolute bottom-[-30px] left-1 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 whitespace-nowrap ">
                {nav.menu}
              </div>}
            </div>

            <Link to="/" className="flex items-center gap-1 text-white font-bold text-lg">
              <AiFillGithub size={30} color='#1f2328' />
            </Link>

            {user && (
              <div className="hidden md:flex items-center ml-4">
                <Link to={`/${user.login}`} className="flex items-center text-[#1f2328] font-medium hover:underline">
                  <span>{user.login}</span>
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => handleFeatureClick('search')}
                className="flex items-center h-8 border border-[#7d8590] rounded-md px-3 text-sm   hover:bg-[#d7dadb] transition-colors w-55"
              >
                <FiSearch className="w-4 h-4 text-[#7d8590] mr-2" />
                <span className="hover:text-white text-[#7d8590]">{nav.searchPlaceholder}</span>
              </button>
            </div>

            <div className="relative" >
              <button
                onClick={() => handleFeatureClick('copilot')}
                onMouseEnter={() => setShowToolTip('copilot')}
                onMouseLeave={() => setShowToolTip(null)}
                className="flex items-center h-8 gap-1 text-[#30363d]  hover:text-white hover:bg-[#d7dadb] border border-[#7d8590] rounded-md transition-colors px-2"
                aria-label={nav.copilot}
              >
                <div className="border-r-[#7d8590] border-r-[0.10rem] pr-2">
                  <CopilotIcon />
                </div>
                <div>
                  <IoTriangleSharp className="w-2 h-2 rotate-180" />
                </div>
              </button>
              {showToolTip === 'copilot' && (
                <div className="absolute top-full left-0 mt-2 px-2 py-1 bg-[#1c2128] text-xs text-white rounded shadow-lg whitespace-nowrap z-50 border border-[#30363d]">
                  {nav.copilot}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleFeatureClick('create')}
                onMouseEnter={() => setShowToolTip('create')}
                onMouseLeave={() => setShowToolTip(null)}
                className="flex items-center h-8 gap-1 px-2 text-[#30363d] hover:text-white hover:bg-[#d7dadb] border border-[#7d8590] rounded-md transition-colors"
                aria-label={nav.create}
              >
                <FiPlus className="w-4 h-4" />
                <IoTriangleSharp className="w-2 h-2 rotate-180" />
              </button>
              {showToolTip === 'create' && (
                <div className="absolute top-full right-0 mt-2 px-2 py-1 bg-[#1c2128] text-xs text-white rounded shadow-lg whitespace-nowrap z-50 border border-[#30363d]">
                  {nav.create}
                </div>
              )}
            </div>

            <div className="relative hidden md:block">
              <button
                onClick={() => handleFeatureClick('issues')}
                onMouseEnter={() => setShowToolTip('issues')}
                onMouseLeave={() => setShowToolTip(null)}
                className="flex items-center h-8 px-2 text-[#30363d] hover:text-white hover:bg-[#d7dadb] border border-[#7d8590] rounded-md transition-colors"
                aria-label={nav.issues}
              >
                <IssuesIcon />
              </button>
              {showToolTip === 'issues' && (
                <div className="absolute top-full right-0 mt-2 px-2 py-1 bg-[#1c2128] text-xs text-white rounded shadow-lg whitespace-nowrap z-50 border border-[#30363d]">
                  {nav.issues}
                </div>
              )}
            </div>

            <div className="relative hidden md:block">
              <button
                onClick={() => handleFeatureClick('pullRequests')}
                onMouseEnter={() => setShowToolTip('pullRequests')}
                onMouseLeave={() => setShowToolTip(null)}
                className="flex items-center h-8 px-2 text-[#30363d] hover:text-white hover:bg-[#d7dadb] border border-[#7d8590] rounded-md transition-colors"
                aria-label={nav.pullRequests}
              >
                <PullRequestsIcon />
              </button>
              {showToolTip === 'pullRequests' && (
                <div className="absolute top-full right-0 mt-2 px-2 py-1 bg-[#1c2128] text-xs text-white rounded shadow-lg whitespace-nowrap z-50 border border-[#30363d]">
                  {nav.pullRequests}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleFeatureClick('notifications')}
                onMouseEnter={() => setShowToolTip('notifications')}
                onMouseLeave={() => setShowToolTip(null)}
                className="relative flex items-center h-8 px-2 text-[#30363d] hover:text-white hover:bg-[#d7dadb] border border-[#7d8590] rounded-md transition-colors"
                aria-label={nav.notifications}
              >
                <NotificationsIcon />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-[#539bf5] ring-1 ring-[#010409]"></span>
              </button>
              {showToolTip === 'notifications' && (
                <div className="absolute top-full right-0 mt-2 px-2 py-1 bg-[#1c2128] text-xs text-white rounded shadow-lg whitespace-nowrap z-50 border border-[#30363d]">
                  {nav.notifications}
                </div>
              )}
            </div>

            <div className="relative outline-none ">
              <button
                onClick={() => handleFeatureClick('profile')}
                onMouseEnter={() => setShowToolTip('profile')}
                onMouseLeave={() => setShowToolTip(null)}
                className="elative flex items-center bg-transparent h-8 px-2 text-[#30363d] hover:text-white  rounded-md transition-colors "
                aria-label={nav.profile}
              >
                {user ? (
                  <img
                  
                    src={user.avatar_url}
                    alt={user.login}
                    className=" flex w-8 h-8 rounded-full object-cover"

                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#21262d]"></div>
                )}
              </button>
              {showToolTip === 'profile' && (
                <div className="absolute top-full right-0 mt-2 px-2 py-1 bg-[#1c2128] text-xs text-white rounded shadow-lg whitespace-nowrap z-50 border border-[#30363d]">
                  {nav.profile}
                </div>
              )}
            </div>
          </div>
        </div>

        <ProfileTabs />
      </header>

    </>
  );
};

export default TopNavBar;