import * as React from "react"
import { LinkCreator } from "./link-creator/index"
import Favicon from "react-favicon"

export const App: React.FunctionComponent = () => {
    return (
        <div>
            <Favicon url="../../favicon.png" />
            <LinkCreator />
        </div>
    )
}
