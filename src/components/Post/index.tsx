import React from "react";
import avatar from "@/asset/images/avatar.png";
import Avatar from "../avatar";
import * as Client from "./layoutPost.style";
import {actionModalPost} from "@/store/counterReducer"
import { useAppDispatch} from "@/hooks"
const Post = () => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(actionModalPost())
  }; 
  return (
    <Client.Section>
      <div className="content">
        <Avatar avatar={avatar}></Avatar>
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
