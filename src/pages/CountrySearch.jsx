import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const hadleSubmit = query => {
    setRegion(query);
    setError(null);
  };

  useEffect(() => {
    setIsLoad(true);
    const Countries = async () => {
      try {
        const result = await fetchByRegion(region);
        setCountries(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoad(false);
      }
    };

    Countries();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm hadleSubmit={hadleSubmit} />
        {isLoad && <Loader />}
        {countries && <CountryList countries={countries} />}
        {error && <Heading>Sorry, something goes wrong</Heading>}
      </Container>
    </Section>
  );
};
