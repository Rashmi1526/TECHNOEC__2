import React from 'react';
import { useColorMode, Box } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons'

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right" py={4} mr={12}>
      <SunIcon
        size="lg"
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}
