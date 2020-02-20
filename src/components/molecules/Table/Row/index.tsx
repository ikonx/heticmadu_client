import React from 'react';
import PopperMore from "../../../atoms/Popper/PopperMore";
import { Cell, CellActive, TableBackground } from "./_style";


export interface TableRowProps {
  id?: string;
  name: string;
  type: string;
  pattern: string;
  employeesTotal: string;
  created: string;
  address?: string;
  perimeter?: string;
  emailAdmin?: string;
  status?: boolean;
  onClick?: () => void;
  logo?: string;
  employeesData: {
    name: string;
    pattern: string;
    lastConnection: string;
  }[]
}

export const index: React.FC<TableRowProps> = ({ name, type, pattern, employeesTotal, created, status, onClick }) => {
  return (
        <TableBackground onClick={onClick}>
            <Cell>{ name }</Cell>
            <Cell>{ type }</Cell>
            <Cell>{ pattern }</Cell>
            <Cell>{ employeesTotal }</Cell>
            <Cell>{ created }</Cell>
            { status !== undefined && (
              <Cell>
                  <CellActive active={status.toString()}>{ status ? 'Active' : 'Désactiver' }</CellActive>
              </Cell>
            )}
            <Cell>
               <PopperMore/>
            </Cell>
        </TableBackground>
  );
};

