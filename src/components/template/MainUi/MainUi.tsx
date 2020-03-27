import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Grid, { FlowEnum } from 'components/atoms/Grid/Grid';
import Dashboard from 'components/pages/Dashboard';
import Companies from 'components/pages/Companies';
import Pois from 'components/pages/Pois';
import Form from 'components/pages/Form';
import Tags from 'components/pages/Tags';
import Header from 'components/molecules/Header';
import Map from 'components/pages/Map';
import TagsProvider from 'contexts/tags/tags.provider';
import PoisProvider from 'contexts/pois/pois.provider';
import CompaniesProvider from 'contexts/companies/companies.provider';

const StyledContainer = styled(Grid)``;

interface Props {}

const MainUi: React.FC<Props> = () => {
  return (
    <StyledContainer>
      <Grid
        flow={FlowEnum.ROW}
        style={{
          gridTemplateRows: 'auto 1fr',
          maxHeight: '100vh',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <PoisProvider>
          <TagsProvider>
            <>
              <Header />
              <Switch>
                <Route exact path={['/home', '/']}>
                  <Dashboard />
                </Route>
                <Route exact path={'/map'}>
                  <Map />
                </Route>
                <Route path="/companies">
                  <CompaniesProvider>
                    <Companies />
                  </CompaniesProvider>
                </Route>
                <Route path="/pois">
                  <Pois />
                </Route>
                <Route exact path="/tags">
                  <Tags />
                </Route>
                <Route path="/form/:page">
                  <CompaniesProvider>
                    <Form />
                  </CompaniesProvider>
                </Route>
              </Switch>
            </>
          </TagsProvider>
        </PoisProvider>
      </Grid>
    </StyledContainer>
  );
};

export default MainUi;
