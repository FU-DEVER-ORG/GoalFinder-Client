import styled from 'styled-components';

import ButtonFromCommon from '@/components/core/common/Button';

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

  overflow: hidden;

  .image_wall {
    position: absolute !important;

    width: 100% !important;
    height: 100% !important;

    object-fit: cover !important;

    user-select: none;

    z-index: 0;
  }

  .ant-btn {
    position: absolute !important;

    display: flex !important;
    align-items: center;

    bottom: 10px;
    right: 10px;

    border: 0 !important;

    z-index: 2;
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

  pointer-events: none !important;
  user-select: none !important;

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
    z-index: 2;
    
    bottom: 10px;
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
      width: 30px !important;
      height: 30px !important;

      bottom: 5px;
      right: 5px;

    }
  }
`;
export const Avatar = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  background-color: #fff;
  overflow: hidden;

  border-radius: 50%;
  border: 4px solid #fff;

  img {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const Button = styled(ButtonFromCommon)`
  padding: 5px 10px !important;
  color: #fff;

  .ant-btn-icon {
    margin: 0 !important;
    aspect-ratio: 1/ 1 !important;
  }

  .typography {
    display: block !important;
    @media ${({ theme }) => theme.breakpoints.mdMax} {
      display: none !important;
    }
  }
`;
