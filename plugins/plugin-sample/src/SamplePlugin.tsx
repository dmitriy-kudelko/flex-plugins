import React, { ReactNode } from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import { LocalThemeProvider } from './components/LocalThemeProvider';
import { Box } from '@twilio-paste/core/box';
import { SharedAlert, SharedThemeProvider } from 'shared-component-library';
import { ProductAddOnsIcon } from '@twilio-paste/icons/esm/ProductAddOnsIcon';
import { Actions } from '@twilio/flex-ui';
import { LocalAlert } from './components/LocalAlert';

const PLUGIN_NAME = 'SamplePlugin';

const handleSideLinkClick = () => {
  Actions.invokeAction('HistoryPush', '/custom-route');
};

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

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    flex.SideNav.Content.add(
      <Flex.SideLink
        showLabel
        icon={<ProductAddOnsIcon decorative={false} title="Description of icon" />}
        isActive
        onClick={handleSideLinkClick}
        key="custom-side-link"
      >
        Gravity Marketplace
      </Flex.SideLink>,
    );

    flex.ViewCollection.Content.add(
      // @ts-ignore
      <flex.View
        name="custom-route"
        key="custom-route"
        route={{ path: '/custom-route', exact: true }}
      >
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
      </flex.View>,
    );
  }
}
