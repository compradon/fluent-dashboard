import { FontSizes, getTheme, IStackStyles, Stack } from '@fluentui/react';
import * as React from 'react';

const theme = getTheme();
const footerStyles: IStackStyles = { root: {
  zIndex: 20,
  backgroundColor: theme.palette.white,
  boxShadow: "rgba(0, 0, 0, .08) 0 -1px 0",
  padding: "4px 8px 4px 8px"
}};

type FooterProps = {
  code?: string,
  point?: string,
  supportTel?: string
}

export default class Footer extends React.PureComponent<FooterProps, { children?: React.ReactNode }> {
  public render() {
    return (
      <Stack horizontal verticalAlign="center" styles={footerStyles} tokens={{childrenGap: 10}}>
        <Stack.Item styles={{root: { fontSize: FontSizes.small }}}>
          {this.props.code ?? "CODE"}
        </Stack.Item>
        <Stack.Item grow styles={{root: { fontSize: FontSizes.small }}}>
          {this.props.point ?? "POINT"}
        </Stack.Item>
        <Stack.Item styles={{root: { fontSize: FontSizes.small }}}>
          {this.props.supportTel ?? "SUPPORT"}
        </Stack.Item>
      </Stack>
    )
  }
}
