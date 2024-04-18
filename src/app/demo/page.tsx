"use client";

import { Divider, Flex, Space, TableProps, Tag, Typography } from "antd";

import Button from "@/components/core/common/Button";
import Table from "@/components/core/common/Table";

import * as S from "./style";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button >Accept</Button>
        <Button danger>Reject</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function Page() {
  return (
    <S.Wrapper align="flex-start" vertical >
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
      <Divider/>
      <Flex gap={8} vertical>
        <Typography.Title level={2}>Table</Typography.Title>
        <Table columns={columns} dataSource={data} />
      </Flex>
    </S.Wrapper>
  );
}
