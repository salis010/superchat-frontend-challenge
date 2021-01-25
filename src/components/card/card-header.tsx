import * as React from "react"
import styled from "../../styles/styled"
import githubLogo from "../../assets/github-logo.png"

type HeaderWrapperTypes = {
    backgroundColor: string
}

const HeaderWrapper = styled.div<HeaderWrapperTypes>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 3rem 3rem 0 0;
`

const Title = styled.h2`
    display: inline;
    font-size: 1.8rem;
    color: ${(props) => props.color};
    margin: 0;
`

interface ICardHeader {
    title: string
    githubIcon: boolean
    color: string
    backgroundColor: string
}

export const CardHeader = ({
    title,
    githubIcon,
    color,
    backgroundColor,
}: ICardHeader) => (
    <HeaderWrapper backgroundColor={color}>
        <Title color={backgroundColor}>{title}</Title>
        {githubIcon && <img src={githubLogo} alt="github-logo" />}
    </HeaderWrapper>
)
