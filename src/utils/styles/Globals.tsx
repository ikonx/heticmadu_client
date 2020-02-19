import styled from "styled-components";
import { Grid } from "@material-ui/core";

const ScrollableContent = styled.div<{ isForm?: string }>`
  overflow: auto;
  height: ${ window.innerHeight - (72 + 124) }px;
  padding: ${props => props.isForm === 'true' ? '0 2rem 10rem' : '0 2rem 2rem'};
`;

const GridContainer = styled(Grid)`
  && {
    min-height: calc(100vh - 72px);
  }
`;

export {
  ScrollableContent,
  GridContainer
}