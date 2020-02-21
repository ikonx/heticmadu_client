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

      // administrative: "Île-de-France"
      // city: "Paris"
      // country: "France"
      // countryCode: "fr"
      // county: "Paris"
      // highlight: {name: "<em>Paris</em> 10e Arrondissement", city: "<em>Paris</em>", administrative: "Île-de-France", country: "France", county: "<em>Paris</em>", …}
      // hit: {country: "France", is_country: false, city: Array(1), is_highway: false, importance: 15, …}
      // hitIndex: 1
      // latlng: {lat: 48.8718, lng: 2.35779}
      // name: "Paris 10e Arrondissement"
      // postcode: "75010"
      // postcodes: ["75010"]
      // query: "paris"
      // rawAnswer: {hits: Array(5), nbHits: 5, processingTimeMS: 6, query: "paris", params: "hitsPerPage=5&language=fr&query=paris", …}
      // type: "city"
      // value: "Paris 10e Arrondissement, Paris, Île-de-France, France"
    });
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
