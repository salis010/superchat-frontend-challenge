import * as React from "react"
import styled from "../../styles/styled"

const H1 = styled.h1`
    color: ${(props) => props.theme.colors.primary};
`

interface IPageTitle {
    text: string
}

export const PageTitle: React.FunctionComponent<IPageTitle> = ({ text }) => (
    <H1>{text}</H1>
)
