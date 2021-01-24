import * as React from "react"
import styled from "../../styles/styled"
import { FieldWrapper, P } from "../common/elements"

const Ol = styled.ol`
    padding: 0;
    margin: 0;
    color: ${(props) => props.color};
`

const Li = styled.li`
    font-size: 1.4rem;
    font-weight: 600;
    list-style-position: inside;
    margin-bottom: 0.4rem;
`

interface IContributor {
    rank: number
    login: string
    contributions: string
}

interface IContributorsList {
    label: string
    list: IContributor[]
    color: string
}

export const ContributorsList = ({
    label,
    list = [],
    color,
}: IContributorsList) => (
    <FieldWrapper>
        <P color={color}>{label}:</P>
        <Ol color={color}>
            {list.map((list) => (
                <Li key={list.rank}>{`${list.login} ${list.contributions}`}</Li>
            ))}
        </Ol>
    </FieldWrapper>
)
