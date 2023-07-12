import React, { ReactNode } from 'react';
import { Theme } from '@twilio-paste/core/theme';

interface SharedThemeProviderProps {
  children: ReactNode;
}

export function SharedThemeProvider({ children }: SharedThemeProviderProps) {
  return <Theme.Provider theme="default">{children}</Theme.Provider>;
}
