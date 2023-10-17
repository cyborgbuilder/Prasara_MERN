import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInbox, AiOutlineHighlight, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const sidebarItems = [
    {
      icon: <AiOutlineHome className="dash_icon" />,
      text: 'Dashboard',
      link: '/dashboard/',
    },
    {
      icon: <AiOutlineInbox className="dash_icon" />,
      text: 'Orders',
      link: '/dashboard/order',
    },
    {
      icon: <AiOutlineHighlight className="dash_icon" />,
      text: 'Blog',
      link: '/dashboard/blog',
    },
    {
      icon: <AiOutlineUser className="dash_icon" />,
      text: 'Users',
      link: '/dashboard/users',
    },
    {
      icon: <AiOutlineSetting className="dash_icon" />,
      text: 'Settings',
    },
  ];

  return (
    <div className="SidebarContainer">
      <h1 className="SidebarHeading">Ceriture</h1>
      <div className="SidebarList">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`Item ${index === activeItem ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {item.icon}
            <Link to={item.link}>
              <li className="SidebarListItem">{item.text}</li>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;