"use client";

import { Flex, Typography } from "antd";

import Button from "@/components/core/common/Button";

import * as S from "./style";

export default function Page() {
  return (
    <S.Wrapper align="flex-start" vertical>
      <Flex gap={8} vertical>
        <Typography.Title level={2}>Button</Typography.Title>
        <Flex gap={20}>
          <Button type="default">Click me!!!</Button>
          <Button type="primary">Click me!!!</Button>
        </Flex>
        <Flex gap={20}>
          <Button type="default" loading>
            Click me!!!
          </Button>
          <Button type="primary" loading>
            Click me!!!
          </Button>
        </Flex>
        
      </Flex>
    </S.Wrapper>
  );
}
