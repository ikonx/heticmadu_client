import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { index as TableItem } from '../molecules/Table/Row';
import { index as TableHead } from '../molecules/Table/Head';
import { Grid as GoogleGrid, Table, TableBody } from '@material-ui/core';
import PageHeader from '../molecules/PageHeader/PageHeader';
import ReactMapboxGl, { Marker, ZoomControl } from 'react-mapbox-gl';
import { Colors } from '../../utils/styles';
import { GridContainer, ScrollableContent, StyledIconBack } from '../../utils/styles/Globals';
import { useHistory, useLocation } from "react-router-dom";
import {
  dataAllCompanies,
  dataSingleCompanies,
  dataTableHead,
  fakeDataCompanies
} from "../../utils/formsMocks/CompaniesData";
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import ViewEntityCompanies from "../organisms/ViewEntity/ViewEntityCompanies";
import { EntitiesEnum } from "../../utils/enums/Entity.enum";
import BtnRed from "../atoms/Buttons/BtnRed";
import MapPointIcon from "../atoms/MapPointIcon/MapPointIcon";
import { CardItemProps } from "../molecules/Card/CardItem";
import { AnimatePresence, motion } from 'framer-motion';

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

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXGL_KEY || '',
});

const StyledTableBody = styled(TableBody)`
  && {
    border: 1px solid ${Colors.lightGrey};
    border-top: 0;
  }
`;

const MotionMarker = styled(motion.div)`
  cursor: pointer;
`;

interface Props {}

const Companies: React.FC<Props> = () => {
  const [selectedCompany, setCompany] = useState<any | null>(null);
  const [entries, setEntries] = useState<CardItemProps[]>([...fakeDataCompanies]);
  const [isMapReady, setMapReady] = useState<any>(false);
  const { pathname } = useLocation();
  const history = useHistory();
  const isAddingRoute =
    pathname === '/companies/create' ||
    (pathname.match('/companies/edit') && selectedCompany);
  const spring = {
    type: 'spring',
    damping: 900,
    stiffness: 600,
  };
  const renderMap = useMemo(
    () => (
      <MapComponent
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100%',
          width: '100vw',
        }}
        movingMethod="flyTo"
        center={[
          parseFloat(selectedCompany?.longitude || '2.3488'),
          parseFloat(selectedCompany?.latitude || '48.8534'),
        ]}
        zoom={selectedCompany? [18] : [11.25]}
        onStyleLoad={() => setMapReady(true)}
      >
        <ZoomControl />
        <AnimatePresence>
          {isMapReady &&
          entries.map((entry, index) => {
            return (
              <Marker
                key={entry.id}
                coordinates={entry.center || [0, 0]}
                anchor="bottom"
                offset={[0, -15]}
              >
                <MotionMarker
                  initial={{ scale: 0, y: -100 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0, y: 30 }}
                  whileHover={{ scale: 1.1 }}
                  key={entry.id}
                  transition={{
                    ...spring,
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                >
                  <MapPointIcon point={entry} />
                </MotionMarker>
              </Marker>
            );
          })}
        </AnimatePresence>
      </MapComponent>
    ),
    [entries, isMapReady, selectedCompany],
  );

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
          { renderMap }
        </GoogleGrid>
      </GridContainer>
    </CompanyContainer>
  );
};

export default Companies;
