export interface NavTextProps {
    profile: string;
    searchPlaceholder: string;
    copilot: string;
    create: string;
    menu: string;
    notifications: string;
    issues: string;
    pullRequests: string;

}

export interface User {
    id: number;
    email: string | null;
    name: string | null;
    company: string | null;
    login: string;
    created_at: string;
    updated_at: string;
    avatar_url: string;
    public_repos: number;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    starred_count?: number;
    company: string | null;
    blog: string;
    location: string | null;



}

export interface UserProfileContext {
    user: User | null;
    contributions: ContributionData | null;
    repositories: Repository[];
    loading: boolean;
    error: string | null;
}

export interface UserProfileContextProps extends UserProfileContext {
    fetchUserProfile: (userName: string) => Promise<void>;
    fetchContributionsByYear: (username: string, year: number) => Promise<void>;
    fetchPopularRepositories: (username: string) => Promise<void>;
}
export interface ActivityBreakdown {
  commits: number;
  codeReview: number;
  issues: number;
  pullRequests: number;
}

export interface ContributionDayWeek {
    days: ContributionDay[];
}

export interface ContributionDay {
    date: string;
    level: string;
    count: number;
}

export interface ContributionData {
    contributions: ContributionDay[];
    total: Record<number | string, number>;
}

export interface Repository {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    forks_url: string;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    visibility: string;
    language: string;

}

export interface MockRepository {
    name: string;
    description: string;
    language: string;
    languageColor: string;
    isPublic: boolean;
    isFork: boolean;
    forkedFrom?: string;
}

export interface ProfileContextState {
    user: User | null;
    contributions: ContributionData | null;
    loading: boolean;
    error: string | null;
}

export interface ProfileContributionValue {
    contributions: ContributionDay[];
    total: Record<number | string, number>;
}

