import React from 'react'
import styled from "styled-components";
import { index as TableItem } from '../molecules/Table/Row';
import { index as TableHead } from '../molecules/Table/Head';
import { Grid, Table, TableBody, TableRow } from "@material-ui/core";
import PageHeader from "../molecules/PageHeader/PageHeader";
import ReactMapboxGl from 'react-mapbox-gl';


const CompanyContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 64px); 
  margin: 0;
`;

const TableSpace = styled(TableRow)`
  && {
    border: 0;
    padding: 12px;
    height: 24px;
  }
`;

const CompanyTable = styled(Table)`
  margin-top: 24px;
`;

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const LeftColumn = styled(Grid)`
  && {
    padding: 2rem 2rem 0;
  }
`;

interface Props {}

const Companies: React.FC<Props> = () => {
    return (
        <CompanyContainer>
            <Grid container>
                <LeftColumn item xs={7}>
                    <PageHeader/>
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
                </LeftColumn>
                <Grid item xs={5}>
                    <Map
                      style="mapbox://styles/mapbox/streets-v9"
                      containerStyle={{
                        minHeight: 'calc(100vh - 70px)',
                        width: '100%',
                        maxWidth: 'calc(100vw - 280px)',
                      }}
                      movingMethod="flyTo"
                      center={[2.349014, 48.864716]}
                    />
                </Grid>
            </Grid>
        </CompanyContainer>
    )
}

export default Companies
