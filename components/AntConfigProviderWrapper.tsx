"use client";

import React, { FC } from "react";
import { ConfigProvider, theme as antdTheme } from "antd"; // Renamed theme to antdTheme
import { useTheme } from "next-themes";

interface IProps {
    children: React.ReactNode;
}

const { defaultAlgorithm, darkAlgorithm } = antdTheme; 

export const AntdConfigProvider: FC<IProps> = ({ children }) => {
  const { theme } = useTheme(); 

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ConfigProvider
      theme={{
        // Spread operator might not be directly applicable on the string 'theme' from useTheme
        ...antdTheme,
        algorithm: mounted ? theme === "dark" ? darkAlgorithm : defaultAlgorithm : darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}