<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import places from 'places.js';
import { StyledFormControl, StyledInput, StyledLabel } from "./_style";
=======
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { StyledFormControl, StyledInput, StyledLabel } from './_style';
>>>>>>> 037eaf3280565290cbcb534e903880c2e07d0baa


interface Props {
  title: string;
  placeholder: string;
  fieldKey?: string;
  fieldValue?: any;
  onChange?: (_fieldKey: string, _fieldValue: any) => void;
}

<<<<<<< HEAD
const InputAutocomplete: React.FC<Props> = ({ title, placeholder }) => {
  const search = useRef(null);
=======
interface PlaceType {
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: [
      {
        offset: number;
        length: number;
      },
    ];
  };
}

const InputAutocomplete: React.FC<Props> = ({
  title,
  placeholder,
  fieldKey,
  fieldValue,
  onChange
}) => {
  const [inputValue, setInputValue] = React.useState(fieldValue || '');
  const [options, setOptions] = React.useState<PlaceType[]>([]);
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ-hAsvvpS6cqJ2cKZIWxTDwq_xNVzwgA&libraries=places',
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(fieldKey || "", event.target.value);
  };

  const fetch = React.useMemo(
    () =>
      throttle((input: any, callback: any) => {
        (autocompleteService.current as any).getPlacePredictions(
          input,
          callback,
        );
      }, 200),
    [],
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }
>>>>>>> 037eaf3280565290cbcb534e903880c2e07d0baa

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

<<<<<<< HEAD
    places(options).configure(reconfigurableOptions);
  }, []);

  return (
    <StyledFormControl>
      <StyledLabel>{ title }</StyledLabel>
      <StyledInput type="text" ref={search} className="form-control" placeholder={placeholder}/>
    </StyledFormControl>
=======
  return (
    <Autocomplete
      id="google-map-demo"
      getOptionLabel={(option: any) =>
        typeof option === 'string' ? option : option.description
      }
      filterOptions={(x: any) => x}
      options={options}
      autoComplete
      includeInputInList
      freeSolo
      disableOpenOnFocus
      renderInput={(params: any) => (
        <StyledFormControl>
          <StyledLabel>{title}</StyledLabel>
          <StyledInput
            {...params}
            variant="outlined"
            fullWidth
            placeholder={placeholder}
            onChange={handleChange}
          />
        </StyledFormControl>
      )}
      renderOption={(option: any) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [
            match.offset,
            match.offset + match.length,
          ]),
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon />
            </Grid>
            <Grid item xs>
              {parts.map((part: any, index: any) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
>>>>>>> 037eaf3280565290cbcb534e903880c2e07d0baa
  );
};

export default InputAutocomplete;
