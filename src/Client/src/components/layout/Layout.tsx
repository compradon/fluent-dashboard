import { getTheme, IStackStyles, Stack } from '@fluentui/react';
import * as React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

const theme = getTheme();
const headerStyles: IStackStyles = { root: { zIndex: 10, position: "relative" } };
const mainStyles: IStackStyles = { root: { position: "relative", backgroundColor: theme.palette.neutralLighterAlt } };
const footerStyles: IStackStyles = { root: { zIndex: 10, position: "relative" } };

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <Stack grow={1}>
                <Stack.Item styles={headerStyles}>
                    <Header />
                </Stack.Item>
                <Stack.Item verticalFill styles={mainStyles}>
                    <Main>{this.props.children}</Main>
                </Stack.Item>
                <Stack.Item styles={footerStyles}>
                    <Footer />
                </Stack.Item>
            </Stack>
        );
    }
}
