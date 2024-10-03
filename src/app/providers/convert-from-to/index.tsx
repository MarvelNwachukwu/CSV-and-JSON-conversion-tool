'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConversionContextType {
  isJsonToCsv: boolean;
  toggleConversion: () => void;
}

const ConversionContext = createContext<ConversionContextType | undefined>(
  undefined
);

export const ConversionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isJsonToCsv, setIsJsonToCsv] = useState(true);

  const toggleConversion = () => {
    setIsJsonToCsv((prev) => !prev);
  };

  return (
    <ConversionContext.Provider value={{ isJsonToCsv, toggleConversion }}>
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversion = () => {
  const context = useContext(ConversionContext);
  if (context === undefined) {
    throw new Error('useConversion must be used within a ConversionProvider');
  }
  return context;
};
