import * as React from "react"
import styled from "@emotion/styled"
import { FieldWrapper, P } from "../common/elements"

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
