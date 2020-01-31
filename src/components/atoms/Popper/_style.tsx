import styled from 'styled-components';
import { Button, MenuList } from "@material-ui/core";

export const PopperList = styled(MenuList)`
  padding: 0;
  background: #E0E0E0;
  z-index: 10 !important;
  li {
    padding: 6px 14px 12px;
    font-size: 14px;
    &:first-child {
      padding-bottom: 6px;
    }
    svg {
      margin-right: 10px;
      font-size: 1rem;
    }
  }
`;

export const PopperButton = styled(Button)`
  padding: 0;
`;