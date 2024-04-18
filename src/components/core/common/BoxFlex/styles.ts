import { Flex } from "antd";
import styled from "styled-components";

export const BoxWrapper = styled(Flex)<{$padding: string}>`
    padding: ${(props) => props.$padding};
`;
