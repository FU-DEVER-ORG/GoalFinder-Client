import { useAppSelector, useAppDispatch } from "@/hooks";
import { useRef } from "react";


import * as Client from "./layoutModalPost.style";
import UserAvatar from '@/public/images/avatar.png';

const ModalDialog = () => {
  const boxModalRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const HandleClickOutside = (event: React.MouseEvent) => {
    // if(!boxModalRef?.current?.contains(event.target as Node)) dispatch(actionModalPost());
  };
  return (
    <Client.Modal onClick={HandleClickOutside}>
      <Client.BoxModal ref={boxModalRef}>
        <p className="title">Create New Post</p>
        <div className="content">
          <div className="user">
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
