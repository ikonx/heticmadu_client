import React from 'react';
import startUpLogo from "../../../../assets/img/startUp-logo.png";
import PopperMore from "../../../atoms/Popper/PopperMore";
import { Cell, CellActive, TableBackground, GreenScore } from "./_style";
import {
  Eco
} from '@material-ui/icons'


interface Props {
  params: {
    withLogo: boolean,
    withGreenScore: boolean
  }
}

export const index: React.FC<Props> = ({ params }) => {
  const { withLogo, withGreenScore } = params;

  return (
        <TableBackground>
            { withLogo && (
              <Cell scope="row">
                  <img src={startUpLogo} alt=""/>
              </Cell>
            )}
            <Cell>Turningpoint</Cell>
            <Cell>Start-up</Cell>
            <Cell>@Turningpoint.net</Cell>
            <Cell>15</Cell>
            <Cell>22 Oct 2020</Cell>
            <Cell>
                <CellActive>Active</CellActive>
            </Cell>
            { withGreenScore && (
              <Cell>
                <GreenScore>
                  <Eco />
                  8,7
                </GreenScore>
              </Cell>
            )}
            <Cell>
               <PopperMore/>
            </Cell>
        </TableBackground>
  );
};

