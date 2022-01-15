import React, { createContext } from 'react';
import useData from '../../Hooks/useData';

export const DataContext=createContext(null)

const DataProvider = ({children}) => {
    const allContext=useData();
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;