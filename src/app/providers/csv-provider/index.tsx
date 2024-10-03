'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CsvContextType {
  csv: string;
  setCsv: (csv: string) => void;
}

const CsvContext = createContext<CsvContextType | undefined>(undefined);

export const CsvProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [csv, setCsv] = useState('');

  return (
    <CsvContext.Provider value={{ csv, setCsv }}>
      {children}
    </CsvContext.Provider>
  );
};

export const useCsv = () => {
  const context = useContext(CsvContext);
  if (context === undefined) {
    throw new Error('useCsv must be used within a CsvProvider');
  }
  return context;
};