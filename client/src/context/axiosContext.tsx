import axios, { AxiosInstance } from 'axios';
import React, { createContext, useContext } from 'react';

interface AxiosContextProps {
    children: React.ReactNode;
}

export const UseAxios = () => {

    const context = useContext(AxiosContext);
    if (!context) {
        throw new Error('useAxios doit être utilisé dans un AxiosProvider');
    }

    return context;
};

const AxiosContext = createContext<AxiosInstance | null>(null);

export const AxiosProvider: React.FC<AxiosContextProps> = ({ children }) => {

    // Créer une instance Axios
    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_URL, // Base URL de l'API
        // timeout: 10000, // Timeout en ms
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });


  return <AxiosContext.Provider value={axiosInstance}>
            {children}
        </AxiosContext.Provider>;
};

