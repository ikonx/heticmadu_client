import React from 'react';
import { EntitiesEnum } from 'utils/enums/Entity.enum';
import styled from 'styled-components';
import EntityFields from 'components/molecules/EntityFields/EntityFields';
import Grid from 'components/atoms/Grid/Grid';

interface Props {
  fields: any[];
  images?: any[];
  entity: EntitiesEnum;
  defaultData: any;
}

const StyledImageContainer = styled(Grid)`
  //grid-template-columns: 166px 1fr;
  grid-template-rows: 1fr;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #eaedf3;
    border-radius: 4px;
  }
`;

const ViewEntity: React.FC<Props> = ({ images, defaultData }) => {
  const generalInfoFields = [
    { label: 'Nom', key: 'name', type: 'text' },
    { label: 'Catégorie', key: 'category', type: 'text' },
    { label: 'Adresse complète', key: 'address', type: 'text' },
    { label: 'Téléphone', key: 'phone', type: 'number' },
    { label: 'Description', key: 'description', type: 'area' },
    { label: 'Prix en moyenne', key: 'price', type: 'text' },
    { label: 'Type', key: 'type', type: 'text' },
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
        <StyledImageContainer gap={8}>
          {/*<Grid*/}
          {/*  gap={8}*/}
          {/*  flow={FlowEnum.ROW}*/}
          {/*  style={{ gridTemplateRows: '1fr 1fr' }}*/}
          {/*>*/}
          {/*  <img*/}
          {/*    style={{ height: 'calc(50% - 4px)' }}*/}
          {/*    src={images && images[0]}*/}
          {/*    role="decoration"*/}
          {/*  />*/}
          {/*  <img*/}
          {/*    style={{ height: 'calc(50% - 4px)' }}*/}
          {/*    src={images && images[1]}*/}
          {/*    role="decoration"*/}
          {/*  />*/}
          {/*</Grid>*/}
          <img src={images && images[2]} alt="preview of poi" />
        </StyledImageContainer>
        <EntityFields
          fields={generalInfoFields}
          title="Informations général"
          defaultData={defaultData}
        />
        <EntityFields
          fields={generalInfoFields}
          title="Les horaires"
          defaultData={defaultData}
        />
        <EntityFields
          fields={generalInfoFields}
          title="Tags"
          defaultData={defaultData}
        />
      </Grid>
    </Grid>
  );
};

export default ViewEntity;
