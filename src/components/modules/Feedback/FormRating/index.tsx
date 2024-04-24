import React, { useState } from 'react';
import { List, Avatar, Flex } from 'antd';

import * as S from './styles';


interface Player {
  id: number;
  avatar: string;
  name: string;
  age: number;
  position: string;
  competitiveness: string;
  phoneNumber: string;
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
    // Add more players as needed
  ];

  const toggleSelection = (playerId: number) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  const handleSubmit = () => {
    // Handle submission of selected players
    console.log('Selected players:', selectedPlayers);
  };

  return (

    <>
      <S.RatingTitle style={{margin: "18px 0px"}}>Chọn để tố cáo sủi kèo</S.RatingTitle>
      <S.PlayerWrapper>
        {players.map((player) => (
          <S.CustomButton 
          key={player.id}
          onClick={() => toggleSelection(player.id)}
          selected= {selectedPlayers.includes(player.id)}
          >
            <S.PlayerFlex>
              <S.PlayerItem style={{width:"5%"}}>{player.id}</S.PlayerItem>
              <S.PlayerAvatarName style={{width:"30%", textAlign: "left"}}>
                <S.CustomAvatar src={player.avatar} />
                {player.name}
              </S.PlayerAvatarName>
              <S.PlayerItem style={{width:"5%"}}>{player.age}</S.PlayerItem>              
              <S.PlayerItem style={{width:"30%"}}>{player.position}</S.PlayerItem>
              <S.PlayerItem style={{width:"15%"}}>{player.competitiveness}</S.PlayerItem>
              <S.PlayerItem style={{width:"15%"}}>{player.phoneNumber}</S.PlayerItem>
            </S.PlayerFlex>
          </S.CustomButton>

        ))}
      </S.PlayerWrapper>
      <S.ConfirmButton type="primary" onClick={handleSubmit}>
        Submit
      </S.ConfirmButton>
    </>
  );
};

export default FormRating;
