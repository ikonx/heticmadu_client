import React from 'react';
import { TableHeadCell, TableHeadContainer, TableRowContainer } from "./_style";
import TextHead from "../../../atoms/Text/Table/TextHead";

interface Props {}

export const index: React.FC<Props> = () => {
  const valueHead = [
    'Nom',
    'Type',
    'Pattern',
    'Effectif',
    'Crée le',
    'État'
  ];
  return (
      <TableHeadContainer>
        <TableRowContainer>
          { valueHead.map(item => (
            <TableHeadCell>
              <TextHead name={item}/>
            </TableHeadCell>
          )) }
          <TableHeadCell />
        </TableRowContainer>
      </TableHeadContainer>
  );
};

