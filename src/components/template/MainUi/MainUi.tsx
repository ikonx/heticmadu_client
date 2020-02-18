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
import CompaniesForm from "../../pages/CompaniesForm";
import Map from 'components/pages/Map';

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
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route path="/companies/form">
              <CompaniesForm />
            </Route>
            <Route path="/pois">
              <Pois />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </>
      </Grid>
    </StyledContainer>
  );
};

export default MainUi;
