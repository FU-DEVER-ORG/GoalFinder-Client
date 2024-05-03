
import * as S from './style';

type InterfaceInitialConfig = {
  title?: string;
  text?: string;
};

const initialConfig = {
  title: 'Không thể đọc file',
  text: `Không thể tải ảnh lên. Ảnh phải có kích thước nhỏ hơn 4 MB và được lưu
  dưới dạng file JPG, PNG, GIF, TIFF, HEIF hoặc WebP.`,
};
const config = ({ title, text }: InterfaceInitialConfig = initialConfig) => ({
  title: title,
  content: (
    <>
      <S.ReachableContextConsumer>{() => text}</S.ReachableContextConsumer>
    </>
  ),
});

export { config };