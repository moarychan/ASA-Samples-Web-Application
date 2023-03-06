import {
    FontIcon,
    getTheme,
    IconButton,
    IIconProps,
    INavLink,
    IStackStyles,
    mergeStyles,
    Persona,
    PersonaSize,
    Stack,
    Text
} from '@fluentui/react';
import React, {FC, MouseEvent, ReactElement} from 'react';
import {TodoList} from "../models";
import {Account} from "../models/account";
import { signIn } from "../auth/authPopup";

const theme = getTheme();

const logoStyles: IStackStyles = {
    root: {
        width: '300px',
        background: theme.palette.themePrimary,
        alignItems: 'center',
        padding: '0 20px'
    }
}

const logoIconClass = mergeStyles({
    fontSize: 20,
    paddingRight: 10
});

const toolStackClass: IStackStyles = {
    root: {
        alignItems: 'center',
        height: 48,
        paddingRight: 10
    }
}

const iconProps: IIconProps = {
    styles: {
        root: {
            fontSize: 16,
            color: theme.palette.white
        }
    }
}

interface HeaderProps {
    account?: Account
    lists?: TodoList[]
    // signIn: () => Account
}

const Header: FC<HeaderProps> = (props: HeaderProps): ReactElement => {
    return (
        <Stack horizontal>
            <Stack horizontal styles={logoStyles}>
                <FontIcon aria-label="Check" iconName="SkypeCircleCheck" className={logoIconClass} />
                <Text variant="xLarge">ToDo</Text>
            </Stack>
            <Stack.Item grow={1}>
                <div></div>
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal styles={toolStackClass} grow={1}>
                    <IconButton aria-label="Add" iconProps={{ iconName: "Settings", ...iconProps }} />
                    <IconButton aria-label="Add" iconProps={{ iconName: "Help", ...iconProps }} />
                    <Persona size={PersonaSize.size24} text="Login with Azure Active Directory B2C" onClick={signIn}/>
                    {/* <Toggle label="Dark Mode" inlineLabel styles={{ root: { marginBottom: 0 } }} onChange={changeTheme} /> */}
                </Stack>
            </Stack.Item>
        </Stack>
    );
}

export default Header;