import separators from '@/app/utils/seperators';
import { Flex, Select, Checkbox } from '@chakra-ui/react';
import ButtonComponent from '../individualButton';
import { useCsv } from '@/app/providers/csv-provider';
import { useJson } from '@/app/providers/json-provider';

const JsonToCSVButtons = ({
  handleConvert,
  setSeparator,
  forceDoubleQuotes,
  downloadCsvFile,
}: {
  handleConvert: () => void;
  setSeparator: (separator: string) => void;
  forceDoubleQuotes: (value: boolean) => void;
  downloadCsvFile: () => void;
}) => {

  const { csv, setShowTable, showTable } = useCsv();
  const { json } = useJson();
  const handleDisableConvertButton = () => {
    if (!json) return true;
    return false;
  };

  return (
    <>
      <Flex flexDirection={'column'}>
        <ButtonComponent
          buttonName='Convert'
          onClick={handleConvert}
          disabled={handleDisableConvertButton()}
        />

        <Select
          placeholder='Choose Separator'
          mt={4}
          colorScheme='teal'
          background={'transparent'}
          color={'teal.700'}
          onChange={(e) => setSeparator(e.target.value)}
        >
          {separators.map((separator) => (
            <option key={separator.value} value={separator.value}>
              {separator.name} - {separator.value}
            </option>
          ))}
        </Select>

        <Checkbox
          iconColor='white'
          iconSize='1rem'
          colorScheme='teal'
          mt={4}
          color='teal.700'
          border={'1px solid teal'}
          borderRadius={'md'}
          p={2}
          onChange={(e) => {
            forceDoubleQuotes(e.target.checked);
          }}
        >
          Force Double Quotes
        </Checkbox>

        <Checkbox
          iconColor='white'
          iconSize='1rem'
          colorScheme='teal'
          mt={4}
          color='teal.700'
          border={'1px solid teal'}
          borderRadius={'md'}
          p={2}
          onChange={(e) => {
            setShowTable(e.target.checked);
          }}
        >
          Show Table
        </Checkbox>

        <ButtonComponent
          buttonName='Copy CSV'
          onClick={() => {
            navigator.clipboard.writeText(csv);
          }}
          disabled={!csv}
        />

        <ButtonComponent
          buttonName='Download CSV'
          onClick={downloadCsvFile}
          disabled={!csv}
        />
      </Flex>
    </>
  );
};

export default JsonToCSVButtons;
