"use client";

import {
  Checkbox,
  Divider,
  Flex,
  Radio,
  Space,
  TableProps,
  Tag,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

import Button from "@/components/core/common/Button";
import Table from "@/components/core/common/Table";
import Input from "@/components/core/common/form/Input";

import InputPassword from "@/components/core/common/form/InputPassword";
import InputNumber from "@/components/core/common/form/InputNumber";
import Select from "@/components/core/common/form/Select";
import Datepicker from "@/components/core/common/form/Datepicker";
import Timepicker from "@/components/core/common/form/Timepicker";

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
        <Button>Accept</Button>
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
      <Divider />
      <Flex gap={8} vertical>
        <Typography.Title level={2}>Table</Typography.Title>
        <Table columns={columns} dataSource={data} />
      </Flex>
      <Divider />
      <Flex gap={8} vertical>
        <Typography.Title level={2}>Form inputs</Typography.Title>
        <Input
          placeholder="Search"
          prefix={<UserOutlined />}
          isRequired
          label="Username"
        />
        <InputPassword
          placeholder="Search"
          prefix={<UserOutlined />}
          isRequired
          label="Password"
        />
        <InputNumber placeholder="Number" label="Number" />
        <Select
          label="Select"
          placeholder="Select"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        ></Select>
        <Flex vertical gap={4}>
          <Typography.Title level={5}>Checkbox</Typography.Title>
          <Checkbox>Option 1</Checkbox>
          <Checkbox>Option 2</Checkbox>
          <Checkbox>Option 3</Checkbox>
          <Checkbox>Option 4</Checkbox>
        </Flex>
        <Flex vertical>
          <Typography.Title level={5}>Radio</Typography.Title>
          <Radio.Group>
            <Radio value="a">item 1</Radio>
            <Radio value="b">item 2</Radio>
            <Radio value="c">item 3</Radio>
          </Radio.Group>
        </Flex>
        <Divider />
        <Flex gap={8} vertical>
          <Typography.Title level={2}>Date & Time Picker</Typography.Title>
          <Flex gap={20}><Datepicker placeholder="Ngày"/>
          <Input
          placeholder="Search"
          prefix={<UserOutlined />}
        />
          </Flex>
          <Timepicker placeholder="Giờ" type="range"/>
        </Flex>
      </Flex>
    </S.Wrapper>
  );
}
