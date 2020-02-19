import React from 'react';
import PageHeader from "../../molecules/PageHeader/PageHeader";
import { ScrollableContent } from "../../../utils/styles/Globals";
import { Grid } from "@material-ui/core";
import InputRadio from "../../atoms/Inputs/Radio/InputRadio";
import InputText from "../../atoms/Inputs/Text/InputText";
import InputFile from "../../atoms/Inputs/File/InputFile";
import FormsFooter from "../../molecules/FormsFooter";
import {
  radioBio,
  radioCategory,
  radioDiet, radioGluten,
  radioHandicap,
  radioPOI,
  radioPrice
} from "../../../utils/formsMocks/PoisForm";
import TextArea from "../../atoms/Inputs/Area/TextArea";
import ScheduleBlock from "../../molecules/ScheduleBlock";

interface Props {
}

const footerData = {
  title: 'Création d\'une POI',
  current: '1',
  final: '4'
};

const PoisForm: React.FC<Props> = () => {
  const data = {
    category: '',
    name: '',
    address: '',
    phone: '',
    price: '',
    handicap: '',
    schedule : {
      monday: ''
    },
    description: '',
    pictures: '',
    bio: '',
    diet: '',
    gluten: '',
    activePOI: ''
  };

  return (
    <section>
      <PageHeader
        title="POI"
        subtitle="Card"
        text="Crée une POI"
      />
      <ScrollableContent isForm="true">
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio title="Catégorie" values={radioCategory}/>
          </Grid>
          <Grid item xs={4}>
            <InputText title="Nom" placeholder="Entrez le nom du POI .."/>
          </Grid>
          <Grid item xs={4}>
            <InputText title="Adresse complète" placeholder="Entrez l'adresse du POI ..."/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputText title="Téléphone" placeholder="01.23.45.67.89"/>
          </Grid>
          <Grid item xs={4}>
            <InputRadio values={radioPrice} title="Prix"/>
          </Grid>
          <Grid item xs={4}>
            <InputRadio values={radioHandicap} title="Accès fauteuil"/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <ScheduleBlock title="Horaire"/>
          </Grid>
          <Grid item xs={4}>
            <TextArea title="Description"/>
          </Grid>
          <Grid item xs={4}>
            <InputFile title="Photos du lieu" placeholder="Ajouter vos photos (3 max.)" isLarge={true}/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio title="Gluten free" values={radioGluten}/>
          </Grid>
          <Grid item xs={4}>
            <InputRadio title="Bio" values={radioBio}/>
          </Grid>
          <Grid item xs={4}>
            <InputRadio title="Régime" values={radioDiet}/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio title="POI active" values={radioPOI}/>
          </Grid>
        </Grid>
      </ScrollableContent>
      <FormsFooter activeSteps={footerData} returnLink="/pois" confirmLink="/pois/greenscore"/>
    </section>
  );
};

export default PoisForm;
