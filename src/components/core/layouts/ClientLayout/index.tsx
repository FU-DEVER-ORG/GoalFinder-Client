"use client"
import Image from "next/image";
import React from "react";

import * as S from "./ClientLayouts.style";

import Bell_icon from "@/public/icon/bell-icon/bell";
import Favourite_icon from "@/public/icon/favourite-icon/favourite";
import Hamburger from "@/public/icon/hamburger-icon/hamburger";
import Avatar from "@/components/core/common/Avatar";
import NavBar from "@/components/core/common/NavBar";

import avatar from "@/public/images/avatar.png";
import chevron_down_icon from "@/public/icon/chevron-down.svg";
import search_icon from "@/public/icon/search-icon.svg";
import GoalFinderLogo from "@/public/logo/goalfinder.svg";
import { SearchOutlined } from "@ant-design/icons";
const history = [
  { href: "/1", icon: avatar, name: "team 1" },
  { href: "/1", icon: avatar, name: "team 2" },
  { href: "/1", icon: avatar, name: "team 3" },
  { href: "/1", icon: avatar, name: "team 4" },
  { href: "/1", icon: avatar, name: "team 5" },
];
///oke
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.ContainerBody>
      <S.AppHeader>
        <S.HeaderContainer>
          <S.LogoStyled>
            <Image src={GoalFinderLogo} width={40} height={40} alt="logo"></Image>
            <S.AppName>GoalFinder</S.AppName>
          </S.LogoStyled>
          <S.SearchingInput 
            addonBefore={<SearchOutlined></SearchOutlined>}
            placeholder="Tìm kiếm"
            allowClear
          >  
          </S.SearchingInput>
          <S.UtilsContainer>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </S.UtilsContainer>
        </S.HeaderContainer>
      </S.AppHeader>
      {/* <S.Header>
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
      </S.Container> */}
      
    </S.ContainerBody>
  );
};

export default ClientLayout;
