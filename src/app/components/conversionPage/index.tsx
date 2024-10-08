'use client';

import { Flex, Link, useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ButtonsContainer from '../buttons/container';
import jsonToCsv from '../../utils/jsonToCsv';
import InputRenderer from './InputRenderer';
import OutputRenderer from './OutputRenderer';
import { useCsv } from '@/app/providers/csv-provider';
import { useJson } from '@/app/providers/json-provider';

export default function CsvJson() {
  const { csv, setCsv, showTable } = useCsv();
  const { json, setJson } = useJson();

  const [separator, setSeparator] = React.useState(',');
  const [forceDoubleQuotes, setForceDoubleQuotes] = React.useState(false);
  const toast = useToast();

  const handleConvert = () => {
    const csvData = jsonToCsv(json, separator, forceDoubleQuotes);

    if (typeof csvData === 'string') {
      setCsv(csvData);
    } else {
      toast({
        title: 'Error',
        description: 'Error converting JSON to CSV',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    toast({
      title: 'Data Privacy Notice',
      description: (
        <>
          We don&apos;t store or have access to any data. All conversions are
          done in your browser.
          <Link
            href='https://github.com/MarvelNwachukwu/CSV-and-JSON-conversion-tool'
            isExternal
            color='white'
            fontWeight={600}
            ml={1}
          >
            View source on GitHub
          </Link>
        </>
      ),
      status: 'info',
      duration: 20000,
      isClosable: true,
      position: 'bottom',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      as='section'
      mt={4}
      flex={2}
      direction={{ base: 'column', md: 'row' }}
      justifyContent={'space-between'}
      gap={4}
      h={'90%'}
    >
      <InputRenderer json={json} setJson={setJson} csv={csv} setCsv={setCsv} />
      <ButtonsContainer
        handleConvert={handleConvert}
        setSeparator={setSeparator}
        forceDoubleQuotes={setForceDoubleQuotes}
      />
      <OutputRenderer
        separator={separator}
        csv={csv}
        setCsv={setCsv}
        json={json}
        setJson={setJson}
        showTable={showTable}
      />
    </Flex>
  );
}
