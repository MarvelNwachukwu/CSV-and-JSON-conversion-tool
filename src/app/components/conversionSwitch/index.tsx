'use client';

import { useConversion } from '@/app/providers/convert-from-to';
import { HStack, Switch, Text } from '@chakra-ui/react';

const ConversionSwitch = () => {
  const { isJsonToCsv, toggleConversion } = useConversion();

  return (
    <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
      <Text fontSize={'0.75rem'}>CSV To JSON</Text>
      <Switch
        colorScheme='teal'
        size='lg'
        isChecked={isJsonToCsv}
        onChange={toggleConversion}
      />{' '}
      <Text fontSize={'0.75rem'}>JSON To CSV</Text>
    </HStack>
  );
};

export default ConversionSwitch;