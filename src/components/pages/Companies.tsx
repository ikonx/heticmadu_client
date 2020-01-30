import React from 'react'
import { index as TableItem } from '../molecules/Table/row';
import { index as TableHead } from '../molecules/Table/head';
import { Table, TableBody } from "@material-ui/core";
import BtnFilter from "../atoms/Buttons/filter/btnFilter";

interface Props {

}

const Companies: React.FC<Props> = () => {
    return (
        <div>
            companies
            <BtnFilter />
            <Table style={{ width: 'calc(100% - 80px)', margin: '0 40px' }}>
                <TableHead />
                <TableBody>
                    <TableItem />
                </TableBody>
            </Table>
        </div>
    )
}

export default Companies
