import styled from "styled-components";
import { Colors } from "../../../utils/styles";

export const PageHeaderContainer = styled.div<{ formBar: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.formBar ? '67px' : '31px'};
  padding: 2rem 2rem 0 2rem;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${Colors.lightGrey};
    display: ${props => props.formBar ? 'block' : 'none'};
    position: absolute;
    bottom: -31px;
    left: 0;
  }
`;