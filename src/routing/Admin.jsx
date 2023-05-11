import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Dashboard from '../page/Admin/Dashboard';
import Category from '../page/Admin/Category';
import { Breadcrumb, Layout, theme } from 'antd';
import Sidebar from '../components/Admin/Sidebar';
import Product from '../page/Admin/Product/Product';

const Admin = () => {
  const { Header, Content } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pathName = useLocation();
  let myArray = [];

  useEffect(() => {
    myArray = pathName['pathname'].split("/");
  })

  return (
    <React.Fragment>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        {/* Sider */}
        <Sidebar />
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>System</Breadcrumb.Item>
              <Breadcrumb.Item>{myArray[2]}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/category' element={<Category />} />
                <Route path='/products' element={<Product />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Admin;