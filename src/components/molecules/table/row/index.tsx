import React from 'react';
import ellipse from "../../../../assets/img/ellipse.png";
import PopperMore from "../../../atoms/popper/popperMore";
import { Cell, CellActive, TableBackground } from "./_style";


interface Props {

}

export const index: React.FC<Props> = () => {

  return (
        <TableBackground>
            <Cell scope="row">
                <img src={ellipse} alt=""/>
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

