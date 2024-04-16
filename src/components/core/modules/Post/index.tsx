"use client"
import React from "react";

import { useAppDispatch} from "@/hooks"

import * as Client from "./layoutPost.style";

import Avatar from "@/components/core/common/Avatar";

import avatar from "@/public/images/avatar.png";
const Post = () => {

  return (
    <Client.Section>
      <div className="content">
        <Avatar src={avatar}></Avatar>
        <span className="input" onClick={() => {}}>
          <p className="text">What are you thing?</p>
        </span>
      </div>
      <div className="line"></div>
      <Client.Option>
        <div className="option">Default</div>
        <div className="option">Premium</div>
      </Client.Option>
    </Client.Section>
  );
};

export default Post;
