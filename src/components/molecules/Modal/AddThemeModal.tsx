import React, { useState } from 'react';
import styled from 'styled-components';
import CustomSelect from '../../atoms/Select/CustomSelect';
import InputText from '../../atoms/Inputs/Text/InputText';

interface Props {
    updateField: any;
}

const themeValues = [
    { label: 'Énergie', value: 'Énergie', key: 'Énergie' },
    { label: 'Recyclage', value: 'Recyclage', key: 'Recyclage' },
    { label: 'Cuisine', value: 'Cuisine', key: 'Cuisine' },
    { label: 'Maison', value: 'Maison', key: 'Maison' }
];

const AddThemeModal: React.FC<Props> = ({ updateField }) => {

    return (
        <>
            <InputText title="Nom*" placeholder='Toutes ses fournitures' fieldKey={'name'} onChange={updateField} />
            <InputText title="Description*" placeholder='Apprenez à gérer vos fournitures...' />
            <CustomSelect title="Type*" values={themeValues} />
        </>
    )
};

export default AddThemeModal
