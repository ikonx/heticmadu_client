import React from 'react';
import startUpLogo from "../../../../assets/img/startUp-logo.png";
import PopperMore from "../../../atoms/Popper/popperMore";
import { Cell, CellActive, TableBackground } from "./_style";


interface Props {}

export const index: React.FC<Props> = () => {
  return (
        <TableBackground>
            <Cell scope="row">
                <img src={startUpLogo} alt=""/>
            </Cell>
            <Cell>Turningpoint</Cell>
            <Cell>Start-up</Cell>
            <Cell>@Turningpoint.net</Cell>
            <Cell>15</Cell>
            <Cell>22 Oct 2020</Cell>
            <Cell>
                <CellActive>Active</CellActive>
            </Cell>
            <Cell>
               <PopperMore/>
            </Cell>
        </TableBackground>
  );
};

