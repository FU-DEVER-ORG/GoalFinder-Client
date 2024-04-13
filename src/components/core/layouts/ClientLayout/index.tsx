"use client"
import Image from "next/image";
import React from "react";

import * as S from "./ClientLayouts.style";

import Bell_icon from "@/public/icon/bell-icon/bell";
import Favourite_icon from "@/public/icon/favourite-icon/favourite";
import Hamburger from "@/public/icon/hamburger-icon/hamburger";
import Avatar from "@/components/common/Avatar";
import NavBar from "@/components/core/layouts/NavBar";

import avatar from "@/public/images/avatar.png";
import chevron_down_icon from "@/public/icon/chevron-down.svg";
import search_icon from "@/public/icon/search-icon.svg";

const history = [
  { href: "/1", icon: avatar, name: "team 1" },
  { href: "/1", icon: avatar, name: "team 2" },
  { href: "/1", icon: avatar, name: "team 3" },
  { href: "/1", icon: avatar, name: "team 4" },
  { href: "/1", icon: avatar, name: "team 5" },
];
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.ContainerBody>
      <S.Header>
        <S.ContainerHeader>
          <S.ContainerLogoSearch>
            <S.LinkLogo href="/">
              <Image src={avatar} alt="logo" width={50} height={50}></Image>
              <span>GoalFinder</span>
            </S.LinkLogo>
            <S.Search>
              <Image
                src={search_icon}
                alt="icon search "
                width={50}
                height={50}
              ></Image>
              <input type="text" placeholder="Search" />
            </S.Search>
          </S.ContainerLogoSearch>
          <S.Setting>
            <Hamburger></Hamburger>
            <S.Icon href="" className="btn btn-active">
              <Bell_icon />
            </S.Icon>
            <S.Icon href="" className="btn btn-active">
              <Favourite_icon />
            </S.Icon>
            <S.ContainerAvatar>
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
            </S.ContainerAvatar>
          </S.Setting>
        </S.ContainerHeader>
      </S.Header>
      <S.Container>
        <NavBar></NavBar>
        <S.Cointainermain>
          <div className="main">{children}</div>
        </S.Cointainermain>
        <S.ContainerAside>
          <S.Section>
            <S.Title>Teams are waiting</S.Title>
            <ul className="colUl">
              {history.map((infor, index) => (
                <S.LinkNav href={infor.href} key={index}>
                  <Image
                    src={infor.icon}
                    alt="icon"
                    width={20}
                    height={20}
                  ></Image>
                  <p>{infor.name}</p>
                </S.LinkNav>
              ))}
            </ul>
          </S.Section>
        </S.ContainerAside>
      </S.Container>
    </S.ContainerBody>
  );
};

export default ClientLayout;
