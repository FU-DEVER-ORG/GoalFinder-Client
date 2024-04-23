import Image from 'next/image';
import styled from 'styled-components';

export const ImageWallWrapper = styled.div`
  display: block;
  position: relative;

  width: 100%;
  aspect-ratio: 15 / 7;

  input[type='file'] {
    display: none !important;
  }
`;
export const ImageWall = styled.div`
  position: relative;

  width: 100%;
  max-height: 250px;
  aspect-ratio: 64 / 25;

  .image_wall {
    position: absolute !important;

    width: 100%;
    height: 100%;

    object-fit: cover;

    z-index: 0;
  }

  .ant-btn {
    position: absolute !important;

    display: flex !important;
    align-items: center;
    
    bottom: 10px;
    right: 10px;
    
    border: 0 !important;
    
    z-index: 99;
    @media ${({ theme }) => theme.breakpoints.mdMax} {
      padding: 5px 10px !important;
      
      img {

        width: 20px;
        height: 20px;
      
      }
    
    }

    p {
      line-height: normal !important;
    }

    img {
      width: 30px;
      height: 30px;
    }

  }
`;
export const BlurWall = styled.span`
  position: absolute;
  inset: 0;

  box-shadow: inset 0 -30px 20px -10px rgba(0, 0, 0, 0.5);

  z-index: 1;
`;
export const AvatarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 40px;
  z-index: 2;

  width: 160px;
  height: 160px;
  .ant-btn {
    position: absolute !important;
    bottom: 48px;
    right: 10px;

    width: 50px !important;
    height: 50px !important;

    padding: 0 !important;
    border: 0 !important;

    img {
      width: 60% !important;
      height: 60% !important;
    }
  }
  @media ${({ theme }) => theme.breakpoints.mdMax} {
    width: 100px;
    height: 100px;

    left: 20px;
    .ant-btn {
      width: 40px !important;
      height: 40px !important;

      bottom: 35px;
      right: 5px;
    }
  }
`;
export const Avatar = styled(Image)`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  border: 4px solid #fff;
`;
