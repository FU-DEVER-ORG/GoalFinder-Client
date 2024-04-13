"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";


import styled from "styled-components";


type PropsLinkHref = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
type Props = {
  src: StaticImageData;
};
const LinkHref = (props: PropsLinkHref) => (
  <Link className={props.className} href={props.href}>
    {props.children}
  </Link>
);
const AvatarComponents = styled(LinkHref)`
  width: 50px;
  height: 50px;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  img {
    border-radius: 50%;
  }
`;
const Avatar = ({ src }: Props) => {
  return (
    <AvatarComponents href="/">
      <Image src={src} alt="image" width={50} height={50}></Image>
    </AvatarComponents>
  );
};

export default Avatar;
