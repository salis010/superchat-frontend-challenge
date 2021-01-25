import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, Global, css } from "@emotion/react"
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
