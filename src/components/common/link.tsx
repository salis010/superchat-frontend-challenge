import * as React from "react"
import styled from "../../styles/styled"

const P = styled.p`
    font-size: 1.2rem;
    margin-top: 1rem;
`

interface ILink {
    url: string
    isValidUrl: boolean
}

export const Link: React.FunctionComponent<ILink> = ({ url, isValidUrl }) => (
    <P>
        {isValidUrl ? (
            <a target="_blank" href="url">
                {url}
            </a>
        ) : (
            url
        )}
    </P>
)
