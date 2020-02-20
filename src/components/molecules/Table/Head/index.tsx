import React from 'react';
import { TableHeadCell, TableHeadContainer, TableRowContainer } from "./_style";
import TextHead from "../../../atoms/Text/Table/TextHead";

interface Props {
  tableValues: string[],
  deleteRow?: boolean;
}

export const index: React.FC<Props> = ({ tableValues,deleteRow }) => {
  return (
      <TableHeadContainer>
        <TableRowContainer>
          { tableValues.map((item, i) => (
            <TableHeadCell key={i}>
              <TextHead name={item}/>
            </TableHeadCell>
          )) }
          { deleteRow && (
            <TableHeadCell />
          )}
        </TableRowContainer>
      </TableHeadContainer>
  );
};