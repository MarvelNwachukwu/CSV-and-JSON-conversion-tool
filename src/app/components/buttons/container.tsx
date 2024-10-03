import { Box, Flex, Text } from '@chakra-ui/react';
import ButtonComponent from './individualButton';
import ConversionSwitch from '../conversionSwitch';
import CsvToJsonButtons from './csvToJsonButtons';
import { useConversion } from '@/app/providers/convert-from-to';
import JsonToCSVButtons from './jsonToCsvButtons';
import { useCsv } from "@/app/providers/csv-provider";
import { useJson } from "@/app/providers/json-provider";

const ButtonsContainer = ({
  handleConvert,
  setSeparator,
  forceDoubleQuotes,
}: {
  handleConvert: () => void;
  setSeparator: (separator: string) => void;
  forceDoubleQuotes: (value: boolean) => void;
}) => {
  const { isJsonToCsv } = useConversion();
  const { csv } = useCsv();
  const { json } = useJson();

  const downloadCsvFile = () => {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'output.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const downloadJsonFile = () => {
    const blob = new Blob([json], { type: 'text/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'output.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      w={{ base: '100%', md: '30%' }}
      px={4}
      pt={4}
      pb={8}
      rounded={'md'}
      bg={'gray.100'}
    >
      <Flex flexDirection={'column'} w={'100%'} gap={4}>
        <Text textAlign={'center'} fontSize={20} fontWeight={600}>
          Convert
        </Text>
        <ConversionSwitch />
      </Flex>
      {isJsonToCsv ? (
        <JsonToCSVButtons
          handleConvert={handleConvert}
          setSeparator={setSeparator}
          forceDoubleQuotes={forceDoubleQuotes}
          downloadCsvFile={downloadCsvFile}
        />
      ) : (
        <CsvToJsonButtons downloadJsonFile={downloadJsonFile} />
      )}

      <Flex flexDir={'column'} justifyContent={'space-between'} mt={4}>
        <ButtonComponent
          buttonName='About the Developer'
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/1NS8dJsYLp2jqIeryvEzfzILL3PwxosZC/view'
            );
          }}
          aria-label="Learn more about the developer of this JSON to CSV converter"
        />

        <ButtonComponent
          buttonName='Support this Project'
          onClick={() => {
            window.open('https://www.buymeacoffee.com/marvelcodes');
          }}
          aria-label="Support the development of this JSON to Excel converter"
        />
      </Flex>
    </Box>
  );
};

export default ButtonsContainer;
