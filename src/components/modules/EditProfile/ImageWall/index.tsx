import { Form, Modal } from 'antd';
import Image from 'next/image';

import config from './modal';
import Button from '@/components/core/common/Button';

import image from '@/public/images/layout/avatar.jpeg';
import camera_icon from '@/public/icon/layout/camera-flip.svg';

import * as S from './style';
import { ChangeEvent, useState } from 'react';

const FOUR_BYTES: number = 4194304;


const ImageWall = () => {
  const [modal, contextHolder] = Modal.useModal();
  const [imageWall, setImageWall] = useState<string | null>(null);
  const [imageAvatar, setImageAvatar] = useState<string | null>(null);

  const normFile = (e: any) => {
    const target = e.target as HTMLInputElement;
    if (
      target.files &&
      (!target?.files[0]?.type.includes('image/') ||
        target?.files[0]?.size >= FOUR_BYTES)
    ) {
      modal.error(config);
      return 0;
    }
    if (target.files && target.files[0]) {
      const url = URL.createObjectURL(target.files[0]);
      switch (e.target.id) {
        case 'add_image_wall':
          setImageWall(url);
          break;
        case 'add_avatar':
          setImageAvatar(url);
          break;
      }
    }
    return e?.target.files[0];
  };

  function OpenUploadFile(name: string) {
    const input = document.getElementById(name);
    input?.click();
  }
  return (
    <S.ImageWallWrapper>
      <S.ImageWall>
        <S.BlurWall />
        <Image
          src={imageWall || image}
          alt="wall"
          width={640}
          height={640}
          className="image_wall"
        ></Image>
        <Form.Item
          name="imageWallURL"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <input type="file" name="" id="add_image_wall" accept="image/*" />
        </Form.Item>
        <S.Button
          onClick={() => OpenUploadFile('add_image_wall')}
          $borderRadius="4px"
          $backgroundColor="#E4E6EB"
          $color="#000000"
          $fontSize="12px"
          $fontWeight="400"
          type="primary"
          icon={
            <Image
              src={camera_icon}
              alt="icon camera"
              width={30}
              height={30}
            ></Image>
          }
        >
          <p className="typography">Thêm ảnh bìa</p>
        </S.Button>
      </S.ImageWall>
      <S.AvatarWrapper>
        <S.Avatar
          src={imageAvatar || image}
          alt="avatar"
          width={200}
          height={200}
        />
        <Form.Item
          name="avatarURL"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <input type="file" id="add_avatar" accept="image/*" />
        </Form.Item>
        <Button
          $borderRadius="50px"
          $width={24}
          type="primary"
          onClick={() => {
            OpenUploadFile('add_avatar');
          }}
        >
          <Image
            src={camera_icon}
            alt="icon camera"
            width={30}
            height={30}
          ></Image>
        </Button>
      </S.AvatarWrapper>
      {contextHolder}
    </S.ImageWallWrapper>
  );
};

export default ImageWall;
