"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import * as S from "./main.style";
import Link from "next/link";

type Props = {
  src: StaticImageData;
};

const Avatar = ({ src }: Props) => {
  return (
    <Link href="/">
      <S.AvatarComponents
        size={40}
        icon={<Image src={src} alt="image" width={50} height={50}></Image>}
      ></S.AvatarComponents>
    </Link>
  );
};

export default Avatar;
