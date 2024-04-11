import React from "react";
import * as S from "../icon.style";
const Home = ({isFocus} : {isFocus : boolean}) => {
  return (
    <S.Icon $isFocus={isFocus}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_220_23)">
        <path
          d="M100 41.9L150 86.9V165H130V105H70V165H50V86.9L100 41.9ZM100 15L0 105H30V185H90V125H110V185H170V105H200L100 15Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_220_23">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </S.Icon>
  );
};

export default Home;
