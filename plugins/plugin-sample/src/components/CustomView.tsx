import React, { FC, ReactNode } from 'react';
import { Box } from '@twilio-paste/core/box';

import { SharedAlert, SharedThemeProvider } from 'shared-component-library';
import { LocalAlert } from './LocalAlert';
import { LocalThemeProvider } from './LocalThemeProvider';

interface CaseWrapperProps {
  children: ReactNode;
  title: string;
}

function CaseWrapper({ children, title }: CaseWrapperProps) {
  return (
    <div style={{ width: 400, height: '100%', padding: 50 }}>
      <p style={{ marginBottom: 20, fontWeight: 'bold' }}>{title}</p>
      {children}
    </div>
  );
}

export const CustomView: FC = () => {
  return (
    <Box>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
        }}
      >
        <SharedThemeProvider>
          <CaseWrapper
            title="Only ThemeProvider from the shared package is applied. Only components imported
                  from shared package are styled."
          >
            <LocalAlert />
            <SharedAlert />
          </CaseWrapper>
        </SharedThemeProvider>

        <LocalThemeProvider>
          <CaseWrapper
            title="Only local ThemeProvider is applied. Only local components are styled, but not
                  the shared ones."
          >
            <LocalAlert />
            <SharedAlert />
          </CaseWrapper>
        </LocalThemeProvider>

        <SharedThemeProvider>
          <LocalThemeProvider>
            <CaseWrapper
              title="Both local and shared ThemeProviders are applied. Both local
                    and shared components are styled."
            >
              <LocalAlert />
              <SharedAlert />
            </CaseWrapper>
          </LocalThemeProvider>
        </SharedThemeProvider>
      </div>
    </Box>
  );
};
