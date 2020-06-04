import React, { useState, useContext, useEffect } from 'react';
import BtnBlue from 'components/atoms/Buttons/BtnBlue';
import styled from 'styled-components';
import withReactContent from 'sweetalert2-react-content';
import Swal from "sweetalert2";
import TitleModal from '../atoms/Text/TitleModal';
import TextModal from '../atoms/Text/TextModal';
import { Colors } from '../../utils/styles';
import AddThemeModal from '../molecules/Modal/AddThemeModal';
import { postTheme } from '../../utils/http';

interface Props {}

const StoryContainer = styled.div`
  display: flex;
  padding: 32px;
  justify-content: space-between;
  button {
    width: 150px;
  }
`;


const emptyTheme = {
    name: '',
    description: '',
    type: ''
};

const themeValues = [
    { label: 'Énergie', value: 'Énergie', key: 'Énergie' },
    { label: 'Recyclage', value: 'Recyclage', key: 'Recyclage' },
    { label: 'Cuisine', value: 'Cuisine', key: 'Cuisine' },
    { label: 'Maison', value: 'Maison', key: 'Maison' }
];

const MySwal = withReactContent(Swal);

const Story: React.FC<Props> = () => {

    const [themeData, setThemeData] = useState({
        ...emptyTheme
    });

    const updateField = (key: any, value: any) => {
        const newThemeState = { ...themeData };
        // @ts-ignore
        newThemeState[key] = value;
        setThemeData(newThemeState);

    };

    const handleOpen = () => {
        MySwal.fire({
            title: <TitleModal title="Créer un thème" />,
            html: (
                <AddThemeModal updateField={updateField} />
            ),
            showCancelButton: true,
            confirmButtonColor: Colors.redDelete,
            cancelButtonColor: Colors.blue,
            confirmButtonText: 'Créer',
            cancelButtonText: 'Annuler',
            reverseButtons: true,
        }).then((result) => {
            console.log('result', result);
            if (result.value) {
                console.log('themeD', themeData);
                // postTheme(themeData).then((res: any) => {
                //     if (res.data) {
                //         refreshPois().then((res: any) => res.data && history.push('/pois'));
                //     }
                // });
                MySwal.fire('Le thème a bien été fait');
            }
        });
    };

    return (
        <>
            <StoryContainer>
                <div>
                    <p>LIST</p>
                    <h1>Thème</h1>
                </div>
                <div>
                 <BtnBlue text="Créer un théme" onClick={handleOpen}/>
                </div>
            </StoryContainer>
        </>
    );
};

export default Story;
