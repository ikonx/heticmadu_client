import React, { useState, useContext, useEffect } from 'react';
import BtnBlue from 'components/atoms/Buttons/BtnBlue';

interface Props {}

const Story: React.FC<Props> = () => {
    return (
        <>
            <h1>test</h1>
            <BtnBlue text="CLICK" />
        </>
    );
};

export default Story;
