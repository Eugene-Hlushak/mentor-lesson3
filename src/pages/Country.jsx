import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryItem, setCountryItem] = useState({});
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const { countryId } = useParams();

  useEffect(() => {
    setIsLoad(true);
    const countryCard = async () => {
      try {
        const result = await fetchCountry(countryId);
        setCountryItem(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoad(false);
      }
    };

    countryCard();
  }, [countryId]);
  const { flag, capital, countryName, id, languages, population } = countryItem;
  console.log(countryItem);
  return (
    <Section>
      <Container>
        {isLoad && <Loader />}

        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
        <Link to="/">Back to list</Link>
        {error && <Heading>Sorry, something goes wrong</Heading>}
      </Container>
    </Section>
  );
};
