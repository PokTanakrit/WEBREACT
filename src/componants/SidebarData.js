import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Page1',
    //     path: '/Page/Page1.js',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    // ]
  },
  {
    title: 'Page1',
    path: '/Page/Page1.js',
    icon: <IoIcons.IoIosPaper />
  },
  
];
