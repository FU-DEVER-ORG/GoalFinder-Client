import { Form } from 'antd';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { UploadImage } from '@/utils/uploadImage';
import Config from '@/components/modules/EditProfile/message';

import Button from '@/components/core/common/Button';
import Loading from '@/components/modules/EditProfile/loading';

import avatar_default from '@/public/images/layout/avatar_default.png';
import background_default from '@/public/images/layout/background_default.png';
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

type InterfaceImageUpload = {
  backgroundUrl?: string;
  avatarUrl?: string;
};

const ImageWall = ({ form, backgroundUrl, avatarUrl, nickName }: any) => {
  const [imageUpload, setImageUpload] = useState<InterfaceImageUpload>();
  const [loadingImage, setLoadingImage] =
    useState<InterfaceLoadingImage>(initialLoadingImage);

  const config = Config();
  const normFile = async (e: any) => {
    const files = e.target?.files;
    for (const file of files)
      if (!file?.type?.includes('image/') || file?.size >= FOUR_BYTES) {
        config.error('Không thể tải file không phải ảnh!');
        return false;
      }
    try {
      setLoadingImage({
        ...loadingImage,
        [e.target.id]: true,
      });
      const url = await UploadImage(files, `${e.target.id}_${nickName}`);
      switch (e.target.id) {
        case 'background':
          setImageUpload({ ...imageUpload, backgroundUrl: url });
          form.setFieldsValue({
            backgroundUrl: url,
          });
          break;
        case 'avatar':
          setImageUpload({ ...imageUpload, avatarUrl: url });
          form.setFieldsValue({
            avatarUrl: url,
          });
          break;
      }
    } catch (err) {
      config.error('Đường truyền không ổn định!');
    }
    setLoadingImage({
      ...loadingImage,
      [e.target.id]: false,
    });
  };

  function OpenUploadFile(name: string) {
    const input = document.getElementById(name);
    input?.click();
  }

  useEffect(() => {
    const newImageUpload = {
      avatarUrl: undefined,
      backgroundUrl: undefined,
    };
    if (avatarUrl) newImageUpload.avatarUrl = avatarUrl;
    if (backgroundUrl) newImageUpload.backgroundUrl = backgroundUrl;
    setImageUpload(newImageUpload);
  }, [avatarUrl, backgroundUrl]);

  return (
    <>
      {config.contextHolder}
      <S.ImageWallWrapper>
        <S.ImageWall>
          <S.BlurWall />
          <Loading $isLoading={loadingImage.background} />
          {loadingImage.background || (
            <Image
              src={imageUpload?.backgroundUrl ?? background_default}
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
                src={imageUpload?.avatarUrl ?? avatar_default}
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
      </S.ImageWallWrapper>
    </>
  );
};

export default ImageWall;
