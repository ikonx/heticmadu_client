import styled from 'styled-components';
import { Button } from "@material-ui/core";

export const ButtonWrapper = styled(Button)`
  background: #E0E0E0 !important;
  border-radius: .5rem !important;
  box-shadow: 0 4px 4px rgba(151, 151, 151, .25);
  font-size: 18px !important;
  text-transform: capitalize !important;
  padding: 8px 8px 8px 11px;
  color: #333333 !important;
  svg {
    margin-right: 11px;
  }
`;