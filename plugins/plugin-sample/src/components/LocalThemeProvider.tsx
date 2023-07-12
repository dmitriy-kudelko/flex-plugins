import React, { ReactNode } from 'react';
import { Theme } from '@twilio-paste/core/theme';

interface LocalThemeProviderProps {
  children: ReactNode;
}

export function LocalThemeProvider({ children }: LocalThemeProviderProps) {
  return <Theme.Provider theme="default">{children}</Theme.Provider>;
}
