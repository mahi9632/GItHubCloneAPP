import {
  GoBook,
  GoRepo,
  GoProject,
  GoPackage,
  GoStar
} from 'react-icons/go';
import React from 'react';
import { NavLink } from 'react-router-dom';

import profileConfig from '../config/profileConfig.json';
import { useUserProfile } from '../context/UserProfileContext';

const ProfileTabs: React.FC = () => {
  const { user } = useUserProfile();

  const username = user?.login || profileConfig.defaultUsername;

  const tabs = [
    {
      name: profileConfig.tabs.overview,
      path: `/profile/${username}`,
      icon: <GoBook size={16} />,
      end: true
    },
    {
      name: profileConfig.tabs.repositories,
      path: `/profile/${username}/repositories`,
      icon: <GoRepo size={16} />,
      count: user?.public_repos
    },
    {
      name: profileConfig.tabs.projects,
      path: `/profile/${username}/projects`,
      icon: <GoProject size={16} />
    },
    {
      name: profileConfig.tabs.packages,
      path: `/profile/${username}/packages`,
      icon: <GoPackage size={16} />
    },
    {
      name: profileConfig.tabs.stars,
      path: `/profile/${username}/stars`,
      icon: <GoStar size={16} />,
      count: user?.starred_count ?? 0
    }
  ];

  return (
    <nav className=" lg:-mx-8 px-4 lg:px-8 w-full">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.end}
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 border-b-2 text-sm transition-colors ${
                isActive
                  ? 'border-[#f78166] text-[#1f2328] font-semibold'
                  : 'border-transparent text-[#1f2328] hover:font-semibold hover:border-[#6e7681]'
              }`
            }          >
            {tab.icon}
            <span>{tab.name}</span>

            {tab.count !== undefined && (
              <span className="px-1.5 py-0.5 text-xs bg-[#c3c5c6]  text-[#1f2328] rounded-full min-w-[20px] text-center">
                {tab.count}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default ProfileTabs;
