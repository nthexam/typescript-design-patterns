// import { Continent, CountriesRepository } from './countries-repository';
import { Continent } from './countries-repository';
import { RestCountries } from './rest-countries';
import { RestCountriesAdapter } from './rest-countries-adapter';

export class Adapter {
  public run = () => {
    // let countriesRepo = new CountriesRepository();
    let countriesRepo = new RestCountriesAdapter(new RestCountries());
    // countriesRepo.all().then((euroCountries) => {
    //   console.log('euro countries', euroCountries);
    // });
    countriesRepo
      .allByContinent(Continent.NorthAmerica)
      .then((northAmerica) => {
        console.log(
          `Number of north american countries stored: ${northAmerica.length}`
        );
      });
  };
}
