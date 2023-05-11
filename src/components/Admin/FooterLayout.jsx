import React from 'react';
import { Layout } from 'antd';
function FooterLayout(props) {
  const { Footer } = Layout;
  return (
    <React.Fragment>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </React.Fragment>
  );
}

export default FooterLayout;