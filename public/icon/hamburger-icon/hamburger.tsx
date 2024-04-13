"use client"
import React from "react";
import { Container } from "./hamburger.style";
const Hamburger = () => {
  return (
    <Container>
      <div className="first">
        <span onClick={(event: React.MouseEvent) => {}}></span>
      </div>
      <span></span>
      <div className="second">
        <span></span>
      </div>
    </Container>
  );
};

export default Hamburger;
