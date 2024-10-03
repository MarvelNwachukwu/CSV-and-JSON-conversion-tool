'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface JsonContextType {
  json: string;
  setJson: (json: string) => void;
  jsonSpace: number;
  setJsonSpace: (space: number) => void;
}

const JsonContext = createContext<JsonContextType | undefined>(undefined);

export const JsonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [json, setJson] = useState('');
  const [jsonSpace, setJsonSpace] = useState(2);

  return (
    <JsonContext.Provider value={{ json, setJson, jsonSpace, setJsonSpace }}>
      {children}
    </JsonContext.Provider>
  );
};

export const useJson = () => {
  const context = useContext(JsonContext);
  if (context === undefined) {
    throw new Error('useJson must be used within a JsonProvider');
  }
  return context;
};
