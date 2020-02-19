import styled from "styled-components";
import { Colors } from "../../../utils/styles";

export const PageHeaderContainer = styled.div`
  padding: 2rem 0 0;
  position: relative;
`;

export const PageHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 8px;
`;

export const PageHeaderSeparator = styled.span`
  width: 100%;
  height: 1px;
  background: ${Colors.lightGrey};
  display: inline-block;
  margin: 21px 0 0;
`;