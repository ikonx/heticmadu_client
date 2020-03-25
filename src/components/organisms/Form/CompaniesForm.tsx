import React, { useContext, useState } from 'react';
import PageHeader from "../../molecules/PageHeader/PageHeader";
import { ScrollableContent } from "../../../utils/styles/Globals";
import { Grid } from "@material-ui/core";
import InputRadio from "../../atoms/Inputs/Radio/InputRadio";
import InputText from "../../atoms/Inputs/Text/InputText";
import InputFile from "../../atoms/Inputs/File/InputFile";
import FormsFooter from "../../molecules/FormsFooter";
import { radioCompany, radioCompanyActive, radioPerimeter } from "../../../utils/formsMocks/CompaniesForm";
import InputAutocomplete from "../../atoms/Inputs/Autocomplete/InputAutocomplete";
import { CreateCompanyDTO, ICompanyTypeEnum } from "../../../utils/dto/company.dto";
import { IStatusEnum } from "../../../utils/interfaces/statusEnum";
import CompaniesContext from "../../../contexts/companies/companies.context";
import { postCompanies, postPoi } from "../../../utils/http";
import { useHistory } from "react-router-dom";

interface Props {
}

const emptyCompany: CreateCompanyDTO = {
  name: '',
  address: '',
  rse: '',
  numberOfEmployees: '',
  picture: '',
  perimeter: '1',
  status: 'Close',
  type: ICompanyTypeEnum.STARTUP,
  creationDate: '2020-02-20T14:50:44+00:00',
  clientsPositions: [
    {
      "longitude": "1.273828",
      "latitude": "1.273828",
      "perimeter": 20
    }
  ]
};

const CompaniesForm: React.FC<Props> = () => {
  const [companyData, setCompanyData] = useState<CreateCompanyDTO>({
    ...emptyCompany,
  });
  const { refreshCompanies } = useContext(CompaniesContext);
  const history = useHistory();
  const updateField = (_fieldKey: any, _fieldValue: any) => {
    const newPoiState: CreateCompanyDTO = { ...companyData };
    // @ts-ignore
    newPoiState[_fieldKey] = _fieldValue;
    setCompanyData(newPoiState);
  };
  const onNextStep = () => {
    postCompanies(companyData).then((res: any) => {
      res && (
        refreshCompanies().then((res: any) => res.data && history.push('/companies'))
      )
    });
    return;
  };

  return (
    <section>
      <PageHeader
        title="Crée une entreprise"
        subtitle="nouvelle entreprise"
      />
      <ScrollableContent>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputRadio 
              values={radioCompany} 
              title="Type d'entreprise"
              fieldKey={'type'}
              onChange={updateField}
              fieldValue={companyData['type']}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              title="Nom de l'entreprise"
              placeholder="Entrez le nom de l'entreprise .."
              fieldKey={'name'}
              onChange={updateField}
              fieldValue={companyData['name']}
            />
          </Grid>
          <Grid item xs={4}>
            <InputAutocomplete
              title="Adresse complète"
              placeholder="Entrez votre adresse ..."
              fieldKey={'address'}
              onChange={updateField}
              fieldValue={companyData['address']}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputText
              title="Effectif"
              placeholder="Ex: 90"
              fieldKey={'numberOfEmployees'}
              onChange={updateField}
              fieldValue={companyData['numberOfEmployees']}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              title="Email du référant"
              placeholder="Entrez l'email du référant.."
              fieldKey={'rse'}
              onChange={updateField}
              fieldValue={companyData['rse']}
            />
          </Grid>
          <Grid item xs={4}>
            <InputRadio
              values={radioPerimeter}
              title="Périmètre"
              fieldKey={'perimeter'}
              onChange={updateField}
              fieldValue={companyData['perimeter']}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <InputFile
              title="Logo"
              placeholder="Importer un logo"
              isLarge={false}
            />
          </Grid>
          <Grid item xs={4}>
            <InputRadio
              values={radioCompanyActive}
              title="Entreprise active"
              fieldKey={'status'}
              onChange={updateField}
              fieldValue={companyData['status']}
            />
          </Grid>
        </Grid>
      </ScrollableContent>
      <FormsFooter
        returnLink="/companies"
        confirmAction={onNextStep}
      />
    </section>
  );
};

export default CompaniesForm;
