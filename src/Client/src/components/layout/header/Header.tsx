import { CommandBarButton, getTheme, ICommandBarStyles, Image, IPersonaSharedProps, IStackStyles, Persona, PersonaSize, SearchBox, Stack, Text } from '@fluentui/react';
import * as React from 'react';

const theme = getTheme();
const headerStyles: IStackStyles = { root: { backgroundColor: theme.palette.white, boxShadow: "rgba(0, 0, 0, .08) 0 1px 0" } };
const commandBarButtonStyles: ICommandBarStyles = { root: { height: 48, width: 48 } };
const logoButtonStyles: ICommandBarStyles = { root: { height: 48, width: 260 } };

type HeaderProps = {
    logo?: string,
    organization?: string,
    point?: string
}

export default class Header extends React.PureComponent<HeaderProps, { children?: React.ReactNode }> {
    public render() {
        return (
            <Stack horizontal verticalAlign="center" styles={headerStyles}>
                <Stack.Item shrink>
                    <CommandBarButton href="/" title="Fluent Dashboard" styles={logoButtonStyles}>
                        <Image height={32} src={this.props.logo ?? "/favicon.svg"} />
                        <Text style={{ marginLeft: 8, fontWeight: "bold" }}>{this.props.organization ?? "Fluent Dashboard"}</Text>
                    </CommandBarButton>
                </Stack.Item>
                <Stack.Item grow shrink>
                    <Text style={{ marginLeft: 8 }}>{this.props.point}</Text>
                </Stack.Item>
                <Stack.Item styles={{ root: { width: 220, marginRight: 8 } }}>
                    <SearchBox placeholder="Поиск" onSearch={newValue => console.log('value is ' + newValue)} />
                </Stack.Item>
                <Stack.Item>
                    <Stack horizontal>
                        <CommandBarButton iconProps={{ iconName: "Unknown" }} styles={commandBarButtonStyles} />
                        <CommandBarButton iconProps={{ iconName: "Settings" }} title="Emoji" styles={commandBarButtonStyles} />
                        <CommandBarButton styles={commandBarButtonStyles}>
                            <Persona size={PersonaSize.size32} />
                        </CommandBarButton>
                    </Stack>
                </Stack.Item>
            </Stack>
        )
    }
}
