import React from 'react'
import { index as TableItem } from '../molecules/table/row';
import { index as TableHead } from '../molecules/table/head';
import { Table, TableBody } from "@material-ui/core";

interface Props {

}

const Companies: React.FC<Props> = () => {
    return (
        <div>
            companies
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
