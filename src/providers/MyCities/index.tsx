import React, {createContext, useReducer} from 'react';
import SavedCitiesReducer from './savedCitiesReducer';
import {Weather} from '../../types/IWeather';

// Initial State

const initialState = {
  cities: [],
};

// Create Context
export const SavedCitiesContext = createContext(initialState);

// Provider Component
export const SavedCitiesProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(SavedCitiesReducer, initialState);

  // Actions

  const recoveryData = (cities: Weather[]) => {
    dispatch({
      type: 'RECOVERY_DATA',
      payload: cities,
    });
  };

  const saveCity = (city: Weather) => {
    dispatch({
      type: 'SAVE_CITY',
      payload: city,
    });
  };

  const removeCity = (name: string) => {
    dispatch({
      type: 'REMOVE_CITY',
      payload: name,
    });
  };

  return (
    <SavedCitiesContext.Provider
      value={{
        cities: state.cities,
        recoveryData,
        saveCity,
        removeCity,
      }}>
      {children}
    </SavedCitiesContext.Provider>
  );
};
