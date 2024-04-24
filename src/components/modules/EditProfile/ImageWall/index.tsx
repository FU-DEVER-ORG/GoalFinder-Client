import { Upload, Form } from 'antd';
import Image from 'next/image';

import Button from '@/components/core/common/Button';

import image from '@/public/images/layout/avatar.jpeg';
import camera_icon from '@/public/icon/layout/camera-flip.svg';

import * as S from './style';

const ImageWall = () => {
  function OpenUploadFile(name: string) {
    const input = document.getElementById(name);
    input?.click();
  }
  return (
    <S.ImageWallWrapper>
      <S.ImageWall>
        <S.BlurWall></S.BlurWall>
        <Image
          src={image}
          alt="wall"
          width={640}
          height={640}
          className="image_wall"
        ></Image>
        <Form.Item name="image_wall">
          <input
            type="file"
            name=""
            id="add_image_wall"
            accept="image/png image/jpg"
          />
        </Form.Item>
        <Button
          onClick={() => OpenUploadFile('add_image_wall')}
          $borderRadius="4px"
          $backgroundColor="#E4E6EB"
          $color="#000000"
          $fontSize="12px"
          $fontWeight="400"
        >
          <p>Thêm ảnh bìa</p>
          <Image
            src={camera_icon}
            alt="icon camera"
            width={30}
            height={30}
          ></Image>
        </Button>
      </S.ImageWall>
      <S.AvatarWrapper>
        <S.Avatar src={image} alt="avatar" width={200} height={200} />
        <Form.Item>
          <input type="file" id="add_avatar" accept="image/png image/jpg" />
          <Button
            $borderRadius="50px"
            $width={24}
            $backgroundColor="#E4E6EB"
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
        </Form.Item>
      </S.AvatarWrapper>
    </S.ImageWallWrapper>
  );
};

export default ImageWall;
