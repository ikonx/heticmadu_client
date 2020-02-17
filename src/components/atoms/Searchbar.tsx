import React, { useState } from 'react';
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import styled, { css } from 'styled-components';

interface Props {}

const StyledSearchbar = styled.div<any>`
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2vw;
  background: #f2f2f2;
  border-radius: 36px;
  padding: 8px 16px;
  /* ${props =>
    props.isOpen &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 2vw;
      background: #f2f2f2;
      border-radius: 36px;
      padding: 0 8px;
    `} */
`;

const StyledIconSearch = styled(SearchIcon)<any>`
  margin-right: 8px;
`;

const Searchbar: React.FC<Props> = () => {
  // const [isOpen, setOpen] = useState<Boolean>(false);

  // const onClickSearchIcon = () => {
  //   setOpen(!isOpen);
  // };

  // const onClickCloseIcon = () => {
  //   setOpen(false);
  // };

  return (
    // <StyledSearchbar isOpen={isOpen}>
    //   <IconButton
    //     edge="start"
    //     color="inherit"
    //     aria-label="search"
    //     onClick={onClickSearchIcon}
    //   >
    //     <SearchIcon fontSize="large" />
    //   </IconButton>

    //   {isOpen && (
    //     <>
    //       <InputBase placeholder="Recherche" />
    //       <IconButton
    //         edge="start"
    //         color="inherit"
    //         aria-label="close"
    //         onClick={onClickCloseIcon}
    //       >
    //         <CloseIcon />
    //       </IconButton>
    //     </>
    //   )}
    // </StyledSearchbar>

    <StyledSearchbar>
      <StyledIconSearch fontSize="large" />
      <InputBase placeholder="Recherche" />
    </StyledSearchbar>
  );
};

export default Searchbar;
