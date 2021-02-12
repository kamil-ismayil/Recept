import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

export const SidebarData = [
  {
    title: 'Start Sida',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Mat',
    path: '/recepter/mat',
    icon: <IoIcons.IoFastFood />,
    cName: 'nav-text'
  },
  {
    title: 'Dessert',
    path: '/recepter/dessert',
    icon: <FaIcons.FaBirthdayCake />,
    cName: 'nav-text'
  },
  {
    title: 'Dryck',
    path: '/recepter/dryck',
    icon: <FaIcons.FaGlassMartiniAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Smoothie',
    path: '/recepter/smoothie',
    icon: <FaIcons.FaGlassWhiskey />,
    cName: 'nav-text'
  },
  {
    title: 'Populär',
    path: '/recepter/popular',
    icon: <FaIcons.FaMedal />,
    cName: 'nav-text'
  },
  {
    title: 'Favoriter',
    path: '/recepter/favorit',
    icon: <FaIcons.FaStar />,
    cName: 'nav-text'
  },
]