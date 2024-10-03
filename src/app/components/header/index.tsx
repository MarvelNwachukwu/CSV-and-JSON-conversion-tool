'use client';

import { useConversion } from '@/app/providers/convert-from-to';
import { Box, Text } from '@chakra-ui/react';

const Header = () => {
  const { isJsonToCsv } = useConversion();
  return (
    <Box as='header' fontSize={21} fontWeight={600} mb={8}>
      <Text>
        {'{ '}
        {isJsonToCsv ? 'JSON' : 'CSV'} {' > '}
        <Text as='span' color='teal.700'>
          {isJsonToCsv ? 'CSV' : 'JSON'}
        </Text>
        {' } '}
      </Text>
    </Box>
  );
};

export default Header;
