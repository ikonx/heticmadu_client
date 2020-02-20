import React from 'react';
import { EntitiesEnum } from 'utils/enums/Entity.enum';
import styled from 'styled-components';
import EntityFields from 'components/molecules/EntityFields/EntityFields';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import EntityLogo from "../../molecules/EntityLogo";
import { index as TableHead } from "../../molecules/Table/Head";
import { dataArray } from "../../../utils/formsMocks/CompaniesData";
import { index as TableItem, TableRowProps } from "../../molecules/Table/Row";
import { Table, TableBody } from "@material-ui/core";
import { Colors } from "../../../utils/styles";

interface Props {
  fields: any[];
  logo?: string;
  entity: EntitiesEnum;
  defaultData: any;
  tableData?: {
    name: string;
    pattern: string;
    lastConnection: string;
  }[];
}

const EntityLogoContainer = styled.div``;

const CompanyTable = styled(Table)`
  && {
    margin-top: 1rem;
    border-collapse: unset;
    border: 1px solid ${Colors.lightGrey};
    border-radius: 4px;
  }
`;

const StyledTableBody = styled(TableBody)`
  && {
    border: 1px solid ${Colors.lightGrey};
    border-top: 0;
  }
`;


const ViewEntity: React.FC<Props> = ({ logo, defaultData, tableData }) => {
  const generalInfoFields = [
    { label: 'Type d\'entreprise', key: 'type', type: 'text' },
    { label: 'Nom de l\'entreprise', key: 'name', type: 'text' },
    { label: 'Adresse complète', key: 'address', type: 'text' },
    { label: 'Effectif', key: 'employeesTotal', type: 'number' },
    { label: 'Perimètre', key: 'perimeter', type: 'text' },
  ];

  const emailFields = [
    { label: 'Email du référant', key: 'emailAdmin', type: 'text' },
    { label: 'Pattern', key: 'pattern', type: 'text' },
  ];

  const dataTableHead = [
    'Nom',
    'Pattern',
    'Dernière connexion'
  ];

  return (
    <Grid
      style={{
        overflow: 'auto',
        height: `${window.innerHeight - (72 + 88)}px`,
        padding: '0 2rem',
      }}
    >
      <Grid
        style={{
          gridTemplateColumns: '1fr 1fr',
        }}
        gap={32}
      >
        <EntityFields
          fields={generalInfoFields}
          title="Informations général"
          defaultData={defaultData}
        />
        <EntityLogoContainer>
          <EntityLogo source={logo ? logo : ''}/>
          <EntityFields
            fields={emailFields}
            title="Email"
            defaultData={defaultData}
          />
        </EntityLogoContainer>
      </Grid>
      <CompanyTable>
        <TableHead tableValues={dataTableHead}/>
        <StyledTableBody>
          { tableData && tableData.map((company: any, i) => {
            console.log(company, 'COMPANY');
            return(
              <TableItem
                {...company}
                key={i}
              />
            )
          })}
        </StyledTableBody>
      </CompanyTable>
    </Grid>
  );
};

export default ViewEntity;
