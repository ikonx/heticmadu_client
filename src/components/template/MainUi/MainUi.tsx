import React from 'react';
import styled from 'styled-components';

import AppMenu from 'components/organisms/AppMenu';
import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import { Switch, Route } from 'react-router-dom';
import Dashboard from 'components/pages/Dashboard';
import Companies from 'components/pages/Companies';
import Pois from 'components/pages/Pois';

const StyledContainer = styled(Grid)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 280px 1fr auto;
`;

interface Props {}

const MainUi: React.FC<Props> = () => {
  return (
    <StyledContainer>
      <AppMenu />
      <Grid flow={FlowEnum.ROW}>
        <>
          <h1>app bar</h1>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/companies">
              <Companies />
            </Route>
            <Route path="/pois">
              <Pois />
            </Route>
          </Switch>
        </>
      </Grid>
    </StyledContainer>
  );
};

export default MainUi;
