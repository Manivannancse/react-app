import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  Link
} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const TyclLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/enroll-course">Enroll Course</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Layout className="site-layout-background" style={{ padding: '24px' }}>
          <Content style={{ padding: '0', minHeight: 500 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default TyclLayout;