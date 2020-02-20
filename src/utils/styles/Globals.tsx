import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { ReactComponent as IconBack } from "../../assets/img/arrowBack.svg";

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