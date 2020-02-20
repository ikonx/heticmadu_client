import styled from "styled-components";
import { TableCell, TableRow, Typography } from "@material-ui/core";
import { Colors, Fonts } from "../../../../utils/styles";

export const TableBackground = styled(TableRow)`
    && {  
      color: ${Colors.white};
      font-size: 1rem;
      height: 64px;
      border-collapse: separate;
      cursor: pointer;
      border-bottom: 1px solid ${Colors.lightGrey};
    }
`;

export const Cell = styled(TableCell)`
    && {
      background: ${Colors.white};
      border: none;
      padding-top: 0;
      padding-bottom: 0;
      font-size: 13px;
      font-family: ${Fonts.regular};
    }
`;

export const CellActive = styled(Typography)<{active: string | undefined}>`
    && {
      background: ${props => props.active === 'true' ? Colors.green : Colors.red};
      color: ${props => props.active === 'true' ? Colors.darkGreen : Colors.darkRed};
      border-radius: 15px;
      font-size: 13px;
      padding: .5rem;
      display: inline-block;
      font-family: ${Fonts.medium};
    }
`;