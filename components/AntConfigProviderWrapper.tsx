"use client";

import React, { FC } from "react";
import { ConfigProvider, theme as antdTheme } from "antd"; // Renamed theme to antdTheme
import { useTheme } from "next-themes";

interface IProps {
    children: React.ReactNode;
}

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = antdTheme; 

export const AntdConfigProvider: FC<IProps> = ({ children }) => {
  const { theme } = useTheme(); 


  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted || !theme) return null;

  return (
    <ConfigProvider
      theme={{
        ...antdTheme,
        token: {
          colorPrimary: theme === "dark" ? "#fff" : "#000",
          colorText: theme === "dark" ? "#fff" : "#000",
          colorLink: theme === "dark" ? "#fff" : "#000",
        },
        components: {
          Button: {
            algorithm: true,
            colorPrimary: theme === "dark" ? "#fff" : "#000",
            primaryColor: theme === "dark" ? "#000" : "#fff",
            defaultHoverColor: theme === "dark" ? "#000" : "#fff",
            defaultHoverBg: theme === "dark" ? "#fff" : "#000",
          },
          Input: {
            paddingBlock: 10
          },
          Modal: {
            algorithm: true,
            colorBgBlur: theme === "dark" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"
          },
        },
        algorithm: mounted ? (theme === "dark" ? darkAlgorithm : defaultAlgorithm) : defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
