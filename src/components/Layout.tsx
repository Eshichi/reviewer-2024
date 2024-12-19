import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div>Header</div>
      <div style={{ flexGrow: 1 }}>{children}</div>
      <div>Footer</div>
    </div>
  );
}
