import React, {createContext, useState, ReactNode, useContext} from 'react';
import { UserProfileContextProps, User, ContributionData, Repository } from '../types/globalTypes';
import { fetchContributions, fetchUser, fetchRepositories } from '../api/userProfileApi';

const UserProfileContext = createContext<UserProfileContextProps | undefined>(undefined);

export const UserProfileProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User|null>(null);
    const [contributions, setContributions] = useState<ContributionData|null>(null);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    const fetchUserProfile = async (userName: string): Promise<void> => {
        setLoading(true);
        setError(null);
        try {
            const userData = await fetchUser(userName);
            setUser(userData);

            const contributionData = await fetchContributions(userName);
            setContributions(contributionData);
        } catch (err) {
            setError((err as Error).message);
            setContributions(null);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };
    
    const fetchContributionsByYear = async (userName: string, year: number): Promise<void> => {
        try {
            const contributionData = await fetchContributions(userName, year);
            setContributions(contributionData);
        }catch  (err) {  
            setError((err as Error).message);
        }
    };

    const fetchPopularRepositories = async (userName: string): Promise<void> => {
        try {
            const repositories = await fetchRepositories(userName);
            setRepositories(repositories);
            // Handle repositories as needed
        } catch (err) {
            setError((err as Error).message);
        }
    }

    return (
        <UserProfileContext.Provider value={{user,loading, fetchContributionsByYear, contributions,  error, fetchUserProfile,fetchPopularRepositories,repositories}}>
            {children}
        </UserProfileContext.Provider>
    );

}

export const useUserProfile = (): UserProfileContextProps => {
    const context = useContext(UserProfileContext);
    if (context === undefined) {
        throw new Error('useUserProfile must be used within a UserProfileProvider');
    }
    return context;
};