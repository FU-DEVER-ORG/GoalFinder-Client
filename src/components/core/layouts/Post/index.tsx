"use client"
import React from "react";

import {actionModalPost} from "@/store/features/auth"
import { useAppDispatch} from "@/hooks"

import * as Client from "./layoutPost.style";

import Avatar from "../Avatar";

import avatar from "@/public/images/avatar.png";
const Post = () => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(actionModalPost())
  }; 
  return (
    <Client.Section>
      <div className="content">
        <Avatar src={avatar}></Avatar>
        <span className="input" onClick={handleModal}>
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
