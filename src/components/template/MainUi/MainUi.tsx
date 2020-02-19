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
import GreenscoreForm from 'components/pages/GreenscoreForm';

const StyledContainer = styled(Grid)``;

interface Props {}

const MainUi: React.FC<Props> = () => {
  return (
    <StyledContainer>
      {/*<AppMenu />*/}
      <Grid flow={FlowEnum.ROW}>
        <>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Dashboard />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route path="/pois">
              <Pois />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/form/:page">
              <Form />
            </Route>
            <Route path="/formGreenscore">
              <GreenscoreForm />
            </Route>
          </Switch>
        </>
      </Grid>
    </StyledContainer>
  );
};

export default MainUi;
