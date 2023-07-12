import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { useCustomContext } from 'shared-component-library';

export function ContextConsumer() {
  const { version } = useCustomContext();

  return <Box>Version: {version}</Box>;
}
