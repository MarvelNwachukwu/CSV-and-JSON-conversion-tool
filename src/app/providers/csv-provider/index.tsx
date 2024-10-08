'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CsvContextType {
  csv: string;
  setCsv: (csv: string) => void;
  showTable: boolean;
  setShowTable: (showTable: boolean) => void;
}

const CsvContext = createContext<CsvContextType | undefined>(undefined);

export const CsvProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [csv, setCsv] = useState('');
  const [showTable, setShowTable] = useState(false);
  return (
    <CsvContext.Provider value={{ csv, setCsv, showTable, setShowTable }}>
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