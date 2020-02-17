import styled from "styled-components";
import { Grid } from "@material-ui/core";

const ScrollableContent = styled.div`
  overflow: auto;
  height: ${ window.innerHeight - (64 + 115) }px;
  padding: 0 2rem 2rem;
`;

const GridContainer = styled(Grid)`
  && {
    min-height: calc(100vh - 64px);
  }
`;

export {
  ScrollableContent,
  GridContainer
}