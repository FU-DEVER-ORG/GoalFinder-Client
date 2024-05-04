import React, { useState } from 'react';

import * as S from './styles';

interface Player {
  id: number;
  avatar?: string;
  name?: string;
  age?: number;
  position?: string;
  competitiveness?: string;
  phoneNumber?: string;
}

const FormRating: React.FC = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);

  const players: Player[] = [
    {
      id: 1,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Lionel Messi',
      age: 25,
      position: 'Tiền đạo',
      competitiveness: 'Vui vẻ',
      phoneNumber: '123456789',
    },
    {
      id: 2,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 3,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 4,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 5,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 6,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 7,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 8,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 9,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 10,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
    {
      id: 11,
      avatar: 'images/layout/avatar.jpeg',
      name: 'Trần Quang Hiệp',
      age: 28,
      position: 'Tiền đạo, Hậu vệ',
      competitiveness: 'Vui vẻ',
      phoneNumber: '987654321',
    },
  ];

  const toggleSelection = (playerId: number) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <S.RatingTitle>
        Chọn để tố cáo sủi kèo
      </S.RatingTitle>
      <S.PlayerWrapper>
        {players.map((player,index) => (
          <S.CustomButton
            key={player?.id}
            onClick={() => toggleSelection(player?.id)}
            selected={selectedPlayers.includes(player?.id)}
          >
            <S.PlayerFlex>
              <S.PlayerItemOrder>{player?.id}</S.PlayerItemOrder>
              <S.PlayerAvatar>
                <S.CustomAvatar src={player?.avatar}/>
              </S.PlayerAvatar>
              <S.PlayerName>{player?.name}</S.PlayerName>
              <S.PlayerItemAge>{player?.age}</S.PlayerItemAge>
              <S.PlayerItemPosition>{player?.position}</S.PlayerItemPosition>
              <S.PlayerItemCompetitive>{player?.competitiveness}</S.PlayerItemCompetitive>
              <S.PlayerItemPhoneNum>{player?.phoneNumber}</S.PlayerItemPhoneNum>
            </S.PlayerFlex>
          </S.CustomButton>
        ))}
      </S.PlayerWrapper>
      <S.ConfirmButton type="primary" onClick={handleSubmit}>
        Xác nhận
      </S.ConfirmButton>
    </>
  );
};

export default FormRating;
