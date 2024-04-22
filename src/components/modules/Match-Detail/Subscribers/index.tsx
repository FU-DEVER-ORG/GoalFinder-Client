import React, { useState } from 
'react';
import { Flex, TableProps, Typography } from 
'antd';

import Table from 
'@/components/core/common/Table';
import Button from
 '@/components/core/common/Button';

import * as S from './styles' 
interface DataType {
  name: string;
  reputation: number;
  position: string;
  compete: string;
  phone: string;
}
function Subscribers() {
  const dataSource: DataType[] = [
    {
      name: 'Minh Hiển',
      reputation: 100,
      position: 'Tiền đạo, tiền vệ',
      compete: 'Vui vẻ',
      phone: '0356555425',
    },
    {
      name: 'Minh Hiển',
      reputation: 100,
      position: 'Tiền đạo, tiền vệ',
      compete: 'Vui vẻ',
      phone: '0356555425',
    },
    {
      name: 'Minh Hiển Nguyễn ',
      reputation: 100,
      position: 'Tiền đạo, tiền vệ',
      compete: 'Vui vẻ',
      phone: '0356555425',
    },
    {
      name: 'Minh Hiển Minh Hiển Minh Hiển ',
      reputation: 100,
      position: 'Tiền đạo, tiền vệ',
      compete: 'Vui vẻ',
      phone: '0356555425',
    },
  ];

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'number',
      key: 'number',
      align: 'center',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 160,
    },
    {
      title: 'Uy tín',
      dataIndex: 'reputation',
      key: 'reputation',
      align: 'center',
      width: 80,
    },
    {
      title: 'Vị trí',
      dataIndex: 'position',
      key: 'position',
      align: 'center',
      width: 160,
    },
    {
      title: 'Cạnh tranh',
      dataIndex: 'compete',
      key: 'compete',
      align: 'center',
      width: 120,
    },
    {
      title: 'SĐT',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center',
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      width: 230,
      render: (text: any, record: any) => (
        <Flex justify="center">
          <Button
            onClick={() => handleAccept(record.number)}
            style={{ marginRight: '10px' }}
          >
            Chấp nhận
          </Button>
          <Button danger onClick={() => handleReject(record.key)}>
            Từ chối
          </Button>
        </Flex>
      ),
    },
  ];

  const newData = dataSource.map((item, index) => {
    return { ...item, number: index + 1 };
  });

  const handleAccept = (key: number) => {};

  const handleReject = (key: string) => {};

  return (
    <Flex gap={8} vertical align="center">
      <Typography.Title level={2}>Phê duyệt</Typography.Title>
      <S.Custom>
      <Table columns={columns} dataSource={newData} />
      </S.Custom>
    </Flex>
  );
}

export default Subscribers;
