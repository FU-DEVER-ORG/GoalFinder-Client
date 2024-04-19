"use client"
import React from "react";

import { useAppDispatch} from "@/hooks"

import * as Client from "./layoutPost.style";

const Post = () => {

  return (
    <Client.Section>
      <div className="content">
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
