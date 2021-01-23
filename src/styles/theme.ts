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

export const theme: ITheme = {
    colors: {
        white: "RGB(250, 250, 250)",
        primary: "RGB(150, 150, 150)",
        text: "RGB(70, 70, 70)"
    },    
    dimensions: {
        radius: "20px",
        borderRadius: "6px"
    },
    spaces: {
        textHPadding: "10px",    
    }
}