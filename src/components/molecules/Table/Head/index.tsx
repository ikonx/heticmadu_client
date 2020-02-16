import React from 'react';
import { TableHeadCell } from "./_style";
import TextHead from "../../../atoms/Text/Table/TextHead";
import { TableHead, TableRow } from "@material-ui/core";

interface Props {}

export const index: React.FC<Props> = () => {
  return (
      <TableHead>
        <TableRow>
          <TableHeadCell />
          <TableHeadCell>
            <TextHead name={"Nom"} desc={true}/>
          </TableHeadCell>
          <TableHeadCell>
            <TextHead name={"Type"} desc={true}/>
          </TableHeadCell>
          <TableHeadCell>
            <TextHead name={"Pattern"} desc={true}/>
          </TableHeadCell>
          <TableHeadCell>
            <TextHead name={"Effectif"} desc={true}/>
          </TableHeadCell>
          <TableHeadCell>
            <TextHead name={"Date de création"} desc={true}/>
          </TableHeadCell>
          <TableHeadCell>
            <TextHead name={"Etat"} desc={true}/>
          </TableHeadCell>
        </TableRow>
      </TableHead>
  );
};

