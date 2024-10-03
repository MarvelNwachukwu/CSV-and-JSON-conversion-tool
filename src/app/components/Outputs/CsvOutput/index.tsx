import { Box, Textarea } from '@chakra-ui/react';

const CsvOutput = ({
  csv,
  setCsv,
}: {
  csv: string;
  setCsv: (csv: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCsv(e.target.value);
  };

  return (
    <Box as='aside' w={'100%'}>
      <Textarea
        placeholder='CSV Output'
        value={csv}
        onChange={handleChange}
        h={'100%'}
      />
    </Box>
  );
};

export default CsvOutput;
