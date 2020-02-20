import React from 'react';
import PageHeader from "../../molecules/PageHeader/PageHeader";
import { ScrollableContent } from "../../../utils/styles/Globals";
import { Grid } from "@material-ui/core";
import InputRadio from "../../atoms/Inputs/Radio/InputRadio";
import InputText from "../../atoms/Inputs/Text/InputText";
import InputFile from "../../atoms/Inputs/File/InputFile";
import FormsFooter from "../../molecules/FormsFooter";
import { radioCompany, radioCompanyActive, radioPerimeter } from "../../../utils/formsMocks/CompaniesForm";
import InputAutocomplete from "../../atoms/Inputs/Autocomplete/InputAutocomplete";

interface Props {
}

const CompaniesForm: React.FC<Props> = () => {
  return (
    <section>
      <PageHeader
        title="Crée une entreprise"
        subtitle="nouvelle entreprise"
      />
      <ScrollableContent isForm="true">
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio values={radioCompany} title="Type d'entreprise"/>
          </Grid>
          <Grid item xs={4}>
            <InputText title="Nom de l'entreprise" placeholder="Entrez le nom de l'entreprise .."/>
          </Grid>
          <Grid item xs={4}>
            <InputAutocomplete title="Adresse complète" placeholder="Entrez votre adresse ..."/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputText title="Effectif" placeholder="Ex: 90"/>
          </Grid>
          <Grid item xs={4}>
            <InputText title="Email du référant" placeholder="Entrez l'email du référant.."/>
          </Grid>
          <Grid item xs={4}>
            <InputText title="Pattern" placeholder="Entrez le pattern ..."/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio values={radioPerimeter} title="Périmètre"/>
          </Grid>
          <Grid item xs={4}>
            <InputFile title="Logo" placeholder="Importer un logo" isLarge={false}/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio values={radioCompanyActive} title="Entreprise active"/>
          </Grid>
        </Grid>
      </ScrollableContent>
      <FormsFooter returnLink="/companies" confirmLink="/companies?status=created"/>
    </section>
  );
};

export default CompaniesForm;
