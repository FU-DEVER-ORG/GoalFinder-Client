"use client"
import Image from "next/image";

import Post from "@/components/modules/Post";
import Avatar from "@/components/core/common/Avatar";
import * as S from "./home.style"

import avatar from "@/public/images/avatar.png";

const lists = [
    {
      id: 1,
      avatar: avatar,
      name: "Thang",
      content: "Trời mưa thèm đá bóng không biết có ai set kèo k",
      images: avatar,
    },
    {
      id: 2,
      avatar: avatar,
      name: "Thang",
      content: "Hôm nay tôi buồn",
      images: avatar,
    },
    {
      id: 3,
      avatar: avatar,
      name: "Thang",
      content: "Hôm nay tôi buồn",
      images: avatar,
    },
    {
      id: 4,
      avatar: avatar,
      name: "Thang",
      content: "Hôm nay tôi buồn",
      images: avatar,
    },
    {
      id: 5,
      avatar: avatar,
      name: "Thang",
      content: "Hôm nay tôi buồn",
      images: avatar,
    },
  ];
  
const Home = () => {
  return (
    <S.Main>
    <Post />
    <S.List>
      {lists.map((content, index) => (
        <li className="content" key={content.id}>
          <div className="user">
            <Avatar src={avatar}></Avatar>
            <span className="userName">
              <h2 className="name">Thang</h2>
              <p className="time">13:12</p>
            </span>
          </div>
          <div className="caption">
            <p>{content.content}</p>
          </div>
          <Image
            src={avatar}
            alt="Avatar"
            width={900}
            height={1000}
            className="w-full h-full"
          ></Image>
        </li>
      ))}
    </S.List>
  </S.Main>
  )
}

export default Home