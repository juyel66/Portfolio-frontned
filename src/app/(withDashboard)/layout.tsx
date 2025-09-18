"use client";

import {
  MdAddChart,
  MdDashboard,
  MdManageHistory,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import { Button, Layout, Menu } from "antd";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { FaMessage } from "react-icons/fa6";

const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarItems = [
    {
      key: "UserDashboard",
      icon: <MdDashboard />,
      label: <Link href={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "ProjectManagement",
      icon: <MdOutlineProductionQuantityLimits />,
      label: "Project Management",
      children: [
        {
          key: "AddProject",
          icon: <MdAddChart />,
          label: <Link href={"/dashboard/add-project"}>Add Project</Link>,
        },
        {
          key: "ManageProject",
          icon: <MdManageHistory />,
          label: <Link href={"/dashboard/manage-project"}>Manage Project</Link>,
        },
      ],
    },
    {
      key: "BlogManagement",
      icon: <MdOutlineProductionQuantityLimits />,
      label: "Blog Management",
      children: [
        {
          key: "AddBlog",
          icon: <MdAddChart />,
          label: <Link href={"/dashboard/add-blog"}>Add Blog</Link>,
        },
        {
          key: "ManageBlog",
          icon: <MdManageHistory />,

          label: <Link href={"/dashboard/manage-blog"}>Manage Blog</Link>,
        },
      ],
    },

    {
      key: "MySendingMessage",
      icon: <FaMessage />,
      label: <Link href={"/my-message"}>My sending message</Link>,
    },
   
  ];
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={sidebarItems} />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, position: "sticky", top: 0, zIndex: 1000 }}
          className="bg-[#001529] min-w-f"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <Content>
          <div
            style={{
              minHeight: "100vh",
            }}
            className="bg-gray-900"
          >
            <SessionProvider>{children}</SessionProvider>
            <Toaster />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
