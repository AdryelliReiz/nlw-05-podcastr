import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string,
            gray1: string,
            gray2: string,
            gray3: string,
            gray4: string,
            gray5: string,
        }
    }
}