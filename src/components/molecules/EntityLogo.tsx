import React, { useState } from 'react';
import styled from "styled-components";
import { Colors, Fonts } from "../../utils/styles";

interface Props {
  source: string;
}

const StyledContainer = styled.div`
  margin-bottom: 2rem;
`;

const CompanyPhoto = styled.img`
  clip-path: circle(50% at 50% 50%);
  width: 94px;
  height: 94px;
`;

const PhotoEmpty = styled.div`
  background: ${Colors.blue};
  width: 94px;
  height: 94px;
  border-radius: 50%;
  margin: 0 auto;
`;

const DeleteText = styled.p`
  color: ${Colors.purple};
  font-size: 13px;
  font-family: ${Fonts.medium};
  margin-top: 12px;
  cursor: pointer;
`;

const EntityLogo: React.FC<Props> = ({ source }) => {
  const [sourceImage, setSource] = useState(source);
  const deleteAction = () => {
    setSource('');
  };

  return (
    <StyledContainer>
      { sourceImage !== '' ? (
        <CompanyPhoto src={sourceImage} />
      ) : (
        <PhotoEmpty />
      )}
        <DeleteText onClick={deleteAction}>Supprimer le logo</DeleteText>
    </StyledContainer>
  );
};

export default EntityLogo;
