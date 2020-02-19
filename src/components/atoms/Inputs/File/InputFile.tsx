import React, { useState } from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledTitle,
  StyledLabel,
  StyledClose,
  StyledInputContainer, StyledFileItem, StyledRemainingFiles
} from "./_style";
import { ReactComponent as ImportLogo } from 'assets/img/import-logo.svg';

interface Props {
  title: string;
  placeholder: string;
  isLarge: boolean;
}

const InputFile: React.FC<Props> = ({ title, placeholder,isLarge }) => {
  const [source, setSource] = useState(placeholder);
  const [allFiles, setFiles] = useState<any>(null);

  const displaySrc = (event: { target: HTMLInputElement }) => {
    const { files } = event.target;
    files && (
      setFiles(Array.from(files))
    );
    setSource( files && files.length > 0 ? files[0].name : placeholder);
  };

  const removeFile = (name: string) => {
    const filterArray = allFiles.filter((item: File) => item.name !== name);
    filterArray.length === 0 && setSource(placeholder);

    setFiles(filterArray);
  };

  return (
    <StyledContainer>
      <StyledTitle>{ title }</StyledTitle>
      <StyledInputContainer isLarge={isLarge.toString()}>
        <StyledInput id={title} type="file" onChange={displaySrc} accept="image/png, image/jpeg, .svg" multiple={isLarge} />
        { source === placeholder ? (
          <StyledLabel isLarge={isLarge.toString()}>
            <ImportLogo/>
            Importer un logo
          </StyledLabel>
        ) : (
          <>
            {
              allFiles.map((item: File, i: number) => (
                <StyledFileItem key={i} isLarge={isLarge.toString()}>
                  <StyledLabel isLarge={isLarge.toString()}>{ item.name }</StyledLabel>
                  <StyledClose onClick={() => removeFile(item.name)}/>
                </StyledFileItem>
              ))
            }
            {
              isLarge && allFiles.length < 3 && (
                <StyledRemainingFiles>
                  <ImportLogo/>
                  <p>Encore { 3 - allFiles.length } restants ...</p>
                </StyledRemainingFiles>
              )
            }
          </>
        )}
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default InputFile;
