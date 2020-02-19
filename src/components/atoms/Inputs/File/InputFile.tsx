import React, { useState } from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledTitle,
  StyledLabel,
  StyledClose,
  StyledInputContainer
} from "./_style";
import { ReactComponent as ImportLogo } from 'assets/img/import-logo.svg';

interface Props {
  title: string;
  placeholder: string;
  isLarge: boolean;
}

const InputFile: React.FC<Props> = ({ title, placeholder,isLarge }) => {
  const [source, setSource] = useState(placeholder);
  // const [imgFile, setImgFile] = useState('');

  const displaySrc = (event: { target: HTMLInputElement }) => {
    const { files } = event.target;

    // files && setImgFile(URL.createObjectURL(files[0]));
    setSource( files && files.length > 0 ? files[0].name : placeholder);
  };

  return (
    <StyledContainer>
      <StyledTitle>{ title }</StyledTitle>
      <StyledInputContainer isLarge={isLarge.toString()}>
        <StyledInput id={title} type="file" onChange={displaySrc} accept="image/png, image/jpeg, .svg" multiple={isLarge} />
        <StyledLabel isLarge={isLarge.toString()}>
          <ImportLogo/>
          { source }
        </StyledLabel>
        { source !== placeholder && (
          <StyledClose onClick={() => setSource(placeholder)}/>
        )}
        {/*<StyledImg src={imgFile} alt=""/>*/}
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default InputFile;
