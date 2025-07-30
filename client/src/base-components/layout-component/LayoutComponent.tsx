import React, { FunctionComponent, PropsWithChildren } from "react";

export const LayoutComponent: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="min-h-screen">
      <header>header</header>
      <nav>navigation</nav>
      {children}
      <footer>footer</footer>
    </div>
  );
};
