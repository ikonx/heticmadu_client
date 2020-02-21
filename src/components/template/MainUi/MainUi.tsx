import React from 'react';
import styled from 'styled-components';

import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import { Switch, Route } from 'react-router-dom';
import Dashboard from 'components/pages/Dashboard';
import Companies from 'components/pages/Companies';
import Pois from 'components/pages/Pois';
import Form from 'components/pages/Form';
import Tags from 'components/pages/Tags';
import Header from 'components/molecules/Header';
import Map from 'components/pages/Map';

const StyledContainer = styled(Grid)``;

interface Props {}

const MainUi: React.FC<Props> = () => {
  return (
    <StyledContainer>
      {/*<AppMenu />*/}
      <Grid
        flow={FlowEnum.ROW}
        style={{
          gridTemplateRows: 'auto 1fr',
          maxHeight: '100vh',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Dashboard />
            </Route>
            <Route exact path={['/map', '/']}>
              <Map />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/pois">
              <Pois />
            </Route>
            <Route exact path="/tags">
              <Tags />
            </Route>
            <Route exact path="/form/:page">
              <Form />
            </Route>
          </Switch>
        </>
      </Grid>
    </StyledContainer>
  );
};

export default MainUi;
