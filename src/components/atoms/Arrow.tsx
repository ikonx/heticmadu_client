import React, { useState } from 'react'
import {IconButton} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Props {
    
}

const Arrow: React.FC<Props> = () => {
    const [isClicked, setClicked] = useState<Boolean>(false);
    
    const onClickArrowIcon = () => {
        setClicked(!isClicked);
      };

    return (
        <IconButton onClick={onClickArrowIcon}>
            {isClicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
    )
}

export default Arrow
