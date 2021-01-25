declare module '@emotion/react' {
    export interface ITheme {
        colors: {
            white: string,
            primary: string,
            text: string
        },
        dimensions: {
            radius: string,
            borderRadius: string
        },
        spaces: {
            textHPadding: string,
        }
    }
}