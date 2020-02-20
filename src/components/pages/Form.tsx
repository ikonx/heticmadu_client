import React from 'react';
import CompaniesForm from '../organisms/Form/CompaniesForm';
import { useLocation } from 'react-router-dom';
import PoisForm from '../organisms/Form/PoisForm';

interface Props {}

const Form: React.FC<Props> = () => {
  const { pathname } = useLocation();
  const currentRoute = pathname.match('pois') ? 'pois' : 'companies';
  return <>{currentRoute === 'pois' ? <PoisForm /> : <CompaniesForm />}</>;
};

export default Form;
