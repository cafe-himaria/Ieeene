import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainDisplay = (props: Props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full p-4 overflow-y-scroll">{children}</div>
    </>
  );
};
