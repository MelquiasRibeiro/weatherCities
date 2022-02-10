import React from 'react';
import {SavedCitiesProvider} from './MyCities';

export const GlobalProvider: React.FC = ({children}) => {
  return (
    <SavedCitiesProvider>
      <>{children}</>
    </SavedCitiesProvider>
  );
};
