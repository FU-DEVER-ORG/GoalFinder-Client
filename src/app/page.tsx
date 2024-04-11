"use client";
import Post from "@/components/layouts/Post";
import Image from "next/image";
import styled from "styled-components";
import avatar from "../../public/images/avatar.png";
import Avatar from "@/components/layouts/avatar";
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
const Main = styled.div`
  width: 100%;
  height: 3000px;
  
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  .content {
    display: flex;
    flex-direction: column;
    padding-block: 20px;
    border-radius: 16px;
    background-color: #fff;
    gap: 10px;
    .user {
      padding-inline: 15px;
      display: flex;
      gap: 20px;
      height: auto;
      align-items: start;
      
    }
    .userName {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 5px;
      .name {
        font-size: 16px;
        font-weight: 500;
      }
      .time {
        font-size: 12px;
        font-weight: 400;
      }
    }
    .text {
      padding-inline: 15px;
      font-size: 16px;
      font-weight: 500;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function Home() {
  return (
    <Main>
      <Post />
      <List>
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
      </List>
    </Main>
  );
}
