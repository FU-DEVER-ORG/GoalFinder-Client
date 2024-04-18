import { TableProps} from 'antd';

import * as S from './table.styles';


interface TablePropsInterface extends TableProps<any> {
}

function Table({ ...rest }: TablePropsInterface) {

  return (
    <S.Table
        pagination={false}
        {...rest}
      />
  );
}

export default Table;
