import React from 'react'
import { index as TableItem } from '../molecules/Table/row';
import { index as TableHead } from '../molecules/Table/head';
import { Table, TableBody, TableRow } from "@material-ui/core";
import styled from "styled-components";
import CompanyHeader from "../molecules/CompanyHeader/CompanyHeader";

const CompanyContainer = styled.section`
  width: calc(100% - 80px); 
  margin: 24px 40px 0;
`;

interface Props {}

const TableSpace = styled(TableRow)`
  border: 0 !important;
  padding: 12px !important;
  height: 24px;
`;

const CompanyTable = styled(Table)`
  margin-top: 24px;
`;

const Companies: React.FC<Props> = () => {
    return (
        <CompanyContainer>
            <CompanyHeader/>
            {/*companies*/}
            <CompanyTable>
                <TableHead />
                <TableBody>
                    {/* TODO: @DEV Loop over */}
                    <TableItem />
                    <TableSpace />
                    <TableItem />
                    <TableSpace />
                    <TableItem />
                </TableBody>
            </CompanyTable>
        </CompanyContainer>
    )
}

export default Companies
