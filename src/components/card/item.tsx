import * as React from "react"
import styled from "../../styles/styled"
import { FieldWrapper } from "../common/elements"

const P = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.color};
`

interface IItem {
    label: string
    value: string
    color: string
}

export const Item = ({ label, value, color }: IItem) => (
    <FieldWrapper>
        <P color={color}>{label}:</P>
        <P color={color}>{value}</P>
    </FieldWrapper>
)
