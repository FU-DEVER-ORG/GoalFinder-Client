"use client";
import Image from "next/image";
import React from "react";
import search_icon from "../../../../public/icon/search-icon.svg";
import Bell_icon from "../../../../public/icon/bell-icon/bell";
import Favourite_icon from "@/public/icon/favourite-icon/favourite";
import chevron_down_icon from "../../../../public/icon/chevron-down.svg";
import avatar from "../../../../public/images/avatar.png";
import Avatar from "@/components/layouts/avatar";

import Hamburger from "@/public/icon/hamburger-icon/hamburger";
import * as Clients from "./ClientLayouts.style";
import NavBar from "@/components/layouts/navBar";

const history = [
  { href: "/1", icon: avatar, name: "team 1" },
  { href: "/1", icon: avatar, name: "team 2" },
  { href: "/1", icon: avatar, name: "team 3" },
  { href: "/1", icon: avatar, name: "team 4" },
  { href: "/1", icon: avatar, name: "team 5" },
];
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Clients.ContainerBody>
      <Clients.Header>
        <Clients.ContainerHeader>
          <Clients.ContainerLogoSearch>
            <Clients.LinkLogo href="/">
              <Image src={avatar} alt="logo" width={50} height={50}></Image>
              <span>GoalFinder</span>
            </Clients.LinkLogo>
            <Clients.Search>
              <Image
                src={search_icon}
                alt="icon search "
                width={50}
                height={50}
              ></Image>
              <input type="text" placeholder="Search" />
            </Clients.Search>
          </Clients.ContainerLogoSearch>
          <Clients.Setting>
            <Hamburger></Hamburger>
            <Clients.Icon href="" className="btn btn-active">
              <Bell_icon />
            </Clients.Icon>
            <Clients.Icon href="" className="btn btn-active">
              <Favourite_icon />
            </Clients.Icon>
            <Clients.ContainerAvatar>
              <Avatar src={avatar} />
              <p>Thang</p>
              <button className="icon">
                <Image
                  src={chevron_down_icon}
                  alt="caret down for more them"
                  width={15}
                  height={15}
                ></Image>
              </button>
            </Clients.ContainerAvatar>
          </Clients.Setting>
        </Clients.ContainerHeader>
      </Clients.Header>
      <Clients.Container>
        <NavBar></NavBar>
        <Clients.Cointainermain>
          <div className="main">{children}</div>
        </Clients.Cointainermain>
        <Clients.ContainerAside>
          <Clients.Section>
            <Clients.Title>Teams are waiting</Clients.Title>
            <ul className="colUl">
              {history.map((infor, index) => (
                <Clients.LinkNav href={infor.href} key={index}>
                  <Image
                    src={infor.icon}
                    alt="icon"
                    width={20}
                    height={20}
                  ></Image>
                  <p>{infor.name}</p>
                </Clients.LinkNav>
              ))}
            </ul>
          </Clients.Section>
        </Clients.ContainerAside>
      </Clients.Container>
    </Clients.ContainerBody>
  );
};

export default ClientLayout;
