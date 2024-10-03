import { Box } from '@chakra-ui/react';
import CsvJson from './components/conversionPage';
import Header from "./components/header";
import SeoContent from "./components/SeoContent";

export default function Home() {
  return (
    <Box as='main' py={4} px={8} h={{ base: 'auto', md: '100vh' }}>
      <Header />
      <SeoContent />
      <CsvJson />
    </Box>
  );
}
