import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { postPoi } from 'utils/http';

import PageHeader from '../../molecules/PageHeader/PageHeader';
import { ScrollableContent } from '../../../utils/styles/Globals';
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
import { PoiModel } from 'utils/models/pois.model';
import { CreatePointsOfInterestDTO } from 'utils/dto/pointsOfInterest.dto';
import { IStatusEnum } from 'utils/interfaces/statusEnum';
import InputAutocomplete from '../../atoms/Inputs/Autocomplete/InputAutocomplete';
import PoisContext from 'contexts/pois/pois.context';

interface Props {}

const footerData = {
  title: "Création d'une POI",
  current: 1,
  currentGreenscore: 0,
  final: 4,
};

const emptyPoi: CreatePointsOfInterestDTO = {
  name: '',
  longitude: 0,
  latitude: 0,
  address: '',
  postalCode: 92000,
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
  sunday: '',
  schedule: '',
  category: '',
  averagePrice: '',
  glutenFree: false,
  bio: '',
  disabledAccess: false,
  greenScore: 0,
  phoneNumber: '',
  picture: '',
  description: '',
  status: IStatusEnum.DEACTIVATED,
  tags: [],
  images: [],
};
const PoisForm: React.FC<Props> = () => {
  const [step, setStep] = useState<number>(footerData.current);
  const history = useHistory();
  const [poiData, setPoiData] = useState<CreatePointsOfInterestDTO>({
    ...emptyPoi,
  });

  const { refreshPois } = useContext(PoisContext);

  const onNextStep = () => {
    if (step >= footerData.final) {
      // history.push(`/pois?status=created`);
      footerData.currentGreenscore = 0;
      footerData.current = 1;
      postPoi(poiData).then((res: any) => {
        if (res.data) {
          refreshPois().then((res: any) => res.data && history.push('/pois'));
        }
      });
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

  const updateField = (_fieldKey: any, _fieldValue: any) => {
    const newPoiState: CreatePointsOfInterestDTO = { ...poiData };
    // @ts-ignore
    newPoiState[_fieldKey] = _fieldValue;
    setPoiData(newPoiState);
  };

  useEffect(() => {
    console.log(poiData);
  }, [poiData]);

  return (
    <section>
      {step === 1 ? (
        <>
          <PageHeader title="POI" subtitle="Card" text="Crée une POI" />
          <ScrollableContent isForm="true">
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputRadio
                  title="Catégorie"
                  values={radioCategory}
                  fieldKey={'category'}
                  onChange={updateField}
                  fieldValue={poiData['category']}
                />
              </Grid>
              <Grid item xs={4}>
                <InputText
                  title="Nom"
                  placeholder="Entrez le nom du POI .."
                  fieldKey={'name'}
                  onChange={updateField}
                  fieldValue={poiData['name']}
                  type="text"
                />
              </Grid>
              <Grid item xs={4}>
                <InputAutocomplete
                  title="Adresse complète"
                  placeholder="Entrez l'adresse du POI ..."
                  fieldKey={'address'}
                  onChange={updateField}
                  fieldValue={poiData['address']}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputText
                  title="Téléphone"
                  placeholder="01.23.45.67.89"
                  fieldKey={'phoneNumber'}
                  onChange={updateField}
                  fieldValue={poiData['phoneNumber']}
                  type="number"
                />
              </Grid>
              <Grid item xs={4}>
                <InputRadio
                  values={radioPrice}
                  title="Prix"
                  fieldKey={'averagePrice'}
                  fieldValue={poiData['averagePrice']}
                  onChange={updateField}
                />
              </Grid>
              <Grid item xs={4}>
                <InputRadio
                  values={radioHandicap}
                  title="Accès fauteuil"
                  fieldKey={'disabledAccess'}
                  fieldValue={poiData['disabledAccess']?.toString()}
                  onChange={updateField}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <ScheduleBlock title="Horaire" />
              </Grid>
              <Grid item xs={4}>
                <TextArea
                  title="Description"
                  fieldKey={'description'}
                  fieldValue={poiData['description']}
                  onChange={updateField}
                />
              </Grid>
              {/* <Grid item xs={4}>
                <InputFile
                  title="Photos du lieu"
                  placeholder="Ajouter vos photos (3 max.)"
                  isLarge={true}
                />
              </Grid> */}
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputRadio
                  title="Gluten free"
                  values={radioGluten}
                  fieldKey={'glutenFree'}
                  fieldValue={poiData['glutenFree']}
                  onChange={updateField}
                />
              </Grid>
              <Grid item xs={4}>
                <InputRadio
                  title="Bio"
                  values={radioBio}
                  fieldKey={'bio'}
                  fieldValue={poiData['bio']}
                  onChange={updateField}
                />
              </Grid>
              {/* <Grid item xs={4}>
                <InputRadio
                  title="Régime"
                  values={radioDiet}
                  fieldKey={'bio'}
                  fieldValue={poiData['bio']}
                  onChange={updateField}
                />
              </Grid> */}
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <InputRadio
                  title="POI active"
                  values={radioPOI}
                  fieldKey={'status'}
                  fieldValue={poiData['status']}
                  onChange={updateField}
                />
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
