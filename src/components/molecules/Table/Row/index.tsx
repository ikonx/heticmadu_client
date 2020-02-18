import React from 'react';
import PopperMore from "../../../atoms/Popper/PopperMore";
import { Cell, CellActive, TableBackground } from "./_style";


interface Props {
  status: boolean
}

export const index: React.FC<Props> = ({ status }) => {
  return (
        <TableBackground>
            <Cell>Victor Cantine</Cell>
            <Cell>Startup</Cell>
            <Cell>@turning.net</Cell>
            <Cell>23</Cell>
            <Cell>12/03/21</Cell>
            <Cell>
                <CellActive active={status ? 1 : 0}>{ status ? 'Active' : 'Désactive' }</CellActive>
            </Cell>
            <Cell>
               <PopperMore/>
            </Cell>
        </TableBackground>
  );
};

