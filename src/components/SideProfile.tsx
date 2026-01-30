import React from "react";
import profileConfig from "../config/profileConfig.json";
import { useUserProfile } from "../context/UserProfileContext";
import EmailIcon from "../icons/EmailIcon";
import PeoplesIcon from "../icons/PeoplesIcon";
import ComapnyIcon from "../icons/ComapnyIcon";
import LocationIcon from "../icons/LocationIcon";
import TwitterIcon from "../icons/TwitterIcon";
import BlogIcon from "../icons/BlogIcon";
import StartPerFormerIcon from "../icons/StartPerFormerIcon";

const SideProfile: React.FC = () => {
  const { user } = useUserProfile();

  if (!user) return null;

  return (
    <div className="w-full lg:w-[296px] flex-shrink-0">
      <div className="sticky top-4" >
        <div className="relative mb-4">
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-full aspect-square rounded-full border border-[#30363d]"
          />
        </div>

        <div className="mb-4">
          <h1 className="text-[26px] font-semibold text-[#1f2328] mb-0 leading-[1.25]">
            {user.name || user.login}
          </h1>
          <p className="text-xl font-light text-[#7d8590] mt-0">{user.login}</p>
        </div>
        <div className="flex gap-2 mb-4">
          {profileConfig.showFollowButton && (
            <button className="flex-1 px-3 py-[5px] bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md text-sm font-medium text-[#e6edf3] transition-colors">
              Follow
            </button>
          )}
        </div>

        {user.bio && (
          <div className="mb-4">
            <p className="text-[#1f2328] text-[14px]">{user.bio}</p>
          </div>
        )}

        <div className="mb-4 flex items-center gap-1 text-sm text-[#1f2328]">
          <PeoplesIcon />
          <a href="#" className="hover:text-[#539bf5]">
            <strong className="text-[#1f2328]">{user.followers}</strong>{" "}
            followers
          </a>
          <span className="text-[#7d8590]">·</span>
          <a href="#" className="hover:text-[#539bf5]">
            <strong className="text-[#1f2328]">{user.following}</strong>{" "}
            following
          </a>
        </div>

        <div className="space-y-2 text-sm text-[#1f2328]">
          {user.company && (
            <div className="flex items-start gap-2">
             <ComapnyIcon />
              <span className="break-all">{user.company}</span>
            </div>
          )}

          {user.location && (
            <div className="flex items-start gap-2">
              <LocationIcon />  
              <span>{user.location}</span>
            </div>
          )}

          {user.email && (
            <div className="flex items-start gap-2">
              <EmailIcon />
              <a
                href={`mailto:${user.email}`}
                className="hover:text-[#539bf5] hover:underline break-all"
              >
                {user.email}
              </a>
            </div>
          )}

          {user.blog && (
            <div className="flex items-start gap-2">
            <BlogIcon />  
              <a
                href={
                  user.blog.startsWith("http")
                    ? user.blog
                    : `https://${user.blog}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#539bf5] hover:underline break-all"
              >
                {user.blog}
              </a>
            </div>
          )}

          {user.twitter_username && (
            <div className="flex items-start gap-2">
              <TwitterIcon />
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#539bf5] hover:underline"
              >
                @{user.twitter_username}
              </a>
            </div>
          )}
        </div>
              <div className="w-full mt-1 h-[1px] bg-[#d1d9e0] "></div>
      <div className="pt-4 text-sm ">
        <h2 className="font-semibold">Achievemenst</h2>
        <StartPerFormerIcon />
      </div>
      </div>
    </div>
  ); 
};

export default SideProfile;
