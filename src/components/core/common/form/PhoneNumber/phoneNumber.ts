import PhoneInputWithCountrySelect from 'react-phone-number-input';
import styled from 'styled-components';
import 'react-phone-number-input/style.css';

export const PhoneNumberWrapper = styled(PhoneInputWithCountrySelect)`
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.tertiary};
  }
  .PhoneInputCountry {
    padding: 12px 10px;

    background-color: ${(props) => props?.theme?.colors?.secondary};
    .PhoneInputCountryIcon {
      width: 30px;
      height: 20px;

      img {
        width: 30px;
        height: 20px;
      }
    }
    .PhoneInputCountryIcon--border {
      box-shadow: none !important;
    }
  }

  input {
    padding: 12px 10px;
    border: none;
    background: ${(props) => props?.theme?.colors?.newtralLightest};
    height: 50px;
    border-radius: 0 !important;
    color: ${(props) => props?.theme?.colors?.primary};
    font-size: ${(props) => props?.theme?.fontSize?.md};
    font-weight: ${(props) => props?.theme?.fontWeight?.medium};
    line-height: 24px;

    &::placeholder {
      color: ${(props) => props?.theme?.colors?.newtralLighter};
      font-size: ${(props) => props?.theme?.fontSize?.base};
      font-weight: ${(props) => props?.theme?.fontWeight?.medium};
      opacity: 1;
    }
  }
`;
