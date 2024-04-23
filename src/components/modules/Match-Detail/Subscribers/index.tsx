import { Avatar, Flex, TableProps, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import Table from '@/components/core/common/Table';

import * as S from './styles';

interface DataType {
  name: string;
  avata: string;
  reputation: number;
  position: string;
  compete: string;
  phone: string;
}
function Subscribers() {
  const dataSource: DataType[] = [
    {
      name: 'Minh Hiển',
      avata: '/images/layout/avatar.jpeg',
      reputation: 100,
      position: 'Tiền đạo, tiền vệ',
      compete: 'Vui vẻ',
      phone: '0356555425',
    },
    {
      name: 'Minh Hiển',
      avata: '/images/layout/avatar.jpeg',
      reputation: 100,
      position: 'Tiền đạo, tiền vệ',
      compete: 'Vui vẻ',
      phone: '0356555425',
    },
    {
      name: 'Minh Hiển Nguyễn ',
      avata: '/images/layout/avatar.jpeg',
      reputation: 100,
      position: 'Tiền đạo, tiền vệ',
      compete: 'Vui vẻ',
      phone: '0356555425',
    },
    {
      name: 'Minh Hiển Minh',
      avata: '/images/layout/avatar.jpeg',
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
      render: (text, record, index) => index + 1
    },
    {
      title: 'Tên cầu thủ',
      dataIndex: 'name',
      key: 'name',
      align: 'left',
      width: 200,
      render: (text, record) => (
        <Flex justify="left" align='center'>
          <Avatar src={record.avata} size={35} alt="Avatar" />
          <S.Name>{record.name}</S.Name>
        </Flex>
      ),
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
      width: 160,
      render: (text: any, record: any) => (
        <Flex justify="center">
          <S.Buttons
            onClick={() => handleAccept(record.number)}
            style={{ marginRight: '10px' }}
          >
          <CheckOutlined />
          </S.Buttons>
          <S.Buttons danger onClick={() => handleReject(record.key)}>
          <CloseOutlined />
          </S.Buttons>
        </Flex>
      ),
    },
  ];


  const handleAccept = (key: number) => {};

  const handleReject = (key: string) => {};

  return (
    <Flex gap={8} vertical align="center">
      <Typography.Title level={2}>Phê duyệt</Typography.Title>
        <Table columns={columns} dataSource={dataSource} />
    </Flex>
  );
}

export default Subscribers;
