import React, { useState } from 'react';
import PageHeader from '../../molecules/PageHeader/PageHeader';
import { ScrollableContent } from '../../../utils/styles/Globals';
import { Grid } from '@material-ui/core';
import InputRadio from '../../atoms/Inputs/Radio/InputRadio';
import InputText from '../../atoms/Inputs/Text/InputText';
import InputFile from '../../atoms/Inputs/File/InputFile';
import FormsFooter from '../../molecules/FormsFooter';
import {
  radioBio,
  radioCategory,
  radioDiet,
  radioGluten,
  radioHandicap,
  radioPOI,
  radioPrice,
} from '../../../utils/formsMocks/PoisForm';
import TextArea from '../../atoms/Inputs/Area/TextArea';
import ScheduleBlock from '../../molecules/ScheduleBlock';
import GreenscoreForm from './GreenscoreForm';
import { useHistory } from 'react-router-dom';

interface Props {}

const footerData = {
  title: "Création d'une POI",
  current: 1,
  currentGreenscore: 0,
  final: 4,
};

const PoisForm: React.FC<Props> = () => {
  const [step, setStep] = useState<number>(footerData.current);
  const history = useHistory();

  const onNextStep = () => {
    if (step >= footerData.final) {
      history.push(`/pois?status=created`);
      footerData.currentGreenscore = 0;
      footerData.current = 1;
      return;
    }

    const nextStep: number = ++footerData.current;
    if (footerData.current > 2) {
      ++footerData.currentGreenscore;
    }
    history.push(`/form/pois?step=${footerData.current}`);
    setStep(nextStep);
  };

  const onPrevStep = () => {
    if (step === 1) {
      history.push(`/pois`);
      footerData.currentGreenscore = 0;
      footerData.current = 1;
      return;
    }

    const nextStep: number = --footerData.current;
    --footerData.currentGreenscore;
    if (footerData.current === 1) {
      footerData.currentGreenscore = 0;
    }
    history.push(`/form/pois?step=${footerData.current}`);
    setStep(nextStep);
  };

  return (
    <section>
      {step === 1 ? (
        <>
          <PageHeader title="POI" subtitle="Card" text="Crée une POI" />
          <ScrollableContent>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputRadio title="Catégorie" values={radioCategory} />
              </Grid>
              <Grid item xs={4}>
                <InputText title="Nom" placeholder="Entrez le nom du POI .." />
              </Grid>
              <Grid item xs={4}>
                <InputText
                  title="Adresse complète"
                  placeholder="Entrez l'adresse du POI ..."
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputText title="Téléphone" placeholder="01.23.45.67.89" />
              </Grid>
              <Grid item xs={4}>
                <InputRadio values={radioPrice} title="Prix" />
              </Grid>
              <Grid item xs={4}>
                <InputRadio values={radioHandicap} title="Accès fauteuil" />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <ScheduleBlock title="Horaire" />
              </Grid>
              <Grid item xs={4}>
                <TextArea title="Description" />
              </Grid>
              <Grid item xs={4}>
                <InputFile
                  title="Photos du lieu"
                  placeholder="Ajouter vos photos (3 max.)"
                  isLarge={true}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputRadio title="Gluten free" values={radioGluten} />
              </Grid>
              <Grid item xs={4}>
                <InputRadio title="Bio" values={radioBio} />
              </Grid>
              <Grid item xs={4}>
                <InputRadio title="Régime" values={radioDiet} />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputRadio title="POI active" values={radioPOI} />
              </Grid>
            </Grid>
          </ScrollableContent>
        </>
      ) : (
        <GreenscoreForm currentGreenscore={footerData.currentGreenscore} />
      )}

      <FormsFooter
        activeSteps={footerData}
        returnAction={onPrevStep}
        confirmAction={onNextStep}
      />
    </section>
  );
};

export default PoisForm;
