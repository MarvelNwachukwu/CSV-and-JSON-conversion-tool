import { Box, Input, InputGroup, InputLeftAddon, Text, Textarea } from "@chakra-ui/react"

const CsvInput = ({csv, setCsv}: {csv: string, setCsv: (csv: string) => void}) => {

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCsv(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCsv(e.target.value);
  };

  return (
    <Box as='aside' w={'100%'}>
        <InputGroup mb={4}>
          <InputLeftAddon>Upload CSV file</InputLeftAddon>
          <Input type='file' accept='.csv' pt={1} onChange={handleFileChange} />
        </InputGroup>
        <Text as={'p'} textAlign={'center'} mb={4} fontWeight={600}>
          Or
        </Text>
        <Textarea
          placeholder='Paste CSV here'
          value={csv}
          onChange={handleChange}
          h={'calc(100% - 96px)'}
        />
      </Box>
  )
}

export default CsvInput;