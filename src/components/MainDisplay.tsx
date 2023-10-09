import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainDisplay = (props: Props) => {
  const { children } = props;

  return (
    <>
      <div>{children}</div>
    </>
  );
};
