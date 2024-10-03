import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const SeoContent = () => {
  return (
    <Box as="section" mt={8} mb={8}>
      <Heading as="h1" size="xl" mb={4}>
        JSON to CSV Converter | Online JSON to Excel Tool
      </Heading>
      <Text mb={4}>
        Welcome to our free online JSON to CSV converter. Easily convert JSON files to CSV or Excel format with our powerful tool.
      </Text>
      <Heading as="h2" size="lg" mb={3}>
        Features:
      </Heading>
      <UnorderedList mb={4}>
        <ListItem>Convert JSON to CSV online</ListItem>
        <ListItem>Parse JSON arrays to CSV</ListItem>
        <ListItem>JSON to Excel conversion</ListItem>
        <ListItem>CSV to JSON conversion</ListItem>
        <ListItem>Support for various JSON file formats</ListItem>
      </UnorderedList>
      <Text>
        Our JSON Excel converter makes it easy to transform your data between JSON and CSV formats. Whether you need to convert a JSON file to CSV or parse a JSON array, our tool has you covered.
      </Text>
    </Box>
  );
};

export default SeoContent;