import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './dashboard.css';
import { Carousel } from 'antd';

const Dashboard = () => {
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '360px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default Dashboard;