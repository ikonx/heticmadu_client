import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Cell, CellActive, TableBackground } from "./_style";


export interface TableRowProps {
  onClick?: () => void;
  deleteRow?: boolean;
  tableRowValues: any;
  deleteClick?: () => void;
}

export const index: React.FC<TableRowProps> = ({ onClick, deleteRow,tableRowValues, deleteClick }) => {
  const hasID = tableRowValues.id;
  const data = Object.values(tableRowValues);
  if (hasID) {
    data.shift();
    data.splice(-2, 2);
  };

  return (
        <TableBackground onClick={onClick}>
            { data.map((item: any, i) => {
                return item === "Open" || item === "Close" ? (
                    <Cell key={i}>
                      <CellActive active={item === 'Open' ? 'true' : 'false'}>{item === 'Open' ? 'Active' : 'Désactiver'}</CellActive>
                    </Cell>
                ) : (
                    <Cell key={i}>{item}</Cell>
                )
            })}
            { deleteRow && (
                <Cell onClick={deleteClick}>
                    <DeleteIcon />
                </Cell>
            )}
        </TableBackground>
  );
};

