import { ScrollablePane, ScrollbarVisibility } from '@fluentui/react';
import * as React from 'react';

export default class Main extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
      return (
        <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
          {this.props.children}
        </ScrollablePane>
      )
    }
  }
  