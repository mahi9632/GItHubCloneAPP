import React from 'react';

const HocPageLayout = (title: string) => <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const Component: React.FC<P> = (props) => (
    <div className="flex p-5 justify-center">
      <div className="p-5 border-[#30363d] text-[#7d8590] w-full rounded-md text-center bg-[#0d1117]">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <WrappedComponent {...props} />
      </div>
    </div>
  );

  Component.displayName = `withPageLayout(${title})`;

  return Component;
};

export default HocPageLayout;