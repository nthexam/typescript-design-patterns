import axios from 'axios';

export class RestCountries {
  private _baseUrl: string = 'http://restcountries.com/v2/';

  private async getParsedCountries(url: string): Promise<any[]> {
    console.log(url);
    return axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('This is some error');
      })
      .then((data) => {
        return data as any[];
      });
  }

  async getAll(): Promise<any[]> {
    const all = await this.getParsedCountries(`${this._baseUrl}all`);
    return all;
  }

  async getByName(name: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}name/${name}`);
  }

  async getByFullName(fullName: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}fullName/${fullName}`);
  }

  async getByCode(code: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}alpha/${code}`);
  }

  async getByCurrency(currency: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}currency/${currency}`);
  }

  async getByCapitalCity(capital: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}capital/${capital}`);
  }

  async getByCallingCode(callingCode: string): Promise<any[]> {
    return this.getParsedCountries(
      `${this._baseUrl}callingcode/${callingCode}`
    );
  }

  async getByRegion(region: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}region/${region}`);
  }
}
