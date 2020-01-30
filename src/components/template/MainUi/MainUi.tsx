import React, { ReactElement } from 'react';
import styled from 'styled-components';

import AppMenu from 'components/organisms/AppMenu';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import Header from 'components/molecules/Header';

const StyledContainer = styled(Grid)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 280px 1fr auto;
`;

interface Props {
  render: ReactElement;
}

const MainUi: React.FC<Props> = ({ render }) => {
  return (
    <StyledContainer>
      <AppMenu />
      <Grid flow={FlowEnum.ROW}>
        <>
          <Header />
          {render}
        </>
      </Grid>
    </StyledContainer>
  );
};

export default MainUi;
