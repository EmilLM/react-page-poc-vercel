import React, { FC } from 'react';
import styled from 'styled-components'

const Content = styled.div`
    background: lightblue;
`
const Layout = ({ children }) => {
 
  return (
    <Content>
      {children}
    </Content>
  );
};
export default Layout;