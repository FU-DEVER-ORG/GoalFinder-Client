import React, { useState } from 'react';
import { Flex, Table, Button } from 'antd';
import './owner.css';
interface Column {
  title: string;
  dataIndex: string;
  key: string;
  align: 'center';
  width?: number;
  render?: (text: any, record: any) => JSX.Element;
}
function Subscribers() {
  const dataSource = [
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

  const columns: Column[] = [
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
            type="primary"
            onClick={() => handleAccept(record.number)}
            style={{ marginRight: '10px' }}
          >
            Chấp nhận
          </Button>
          <Button type="default" onClick={() => handleReject(record.key)}>
            Từ chối
          </Button>
        </Flex>
      ),
    },
  ];

  const newData = dataSource.map((item, index) => {
    return { ...item, number: index+1 };
  });

  const handleAccept = (key: number) => {
    // Đảm bảo key là kiểu string
    console.log('Chấp nhận item có key:', key);
    // Viết code xử lý tại đây
  };

  const handleReject = (key: string) => {
    // Đảm bảo key là kiểu string
    console.log('Từ chối item có key:', key);
    // Viết code xử lý tại đây
  };

  // Thêm số thứ tự vào mỗi đối tượng dữ liệu trong mảng
 

  return (
    <Flex vertical align="center">
      <h5>Phê Duyệt</h5>
      <Flex justify="center">
        <Table
          dataSource={newData}
          columns={columns}
          pagination={false}
          className="custom-table"
        />
      </Flex>
    </Flex>
  );
}

export default Subscribers;
