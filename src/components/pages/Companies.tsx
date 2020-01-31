import React from 'react'
import styled from "styled-components";
import { index as TableItem } from '../molecules/Table/Row';
import { index as TableHead } from '../molecules/Table/Head';
import { Table, TableBody, TableRow } from "@material-ui/core";
import CompanyHeader from "../molecules/CompanyHeader/CompanyHeader";

const CompanyContainer = styled.section`
  width: calc(100% - 80px); 
  margin: 24px 40px 0;
`;

const TableSpace = styled(TableRow)`
  border: 0 !important;
  padding: 12px !important;
  height: 24px;
`;

const CompanyTable = styled(Table)`
  margin-top: 24px;
`;

interface Props {}

const Companies: React.FC<Props> = () => {
    return (
        <CompanyContainer>
            <CompanyHeader/>
            <CompanyTable>
                <TableHead />
                <TableBody>
                    {/* TODO: @DEV Loop over */}
                    <TableItem params={{ withLogo: true, withGreenScore: false }}/>
                    <TableSpace />
                    <TableItem params={{ withLogo: true, withGreenScore: false }}/>
                    <TableSpace />
                    <TableItem params={{ withLogo: true, withGreenScore: false }}/>
                </TableBody>
            </CompanyTable>
        </CompanyContainer>
    )
}

export default Companies
