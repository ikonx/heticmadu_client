import React, {useEffect, useRef, useState} from 'react';
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
  const [coordinates, setCoordinates] = useState({});

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
      setCoordinates(parsedData);
    });
  }, []);

  const changeEvent = (e: any) => {
    if (onChange) {
      coordinates ? (
        onChange("coordinates", coordinates || '')
      ) : (
        onChange(fieldKey || '', e.target.value || '')
      )
    }
  }

  return (
    <StyledFormControl>
      <StyledLabel>{title}</StyledLabel>
      <StyledInput
        type="text"
        ref={search}
        className="form-control"
        placeholder={placeholder}
        defaultValue={fieldValue}
        onBlur={e => changeEvent(e)}
      />
    </StyledFormControl>
  );
};

export default InputAutocomplete;
