import React, { useState } from 'react';
import styled from 'styled-components';
import { index as TableItem, TableRowProps } from '../molecules/Table/Row';
import { index as TableHead } from '../molecules/Table/Head';
import { Grid as GoogleGrid, Table, TableBody } from '@material-ui/core';
import PageHeader from '../molecules/PageHeader/PageHeader';
import ReactMapboxGl from 'react-mapbox-gl';
import { Colors } from '../../utils/styles';
import { GridContainer, ScrollableContent } from '../../utils/styles/Globals';
import { useHistory, useLocation } from "react-router-dom";
import { dataAllCompanies, dataSingleCompanies, dataTableHead } from "../../utils/formsMocks/CompaniesData";
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import ViewEntityCompanies from "../organisms/ViewEntity/ViewEntityCompanies";
import { EntitiesEnum } from "../../utils/enums/Entity.enum";
import { ReactComponent as IconBack } from 'assets/img/arrowBack.svg';
import BtnRed from "../atoms/Buttons/BtnRed";

const CompanyContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 72px);
  margin: 0;
`;

const CompanyTable = styled(Table)`
  && {
    border-collapse: unset;
    border: 1px solid ${Colors.lightGrey};
    border-radius: 4px;
  }
`;

const LeftColumn = styled(GoogleGrid)``;

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const StyledTableBody = styled(TableBody)`
  && {
    border: 1px solid ${Colors.lightGrey};
    border-top: 0;
  }
`;

const StyledIconBack = styled(IconBack)`
  width: 14px;
  height: 14px;
  margin-right: 24px;
`;

interface Props {}

const Companies: React.FC<Props> = () => {
  const [selectedCompany, setCompany] = useState<any | null>(null);
  const { pathname } = useLocation();
  const history = useHistory();
  const isAddingRoute =
    pathname === '/companies/create' ||
    (pathname.match('/companies/edit') && selectedCompany);

  return (
    <CompanyContainer>
      <GridContainer container>
        <LeftColumn item xs={7}>
          { !isAddingRoute ? (
            <>
              <PageHeader
                title="Entreprise"
                text="Créer une entreprise"
                subtitle="LIST"
                link="/form/companies"
              />
              <ScrollableContent>
                <CompanyTable>
                  <TableHead tableValues={dataTableHead}/>
                  <StyledTableBody>
                    { dataAllCompanies.map((company, i) => (
                      <TableItem
                        key={i}
                        onClick={() => {
                          history.push(`companies/edit/${company.id}`);
                          setCompany(company);
                        }}
                        tableRowValues={company}
                      />
                    ))}
                  </StyledTableBody>
                </CompanyTable>
              </ScrollableContent>
            </>
          ) : (
            <>
              <Grid
                style={{
                  padding: '2rem',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
                gap={24}
                flow={FlowEnum.COLUMN}
              >
                <div
                  onClick={() => {
                    setCompany(null);
                    history.goBack();
                  }}
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  <StyledIconBack />
                  <span>Retour</span>
                </div>
                <BtnRed text="Supprimer une POI" onClick={() => console.log('OK')}/>
              </Grid>
              <ViewEntityCompanies
                entity={EntitiesEnum.COMPANY}
                fields={[]}
                defaultData={selectedCompany || {}}
                tableData={dataSingleCompanies}
              />
            </>
          )}
        </LeftColumn>
        <GoogleGrid item xs={5}>
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: 'calc(100vh - 72px)',
              width: '100%',
              maxWidth: 'calc(100vw - 280px)',
            }}
            movingMethod="flyTo"
            center={[
              parseFloat(selectedCompany?.longitude || '2.3488'),
              parseFloat(selectedCompany?.latitude || '48.8534'),
            ]}
            zoom={selectedCompany? [18] : [11.25]}
          />
        </GoogleGrid>
      </GridContainer>
    </CompanyContainer>
  );
};

export default Companies;
