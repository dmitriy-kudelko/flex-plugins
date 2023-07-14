import React, { ReactNode } from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import { ProductAddOnsIcon } from '@twilio-paste/icons/esm/ProductAddOnsIcon';
import { Actions } from '@twilio/flex-ui';
import { CustomView } from './components/CustomView';

const PLUGIN_NAME = 'SamplePlugin';

const handleSideLinkClick = () => {
  Actions.invokeAction('HistoryPush', '/custom-route');
};

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
        <CustomView />
      </flex.View>,
    );
  }
}
