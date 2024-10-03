import { Box, Input, InputGroup, InputLeftAddon, Text, Textarea } from "@chakra-ui/react"

const JsonInput = ({json, setJson}: {json: string, setJson: (json: string) => void}) => {

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setJson(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
  };

  return (
    <Box as='aside' w={'100%'}>
        <InputGroup mb={4}>
          <InputLeftAddon>Upload JSON file</InputLeftAddon>
          <Input type='file' accept='.json' pt={1} onChange={handleFileChange} />
        </InputGroup>
        <Text as={'p'} textAlign={'center'} mb={4} fontWeight={600}>
          Or
        </Text>
        <Textarea
          placeholder='Paste JSON here'
          value={json}
          onChange={handleChange}
          h={'calc(100% - 96px)'}
        />
      </Box>
  )
}

export default JsonInput;