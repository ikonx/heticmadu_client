import React from 'react';
import PageHeader from "../molecules/PageHeader/PageHeader";
import { ScrollableContent } from "../../utils/styles/Globals";
import { Grid } from "@material-ui/core";
import InputRadio from "../atoms/Inputs/Radio/InputRadio";
import InputText from "../atoms/Inputs/Text/InputText";
import InputFile from "../atoms/Inputs/File/InputFile";
import FormsFooter from "../molecules/FormsFooter";

interface Props {
}

const radioCompany = [
  {
    name: 'Startup',
    category: 'company'
  },
  {
    name: 'Grand groupe',
    category: 'company'
  },
  {
    name: 'PME',
    category: 'company'
  }
];

const radioPerimeter = [
  {
    name: '1km',
    category: 'perimeter'
  },
  {
    name: '3km',
    category: 'perimeter'
  },
  {
    name: '5km',
    category: 'perimeter'
  }
];

const radioCompanyActive = [
  {
    name: 'Oui',
    category: 'companyActive'
  },
  {
    name: 'Non',
    category: 'companyActive'
  }
]

const CompaniesForm: React.FC<Props> = () => {
  return (
    <section>
      <PageHeader title="Crée une entreprise" subtitle="nouvelle entreprise" formBar={true}/>
      <ScrollableContent>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio values={radioCompany} title="Type d'entreprise"/>
          </Grid>
          <Grid item xs={4}>
            <InputText name="Nom de l'entreprise" placeholder="Entrez le nom de l'entreprise .."/>
          </Grid>
          <Grid item xs={4}>
            <InputText name="Adresse complète" placeholder="Entrez votre adresse ..."/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputText name="Effectif" placeholder="Ex: 90"/>
          </Grid>
          <Grid item xs={4}>
            <InputText name="Email du référant" placeholder="Entrez l'email du référant.."/>
          </Grid>
          <Grid item xs={4}>
            <InputText name="Pattern" placeholder="Entrez le pattern ..."/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio values={radioPerimeter} title="Périmètre"/>
          </Grid>
          <Grid item xs={4}>
            <InputFile name="Logo" placeholder="Importer un logo"/>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio values={radioCompanyActive} title="Entreprise active"/>
          </Grid>
        </Grid>
      </ScrollableContent>
      <FormsFooter />
    </section>
  );
};

export default CompaniesForm;
