import { Box, Textarea } from '@chakra-ui/react';

const JsonOutput = ({
  json,
  setJson,
}: {
  json: string;
  setJson: (json: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
  };

  return (
    <Box as='aside' w={'100%'}>
      <Textarea
        placeholder='JSON Output'
        value={json}
        onChange={handleChange}
        h={'100%'}
      />
    </Box>
  );
};

export default JsonOutput;
