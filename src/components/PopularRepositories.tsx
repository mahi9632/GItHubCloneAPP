import { useUserProfile } from '../context/UserProfileContext';
import profileConfig from '../config/profileConfig.json';
import RepoIcon from '../icons/RepoIcon';
import ForkIcon from '../icons/ForkIcon';


const PopularRepositories: React.FC = () => {
    const { user, repositories } = useUserProfile();

    const { texts: { popularRepositories: repoDetails } } = profileConfig;
    console.log(repositories)
    return (
        <div className="mb-6">
            <h2 className="text-sm text-[#1f2328] font-semibold mb-4">{repoDetails.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {repositories.map((repo, index) => (
                    <div className="p-4 border border-[#d1d9e0] rounded-md hover:border-[#30363d] transition-colors" key={repo.name + index}>

                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <RepoIcon />
                                <a href={`https://github.com/${user?.login}/${repo.name}`} className="text-sm font-medium text-[#0969da] hover:underline">
                                    {repo.name}
                                </a>
                            </div>
                            <span className="text-[#59636e] text-xs border border-[#d1d9e0] rounded-full flex-shrink-0 ml-2 py-.5 px-2">
                                {repo.visibility === "public" ? repoDetails.publicLabel : repoDetails.privateLabel}
                            </span>
                        </div>

                        {repo.fork && repo.forks_url && (
                            <div className="text-xs flex items-center gap-1  text-[#57606a] mb-2">
                                <ForkIcon />
                                <span>
                                    {repoDetails.forkedFrom}{' '}
                                    <a href={repo.forks_url} className="text-[#0969da] hover:underline">
                                        {repo.forks_url}
                                    </a>
                                </span>

                            </div>
                        )}

                        {repo.description && (
                            <p className="text-xs text-[#7d8590] mb-3 lm-5 line-clamp-2">
                                {repo.description}
                            </p>
                        )}

                        <div className="flex items-center gap-4 text-xs text-[#7d8590]">
                            {repo.language && (
                                <div className="flex items-center gap-1">
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: '#3178c6' }}
                                    ></span>
                                    <span>{repo.language}</span>
                                </div>
                            )}
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
}

export default PopularRepositories;