import React from 'react';
import PageHeader from "../molecules/PageHeader/PageHeader";
import { ScrollableContent } from "../../utils/styles/Globals";
import InputGreenscore from 'components/atoms/Inputs/Greenscore/InputGreenscore';
import { DataGreenscore } from 'utils/DataGreenscore/DataGreenscore';

interface Props {}

const GreenscoreForm: React.FC<Props> = () => {
    return (
        <section>
           <PageHeader title="Évaluez le Greenscore matériel de HETIC" subtitle="Greenscore entreprise" formBar={true} /> 
           <ScrollableContent>
                <div>
                    { DataGreenscore.length > 0 && DataGreenscore[0].data.map((item, i) => <InputGreenscore key={i} DataGreenscore={item}/>)}
                </div>
           </ScrollableContent>
        </section>
    )
}

export default GreenscoreForm;
