import * as React from "react"
import styled from "../../styles/styled"

const Text = styled.label`
    font-size: 1.4rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.text};
`

interface ILabel {
    text: string
}

export const Label: React.FunctionComponent<ILabel> = ({ text }) => (
    <Text>{text}:</Text>
)
