import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function getItem(label, key, icon, path) {
  return {
    key,
    icon,
    label,
    path
  };
}

const items = [
  getItem('Dashboard', '1', <PieChartOutlined />, '/system/dashboard'),
  getItem('Categories', '2', <DesktopOutlined />, '/system/category'),
  getItem('Products', '3', <UserOutlined />, '/system/products'),
  getItem('Team', 'sub2', <TeamOutlined />),
  getItem('Files', '9', <FileOutlined />),
];

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <React.Fragment>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        {/* items={items}  */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
          {items.map((item, index) => {
            return (
              <Menu.Item
                key={index}
              >
                <NavLink to={item.path}>
                  {item.icon} {item.label}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </React.Fragment>
  );
}

export default Sidebar;