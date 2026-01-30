import type { User, ContributionData } from '../types/globalTypes';

const GITHUB_API_URL = 'https://api.github.com/users';
const CONTRIBUTIONDATA_API_URL = 'https://api.github.com/users';

export const fetchUser = async (userName: string): Promise<User> => {
    const response = await fetch(`${GITHUB_API_URL}/${userName}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }
    return response.json();
};

export const fetchContributions = async (username: string, year?: number): Promise<ContributionData | null> => {
const yearParam = year ? `?year=${year}` : '?y=last';

    const response = await fetch(`${CONTRIBUTIONDATA_API_URL}/${username}${yearParam}`);
    if (!response.ok) {
        throw new Error('Failed to fetch contributions');
    }
    return response.json();
}

export const fetchRepositories = async (userName: string) => {
    const response = await fetch(`${GITHUB_API_URL}/${userName}/repos?sort=stars&direction=asc&per_page=12`);
    if (!response.ok) {
        throw new Error('Failed to fetch repositories');
    }
    return response.json();
}