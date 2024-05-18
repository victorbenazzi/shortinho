import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-fit md:w-[1120px] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
