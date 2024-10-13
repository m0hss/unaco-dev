import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <main role="main">
      <div
        className={`container p-8 mx-auto ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </main>
  );
}
