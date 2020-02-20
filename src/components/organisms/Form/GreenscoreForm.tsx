import React from 'react';
import PageHeader from '../../molecules/PageHeader/PageHeader';
import { ScrollableContent } from '../../../utils/styles/Globals';
import InputGreenscore from '../../atoms/Inputs/Greenscore/InputGreenscore';
import { DataGreenscore, DataTitleGS } from '../../../utils/DataGreenscore/DataGreenscore';

interface Props {
  currentGreenscore: number;
}

const GreenscoreForm: React.FC<Props> = (props) => {
  return (
    <>
      <PageHeader
        title={"Évaluation du greenscore " + DataTitleGS[props.currentGreenscore].typeWord + " de " + DataTitleGS[props.currentGreenscore].companyWord}
        subtitle="Greenscore restaurant"
      />
      <ScrollableContent isForm="true">
        <div>
          {DataGreenscore.length > 0 &&
            DataGreenscore[props.currentGreenscore].data.map((item, i) => (
              <InputGreenscore key={i} DataGreenscore={item} />
            ))}
        </div>
      </ScrollableContent>
    </>
  );
};

export default GreenscoreForm;
