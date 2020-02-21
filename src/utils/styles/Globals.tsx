import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { ReactComponent as IconBack } from "../../assets/img/arrowBack.svg";

const ScrollableContent = styled.div`
  overflow: auto;
  height: ${ window.innerHeight - (72 + 124) }px;
  padding: 0 2rem 10rem;
`;

const GridContainer = styled(Grid)`
  && {
    min-height: calc(100vh - 72px);
  }
`;

const StyledIconBack = styled(IconBack)`
  width: 14px;
  height: 14px;
  margin-right: 24px;
`;

export {
  ScrollableContent,
  GridContainer,
  StyledIconBack
}