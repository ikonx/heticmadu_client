import React, { useState } from 'react';
import { StyledFormControl } from "../Text/_style";
import { StyledContainer, StyledInput, StyledTitle, StyledLabel, StyledClose, StyledImg } from "./_style";
import { ReactComponent as ImportLogo } from 'assets/img/import-logo.svg';

interface Props {
  name: string;
  placeholder: string;
}

const InputFile: React.FC<Props> = ({ name, placeholder }) => {
  const [source, setSource] = useState('Importer un logo');
  // const [imgFile, setImgFile] = useState('');

  const displaySrc = (event: { target: HTMLInputElement }) => {
    const { files } = event.target;

    // files && setImgFile(URL.createObjectURL(files[0]));
    setSource( files && files.length > 0 ? files[0].name : 'Importer un logo');
  };

  return (
    <StyledFormControl>
      <StyledTitle>{ name }</StyledTitle>
      <StyledContainer>
        <StyledInput id={name} type="file" placeholder={placeholder} onChange={displaySrc} accept="image/png, image/jpeg, .svg"/>
        <StyledLabel>
          <ImportLogo/>
          { source }
        </StyledLabel>
        { source !== 'Importer un logo' && (
          <StyledClose onClick={() => setSource('Importer un logo')}/>
        )}
        {/*<StyledImg src={imgFile} alt=""/>*/}
      </StyledContainer>
    </StyledFormControl>
  );
};

export default InputFile;
