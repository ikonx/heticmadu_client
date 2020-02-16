import React from 'react';
import { ButtonWrapper } from "./_style";
import {
  FilterList
} from '@material-ui/icons'

interface Props {

}

const BtnFilter: React.FC<Props> = () => {
  return (
    <ButtonWrapper>
        <FilterList />
        Filtrer
    </ButtonWrapper>
  );
};

export default BtnFilter;
