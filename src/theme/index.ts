import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors: {
        blue: {
            900: '#010A1B'
        } 
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
})