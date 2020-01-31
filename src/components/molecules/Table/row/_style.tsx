import styled from "styled-components";
import { TableCell, TableRow, Typography } from "@material-ui/core";

export const TableBackground = styled(TableRow)`
    color: #333333;
    font-size: 1rem;
    height: 64px;
    border-collapse: separate;
    cursor: pointer;
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
    border: none !important;
    padding-top: 0;
    padding-bottom: 0;
`;

export const CellActive = styled(Typography)`
    background: #E0E0E0;
    border-radius: 4px;
    padding: .5rem;
    display: inline-block;
`;

export const GreenScore = styled.div`
    background: #6FCF97;
    color: #FFFFFF;
    border: 1px solid #27AE60;
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    font-weight: 600;
    font-size: 14px;
    svg {
      margin-right: 10px;
    }
`;