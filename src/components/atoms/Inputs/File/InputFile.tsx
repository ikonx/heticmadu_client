import React, { useState } from 'react';
import { StyledFormControl } from "../Text/_style";
import { StyledContainer, StyledInput, StyledTitle, StyledLabel, StyledClose, StyledImg } from "./_style";
import { ReactComponent as ImportLogo } from 'assets/img/import-logo.svg';

interface Props {
  name: string;
  placeholder: string;
}

const InputFile: React.FC<Props> = ({ name, placeholder }) => {
  const [source, setSource] = useState('');
  const [imgFile, setImgFile] = useState('');

  const displaySrc = (event: { target: HTMLInputElement }) => {
    const { files } = event.target;

    files && setImgFile(URL.createObjectURL(files[0]));
    setSource( files && files.length > 0 ? files[0].name : '');
  };

  return (
    <StyledFormControl>
      <StyledTitle>{ name }</StyledTitle>
      <StyledContainer>
        <StyledInput id={name} type="file" placeholder={placeholder} onChange={displaySrc} accept="image/png, image/jpeg, .svg"/>
        <StyledLabel>
          <ImportLogo/>
          Importer un logo
        </StyledLabel>
        { source !== '' && (
          <StyledClose onClick={() => setSource('')}/>
        )}
        <StyledImg src={imgFile} alt=""/>
      </StyledContainer>
    </StyledFormControl>
  );
};

export default InputFile;
