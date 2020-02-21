import React, { useEffect, useRef } from 'react';
import places from 'places.js';
import { StyledFormControl, StyledInput, StyledLabel } from './_style';

interface Props {
  title: string;
  placeholder: string;
  fieldKey?: string;
  fieldValue?: any;
  onChange?: (_fieldKey: any, _fieldValue: any) => void;
}

const InputAutocomplete: React.FC<Props> = ({
  title,
  placeholder,
  onChange,
  fieldKey,
  fieldValue,
}) => {
  const search = useRef(null);

  useEffect(() => {
    const options = {
      appId: 'pl563JA632LO',
      apiKey: '530b94e219f930c335722f7d32e43eb5',
      container: search.current ?? '',
    };
    const reconfigurableOptions = {
      language: 'fr',
      countries: ['fr'],
    };

    places(options).configure(reconfigurableOptions);
    places(options).on('change', (e: any) => {
      const parsedData = {
        longitude: e.suggestion.latlng.lng,
        latitude: e.suggestion.latlng.lat,
        address: e.suggestion.value,
      };
      onChange && onChange(fieldKey, parsedData);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <StyledFormControl>
      <StyledLabel>{title}</StyledLabel>
      <StyledInput
        type="text"
        ref={search}
        className="form-control"
        placeholder={placeholder}
        defaultValue={fieldValue}
      />
    </StyledFormControl>
  );
};

export default InputAutocomplete;
