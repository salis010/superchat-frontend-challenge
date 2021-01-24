import * as React from "react"
import styled from "../../styles/styled"
import { CardHeader } from "./card-header"
import { StarButton } from "./star-button"
import { Item } from "./item"

const CardWrapper = styled.div`
    margin-bottom: 3rem;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 3rem 1rem 3rem;
    background-color: ${(props) => props.backgroundColor};
`

interface ICard {
    repo: string
    owner: string
    description: string
    stars: number
    githubIcon: boolean
    color: string
    backgroundColor: string
    buttonSize: string
}

export const Card: React.FunctionComponent<ICard> = ({
    repo,
    owner,
    description,
    githubIcon,
    stars,
    color,
    backgroundColor,
    buttonSize,
}) => {
    return (
        <CardWrapper>
            <CardHeader
                title={repo}
                githubIcon={githubIcon}
                color={color}
                backgroundColor={backgroundColor}
            />
            <ContentWrapper backgroundColor={backgroundColor}>
                <Item label="Author" value={owner} color={color} />
                <Item label="Descritption" value={description} color={color} />
                <Item label="Stars" value={stars} color={color} />
            </ContentWrapper>
            <StarButton
                color={color}
                backgroundColor={backgroundColor}
                buttonSize={buttonSize}
            />
        </CardWrapper>
    )
}
