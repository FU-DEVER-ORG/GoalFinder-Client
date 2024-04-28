import { createContext } from 'react';
const ReachableContext = createContext(null);
const config = {
  title: 'Không thể đọc file',
  content: (
    <>
      <ReachableContext.Consumer>
        {() => ` Không thể tải ảnh lên. Ảnh phải có kích thước nhỏ hơn 4 MB và được lưu
      dưới dạng file JPG, PNG, GIF, TIFF, HEIF hoặc WebP.`}
      </ReachableContext.Consumer>
    </>
  ),
};

export default config;
