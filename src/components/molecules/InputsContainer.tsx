import React from 'react';

interface Props {
  title: string;
}

const InputsContainer: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <p>{ title }</p>
    </div>
  );
};

export default InputsContainer;
