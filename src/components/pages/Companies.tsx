import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { index as TableItem } from '../molecules/Table/Row';
import { index as TableHead } from '../molecules/Table/Head';
import { Grid as GoogleGrid, LinearProgress, Table, TableBody } from '@material-ui/core';
import PageHeader from '../molecules/PageHeader/PageHeader';
import ReactMapboxGl from 'react-mapbox-gl';
import { Colors } from '../../utils/styles';
import { GridContainer, ScrollableContent, StyledIconBack } from '../../utils/styles/Globals';
import { useHistory, useLocation } from "react-router-dom";
import { dataSingleCompanies, dataTableHead } from "../../utils/formsMocks/CompaniesData";
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import ViewEntityCompanies from "../organisms/ViewEntity/ViewEntityCompanies";
import { EntitiesEnum } from "../../utils/enums/Entity.enum";
import BtnRed from "../atoms/Buttons/BtnRed";
import TitleModal from 'components/atoms/Text/TitleModal';
import TextModal from 'components/atoms/Text/TextModal';
import Swal from 'sweetalert2';
import CompaniesContext from "../../contexts/companies/companies.context";
import withReactContent from "sweetalert2-react-content";
import moment from "moment";
import {radioCompany} from "../../utils/formsMocks/CompaniesForm";

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

interface Props {}

const Companies: React.FC<Props> = () => {
  const [selectedCompany, setCompany] = useState<any | null>(null);
  const { companies, fetchingCompanies, deleteCompany } = useContext(CompaniesContext);

  const dataAllCompanies: any[] = [...companies];

  const { pathname } = useLocation();
  const history = useHistory();
  const isAddingRoute =
    pathname === '/companies/create' ||
    (pathname.match('/companies/edit') && selectedCompany);

  const MySwal = withReactContent(Swal);

  const handleOpen = () => {
    MySwal.fire({
      title: <TitleModal title="Supprimer l'entreprise"/>,
      html: <TextModal textContent="Êtes-vous sûr de vouloir définitivement supprimer cette entrprise ? Attention cette action est irréversible."/>,
      showCancelButton: true,
      confirmButtonColor: Colors.redDelete,
      cancelButtonColor: Colors.blue,
      confirmButtonText: 'Suprimmer',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        MySwal.fire (
          'Supprimé !',
          'Cette Entreprise à bien été supprimé'
        );
        setCompany(null);
        deleteCompany(selectedCompany?.id);
        history.goBack();
      }
    })
  };

  return (
    <CompanyContainer>
      {fetchingCompanies && (
        <LinearProgress
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 5,
            width: '100%',
          }}
        />
      )}
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
                    { dataAllCompanies.map((company, i) => {
                      const companyType = radioCompany.find((item: any) => item.value === company.type || item.name === company.type);

                      const tableCompany = {
                        name: company.name,
                        type: companyType && companyType.name,
                        pattern: company.rse,
                        numberOfEmployees: company.numberOfEmployees,
                        creationDate: moment(company.creationDate).format('DD/M/YY'),
                        status: company.status
                      };

                      return(
                        <TableItem
                          key={i}
                          onClick={() => {
                            history.push(`companies/edit/${company.id}`);
                            setCompany(company);
                          }}
                          tableRowValues={tableCompany}
                        />
                      )
                    })}
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
                <BtnRed text="Supprimer une entreprise" onClick={handleOpen}/>
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
            // eslint-disable-next-line
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
