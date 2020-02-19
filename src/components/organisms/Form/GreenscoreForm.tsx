import React from 'react';
import PageHeader from '../../molecules/PageHeader/PageHeader';
import { ScrollableContent } from "../../../utils/styles/Globals";
import InputGreenscore from '../../atoms/Inputs/Greenscore/InputGreenscore';
import { DataGreenscore } from '../../../utils/DataGreenscore/DataGreenscore';

interface Props {
    currentGreenscore: number;
}

const GreenscoreForm: React.FC<Props> = (props) => {
    return (
        <>
           <PageHeader title="Évaluez le Greenscore matériel de HETIC" subtitle="Greenscore entreprise" /> 
           <ScrollableContent isForm="true">
                <div>
                    { DataGreenscore.length > 0 && DataGreenscore[props.currentGreenscore].data.map((item, i) => <InputGreenscore key={i} DataGreenscore={item}/>)}
                </div>
           </ScrollableContent>
        </>
    )
}

export default GreenscoreForm;
