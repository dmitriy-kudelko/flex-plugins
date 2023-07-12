import React, { createContext, ReactNode, useContext } from 'react';

export interface CustomContextValue {
  version: string;
}

export const CustomContext = createContext<CustomContextValue>({
  version: '0.0.0',
});

export const useCustomContext = () => useContext(CustomContext);

export interface CustomContextProviderProps {
  children: ReactNode;
}

export function CustomContextProvider({ children }: CustomContextProviderProps) {
  return <CustomContext.Provider value={{ version: '1.0.0' }}>{children}</CustomContext.Provider>;
}
