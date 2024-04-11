import React, { ReactElement, useEffect, useState } from "react";
import * as Clients from "./navBar.style";
import Home from "../../../../public/icon/home-icon/home";
import Profile from "../../../../public/icon/profile-icon/profile";
import Friends from "../../../../public/icon/friends-icon/friends";
import Message from "../../../../public/icon/message-icon/message";
import Setting from "../../../../public/icon/setting-icon/setting";
import avatar from "../../../../public/images/avatar.png";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import Avatar from "../avatar";
const Infors = [
  {
    quantity: "18k",
    title: "follower",
  },
  {
    quantity: "1k",
    title: "following",
  },
  {
    quantity: "18",
    title: "post",
  },
];

const Navs = [
  {
    href: "/",
    icon: ({ isFocus }: { isFocus: boolean }): ReactElement => (
      <Home isFocus={isFocus}></Home>
    ),
    title: "Home",
  },
  {
    href: "/profile",
    icon: ({ isFocus }: { isFocus: boolean }): ReactElement => (
      <Profile isFocus={isFocus}></Profile>
    ),
    title: "Profile",
  },
  {
    href: "/messages",
    icon: ({ isFocus }: { isFocus: boolean }): ReactElement => (
      <Message isFocus={isFocus}></Message>
    ),
    title: "Messages",
  },
  {
    href: "/friends",
    icon: ({ isFocus }: { isFocus: boolean }): ReactElement => (
      <Friends isFocus={isFocus}></Friends>
    ),
    title: "Friends",
  },
  {
    href: "/setting",
    icon: ({ isFocus }: { isFocus: boolean }): ReactElement => (
      <Setting isFocus={isFocus}></Setting>
    ),
    title: "Setting",
  },
];
const NavBar = () => {
  const pathname: string = usePathname();
  return (
    <motion.div 
      
    >
      <Clients.ContainerAside>
        <Clients.Section>
          <div className="content">
            <Clients.ContainerAvatar>
              <Avatar src={avatar} />
              <p>Thang</p>
            </Clients.ContainerAvatar>
            <ul className="rowUl">
              {Infors.map((infor) => (
                <li key={infor.title}>
                  <h2 className="quantity">{infor.quantity}</h2>
                  <p className="title">{infor.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </Clients.Section>
        <Clients.Navbar>
          {Navs.map((nav) => (
            <Clients.LinkNav
              href={nav.href}
              key={nav.title}
              $isFocus={pathname === nav.href}
            >
              <nav.icon isFocus={pathname === nav.href} />
              <p>{nav.title}</p>
            </Clients.LinkNav>
          ))}
        </Clients.Navbar>
      </Clients.ContainerAside>
    </motion.div>
  );
};

export default NavBar;
