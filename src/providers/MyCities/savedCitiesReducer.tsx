/* eslint-disable no-case-declarations */
import {storeData} from '../../utils/usingAsyncStorege';
import {Weather} from '../../types/IWeather';

export default (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'RECOVERY_DATA':
      const allCities = payload;

      return {
        ...state,
        cities: allCities,
      };
    case 'SAVE_CITY':
      const city = payload;
      const newCities = state.cities;
      newCities.push(city);

      storeData(newCities, 'saved-cities')
        .then(() => console.log('Adicionado com sucesso'))
        .catch(e => console.log('Erro ao Adicionar', e));

      return {
        ...state,
        cities: newCities,
      };
    case 'REMOVE_CITY':
      const UpdatedCity = state.cities.filter((WeatherCity: Weather) => {
        return WeatherCity.name !== payload;
      });
      storeData(UpdatedCity, 'saved-cities')
        .then(() => console.log('Removido com sucesso'))
        .catch(e => console.log('Erro ao Remover', e));

      return {
        ...state,
        cities: UpdatedCity,
      };

    default:
      return state;
  }
};
