import { Text, Button } from '@chakra-ui/react';
import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  buttonName: string;
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <Button
      mt={4}
      w={'100%'}
      onClick={restProps.onClick}
      isDisabled={restProps.disabled}
      _disabled={{ opacity: 0.25, cursor: 'not-allowed' }}
      colorScheme='teal'
      variant='outline'
      // aria-label={restPropsariaLabel}
    >
      <Text as='span' color='teal.700'>
        {restProps.buttonName}
        {children}
      </Text>
    </Button>
  );
};

export default ButtonComponent;
