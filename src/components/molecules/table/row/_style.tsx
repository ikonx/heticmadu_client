import styled from "styled-components";
import { TableCell, TableRow, Typography } from "@material-ui/core";

export const TableBackground = styled(TableRow)`
    color: #333333;
    font-size: 1rem;
    height: 64px;
    border-collapse: separate;
    td {
      &:first-child {
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
      }
      &:last-child {
        border-top-right-radius: .5rem;
        border-bottom-right-radius: .5rem;
      }
    }
`;

export const Cell = styled(TableCell)`
    background: #F2F2F2;
    box-shadow: 4px 4px 4px rgba(151, 151, 151, 0.25);
    border: none;
    padding-top: 0;
    padding-bottom: 0;
`;

export const CellActive = styled(Typography)`
    background: #E0E0E0;
    border-radius: 4px;
    padding: .5rem;
    display: inline-block;
`;