import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { UserProfileProvider } from '../context/UserProfileContext';
import profileConfig from '../config/profileConfig.json';
import TopNavBar from '../components/TopNavBar';
import ProfilePage from '../pages/ProfilePage';
import HocPageLayout from '../pages/HocPageLayout';

const AppRouter: React.FC = () => {

  const createPageElement = (title: string, ContentComponent?: React.ComponentType) => {
    const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);
    const Content = ContentComponent ?? (() => <p>{`This is the ${displayTitle} Page.`}</p>);
    const Wrapped = HocPageLayout(displayTitle)(Content);
    return <Wrapped />;
  }

  return (
    <BrowserRouter>
      <UserProfileProvider>
        <TopNavBar />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/profile/${profileConfig.defaultUsername}`} replace />}
            />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/profile/:username/repositories" element={createPageElement('repositories')} />
            <Route path="/profile/:username/projects" element={createPageElement('Projects')} />
            <Route path="/profile/:username/stars" element={createPageElement('Stars')} />
            <Route path="/profile/:username/packages" element={createPageElement('Packages')} />
            <Route path="*" element={createPageElement('Not Found')} />
          </Routes>

        </div>
      </UserProfileProvider>
    </BrowserRouter>
  );
}

export default AppRouter;