import * as React from "react"
import * as ReactDOM from "react-dom"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { globalCSS } from "./styles/global-css.js"
import { theme } from "./styles/theme"

import { CardPage } from "./components/card/card-page"

const mountNode = document.getElementById("mountNode")

ReactDOM.render(
    <>
        <ThemeProvider theme={theme}>
            <CardPage />
        </ThemeProvider>
        <Global
            styles={css`
                ${globalCSS}
            `}
        />
    </>,
    mountNode
)
