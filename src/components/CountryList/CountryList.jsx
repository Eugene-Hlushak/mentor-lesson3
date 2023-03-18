import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const Location = useLocation();

  return (
    <Grid>
      {countries.map(({ flag, id, country }) => (
        <GridItem key={id}>
          <Link to={`country/${id}`} state={{ from: Location }}>
            <span>{country}</span>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
