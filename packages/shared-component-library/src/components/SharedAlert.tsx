import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { Alert } from '@twilio-paste/core/alert';

export function SharedAlert() {
  return (
    <Box backgroundColor="colorBackgroundAvailable">
      <Alert variant="neutral">Shared Alert</Alert>
    </Box>
  );
}
