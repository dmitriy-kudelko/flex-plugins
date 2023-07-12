import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { useCustomContext } from './CustomContext';

export function SharedContextConsumer() {
  const { version } = useCustomContext();

  return <Box>Custom version: {version}</Box>;
}
