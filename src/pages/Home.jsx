import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    const europeanCountries = async () => {
      try {
        const result = await getCountries();
        setCountries(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoad(false);
      }
    };

    europeanCountries();
  }, []);

  return (
    <Section>
      <Container>
        {isLoad && <Loader />}
        {countries && <CountryList countries={countries} />}
        {error && <Heading>Sorry, something goes wrong</Heading>}
      </Container>
    </Section>
  );
};
