import React from 'react'
import styled from "styled-components";
import { index as TableItem } from '../molecules/Table/Row';
import { index as TableHead } from '../molecules/Table/Head';
import { Grid, Table, TableBody } from "@material-ui/core";
import PageHeader from "../molecules/PageHeader/PageHeader";
import ReactMapboxGl from 'react-mapbox-gl';
import { Colors } from "../../utils/styles";
import { GridContainer, ScrollableContent } from "../../utils/styles/Globals";


const CompanyContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 64px); 
  margin: 0;
`;

const CompanyTable = styled(Table)`
  && {
    border-collapse: unset;
    border: 1px solid ${Colors.lightGrey};
    border-radius: 4px;   
  }
`;

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const StyledTableBody = styled(TableBody)`
  && {
    border: 1px solid ${Colors.lightGrey};
    border-top: 0;
  }
`;

interface Props {}

const Companies: React.FC<Props> = () => {
    return (
        <CompanyContainer>
            <GridContainer container>
                <Grid item xs={7}>
                    <PageHeader />
                    <ScrollableContent>
                        <CompanyTable>
                            <TableHead />
                            <StyledTableBody>
                                {/* TODO: @DEV Loop over */}
                                <TableItem status={true}/>
                                <TableItem status={true}/>
                                <TableItem status={false}/>
                                <TableItem status={true}/>
                                <TableItem status={true}/>
                                <TableItem status={false}/>
                                <TableItem status={true}/>
                                <TableItem status={true}/>
                                <TableItem status={false}/>
                            </StyledTableBody>
                        </CompanyTable>
                    </ScrollableContent>
                </Grid>
                <Grid item xs={5}>
                    <Map
                       style="mapbox://styles/mapbox/streets-v9"
                       containerStyle={{
                         height: 'calc(100vh - 64px)',
                         width: '100%',
                         maxWidth: 'calc(100vw - 280px)',
                       }}
                       movingMethod="flyTo"
                       center={[2.349014, 48.864716]}
                    />
                </Grid>
            </GridContainer>
        </CompanyContainer>
    )
}

export default Companies
