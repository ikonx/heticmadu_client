import styled from "styled-components";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import { Colors } from "../../../../utils/styles";

export const TableHeadContainer = styled(TableHead)``;

export const TableHeadCell = styled(TableCell)`
  && {
    padding: 1rem;
    background: ${Colors.darkWhite};
    border-bottom: 1px solid ${Colors.lightGrey};   
  }
`;

export const TableRowContainer = styled(TableRow)``;