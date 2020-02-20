import React from 'react';
import { TableHeadCell, TableHeadContainer, TableRowContainer } from "./_style";
import TextHead from "../../../atoms/Text/Table/TextHead";

interface Props {
  tableValues: string[]
}

export const index: React.FC<Props> = ({ tableValues }) => {

  return (
      <TableHeadContainer>
        <TableRowContainer>
          { tableValues.map((item, i) => (
            <TableHeadCell key={i}>
              <TextHead name={item}/>
            </TableHeadCell>
          )) }
          <TableHeadCell />
        </TableRowContainer>
      </TableHeadContainer>
  );
};

