import { Form, Modal } from 'antd';
import { useState } from 'react';
import Image from 'next/image';

import { UploadImage } from '@/utils/uploadImage';
import { config } from '@/components/modules/EditProfile/modal';

import Button from '@/components/core/common/Button';
import Loading from '@/components/modules/EditProfile/loading';

import image from '@/public/images/layout/avatar.jpeg';
import camera_icon from '@/public/icon/layout/camera-flip.svg';

import * as S from './style';

type InterfaceLoadingImage = {
  avatar: boolean;
  background: boolean;
};

const FOUR_BYTES: number = 4194304;
const initialLoadingImage = {
  avatar: false,
  background: false,
};

const ImageWall = ({ form, backgroundUrl, avatarUrl }: any) => {
  const [modal, contextHolder] = Modal.useModal();
  const [imageWall, setImageWall] = useState<string | null>(null);
  const [imageAvatar, setImageAvatar] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] =
    useState<InterfaceLoadingImage>(initialLoadingImage);

  const normFile = async (e: any) => {
    const files = e.target?.files;
    for (const file of files)
      if (!file?.type?.includes('image/') || file?.size >= FOUR_BYTES) {
        modal.error(config());
        return false;
      }
    try {
      setLoadingImage({
        ...loadingImage,
        [e.target.id]: true,
      });
      const url = await UploadImage(files);
      switch (e.target.id) {
        case 'background':
          setImageWall(url);
          form.setFieldsValue({
            backgroundURL: url,
          });
          break;
        case 'avatar':
          setImageAvatar(url);
          form.setFieldsValue({
            avatarURL: url,
          });
          break;
      }
      setLoadingImage({
        ...loadingImage,
        [e.target.id]: false,
      });
    } catch (err) {
      const content = {
        title: 'Lỗi không thể tải hình ảnh',
        text: `Có vẻ như đã có một sự cố bất đắc dĩ nào đó đã làm hình ảnh không thể tải lên, xin vui lòng thử lại!`,
      };
      modal.error(config(content));
    }
  };

  function OpenUploadFile(name: string) {
    const input = document.getElementById(name);
    input?.click();
  }

  return (
    <S.ImageWallWrapper>
      <S.ImageWall>
        <S.BlurWall />
        <Loading $isLoading={loadingImage.background} />
        {loadingImage.background || (
          <Image
            src={imageWall ?? backgroundUrl ?? image}
            alt="wall"
            width={640}
            height={640}
            className="image_wall"
          ></Image>
        )}
        <Form.Item
          name="backgroundUrl"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <input type="file" name="" id="background" accept="image/*" />
        </Form.Item>
        <S.Button
          onClick={() => OpenUploadFile('background')}
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
        <S.Avatar>
          <Loading $isLoading={loadingImage.avatar} />

          {loadingImage.avatar || (
            <Image
              src={imageAvatar ?? avatarUrl ?? image}
              alt="avatar"
              width={200}
              height={200}
            ></Image>
          )}
        </S.Avatar>
        <Form.Item
          name="avatarUrl"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <input type="file" id="avatar" accept="image/*" />
        </Form.Item>
        <Button
          $borderRadius="50px"
          $width={24}
          type="primary"
          onClick={() => {
            OpenUploadFile('avatar');
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
