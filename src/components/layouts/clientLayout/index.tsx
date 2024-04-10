import Image from "next/image";
import React from "react";
import search_icon from "@/asset/icon/search-icon.svg";
import bell_icon from "@/asset/icon/bell-icon.svg";
import favourite_icon from "@/asset/icon/favourite-icon.svg";
import chevron_down_icon from "@/asset/icon/chevron-down.svg";
import avatar from "@/asset/images/avatar.png";
import Avatar from "@/components/avatar";
import * as Clients from "./ClientLayouts.style";
const Infors = [
  {
    title: "18k",
    disc: "follower",
  },
  {
    title: "1k",
    disc: "following",
  },
  {
    title: "18",
    disc: "post",
  },
];
const Navs = [
  {
    href: "/1",
    icon: avatar,
    title: "Home",
  },
  {
    href: "/1",
    icon: avatar,
    title: "Profile",
  },
  { href: "/1", icon: avatar, title: "Messages" },
  { href: "/1", icon: avatar, title: "Friends" },
  { href: "/1", icon: avatar, title: "Setting" },
];
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
            <Clients.Search >
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
            <Clients.Icon href="" className="btn btn-active">
              <Image
                src={bell_icon}
                alt="bell icon"
                width={50}
                height={50}
              ></Image>
            </Clients.Icon>
            <Clients.Icon href="" className="btn btn-active">
              <Image
                src={favourite_icon}
                alt="favourite icon"
                width={50}
                height={50}
              ></Image>
            </Clients.Icon>
            <Clients.ContainerAvatar>
              <Avatar avatar={avatar} />
              <p>Thang</p>
              <button className="icon">
                <Image
                  src={chevron_down_icon}
                  alt="caret down for more them"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </Clients.ContainerAvatar>
          </Clients.Setting>
        </Clients.ContainerHeader>
      </Clients.Header>
      <Clients.Container>
        <Clients.ContainerAside>
          <Clients.Section>
            <div className="content">
              <Clients.ContainerAvatar>
                <Avatar avatar={avatar} />
                <p>Thang</p>
              </Clients.ContainerAvatar>
              <ul className="rowUl">
                {Infors.map((infor) => (
                  <li key={infor.disc}>
                    <h2 className="title">{infor.title}</h2>
                    <p className="disc">{infor.disc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Clients.Section>
          <Clients.Navbar>
            {Navs.map((nav) => (
              <Clients.LinkNav href={nav.href} key={nav.title}>
                <Image src={nav.icon} alt="icon" width={20} height={20}></Image>
                <p>{nav.title}</p>
              </Clients.LinkNav>
            ))}
          </Clients.Navbar>
        </Clients.ContainerAside>
        <Clients.Cointainermain>{children}</Clients.Cointainermain>
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
