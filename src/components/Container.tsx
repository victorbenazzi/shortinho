import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full md:h-[calc(100vh-80px)] h-fit md:w-[1120px] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
