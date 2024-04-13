import { useAppSelector, useAppDispatch } from "@/hooks";
import { useRef } from "react";
import {actionModalPost} from "@/store/features/auth"


import * as Client from "./layoutModalPost.style";
import Avatar from "../../../common/Avatar";
import avatar from "@/public/images/avatar.png";

const ModalDialog = () => {
  const boxModalRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.client.openModalPost);
  const HandleClickOutside = (event: React.MouseEvent) => {
    if(!boxModalRef?.current?.contains(event.target as Node)) dispatch(actionModalPost());
  };
  return (
    <Client.Modal $isOpen={openModal} onClick={HandleClickOutside}>
      <Client.BoxModal ref={boxModalRef}>
        <p className="title">Create New Post</p>
        <div className="content">
          <div className="user">
            <Avatar src={avatar}></Avatar>
            <p className="user-name">Thang</p>
          </div>
          <div className="container-input">
            <span
              aria-label="Go to footbal"
              className="input"
              contentEditable
            ></span>
          </div>
        </div>
      </Client.BoxModal>
    </Client.Modal>
  );
};

export default ModalDialog;
