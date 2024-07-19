"use client";
import React from 'react';
import { Layout, Menu, Button, Space } from 'antd';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';

const { Header } = Layout;

const Navbar: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const toggleDarkMode = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

    return (
        <Header className="!flex !py-4 border-b border-light-gray !text-base items-center !w-full !bg-white dark:!bg-primary dark:!text-white text-white fixed top-0 left-0 right-0 z-50">
            <h1 className=" text-2xl  min-w-max font-extrabold mr-4">
                anon-notes
            </h1>
            <Menu
                className="flex-1 !items-center !justify-center gap-7 md:!text-lg !text-center !bg-transparent !text-black dark:!bg-primary dark:!text-white !border-none"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="4">Features</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
            <Space size="large" style={{ display: 'flex', alignItems: 'center' }}>
                <Button type="default" size="large">Login</Button>
                <Button type="primary" size='large'>Sign Up</Button>
                <DarkModeSwitch
                    style={{ marginLeft: 12 }}
                    size={18}
                    onChange={toggleDarkMode}
                    checked={mounted ? theme === "dark" : false}
                    className="dark:text-white"
                />
            </Space>
        </Header>
    );
};

export default Navbar;
