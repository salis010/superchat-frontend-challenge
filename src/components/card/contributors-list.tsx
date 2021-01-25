import * as React from "react"
import styled from "../../styles/styled"
import { FieldWrapper, P } from "../common/elements"
import { IContributor } from "../common/consts"

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

interface IContributorsList {
    label: string
    list: IContributor[]
    color: string
}

export const ContributorsList = ({ label, list, color }: IContributorsList) => (
    <FieldWrapper>
        <P color={color}>{label}:</P>
        {list.length > 0 && (
            <Ol color={color}>
                {list.map((item, i) => (
                    <Li key={i}>{`${item.login} (${item.contributions})`}</Li>
                ))}
            </Ol>
        )}
    </FieldWrapper>
)
