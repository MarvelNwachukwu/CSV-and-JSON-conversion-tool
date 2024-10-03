'use client';

import { Flex, Select } from '@chakra-ui/react';
import ButtonComponent from '../individualButton';
import { handleCSVConversions } from '@/app/utils/csvToJsonConversions';
import { useCsv } from '@/app/providers/csv-provider';
import { useJson } from '@/app/providers/json-provider';
import formatJsonData from '@/app/utils/csvToJsonConversions/formatJson';

const CsvToJsonButtons = ({
  downloadJsonFile,
}: {
  downloadJsonFile: () => void;
}) => {
  const { csv } = useCsv();
  const { json, setJson, jsonSpace, setJsonSpace } = useJson();

  const handleDisableConvertButton = () => {
    if (!csv) return true;
    return false;
  };

  const handleCsvConvertButtonClick = () => {
    setJson(
      handleCSVConversions({
        csv,
        csvFile: null,
        space: jsonSpace,
      }) ?? ''
    );
  };

  return (
    <>
      <Flex flexDirection={'column'}>
        <ButtonComponent
          buttonName='Convert'
          onClick={handleCsvConvertButtonClick}
          disabled={handleDisableConvertButton()}
        />

        <Select
          placeholder='Select option'
          mt={4}
          colorScheme='teal'
          background={'transparent'}
          color={'teal.700'}
          onChange={(e) => setJsonSpace(Number(e.target.value))}
        >
          <option value='2' defaultChecked>
            2 Tab Spaces
          </option>
          <option value='3'>3 Tab Spaces</option>
          <option value='4'>4 Tab Spaces</option>
        </Select>

        <ButtonComponent
          buttonName='Format JSON'
          onClick={() => {
            setJson(formatJsonData(json, jsonSpace));
          }}
          disabled={!json}
        />

        <ButtonComponent
          buttonName='Minify JSON'
          onClick={() => {
            setJson(formatJsonData(json, 0));
          }}
          disabled={!json}
        />

        <ButtonComponent
          buttonName='Copy JSON'
          onClick={() => {
            navigator.clipboard.writeText(json);
          }}
          disabled={!json}
        />

        <ButtonComponent
          buttonName='Download JSON'
          onClick={downloadJsonFile}
          disabled={!json}
        />
      </Flex>
    </>
  );
};

export default CsvToJsonButtons;
