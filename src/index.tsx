import * as React from "react"
import * as ReactDOM from "react-dom"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { globalCSS } from "./styles/global-css.js"
import { theme } from "./styles/theme"

import { App } from "./components/app"

const mountNode = document.getElementById("mountNode")

ReactDOM.render(
    <>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
        <Global
            styles={css`
                ${globalCSS}
            `}
        />
    </>,
    mountNode
)
