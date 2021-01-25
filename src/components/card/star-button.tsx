import * as React from "react"
import styled from "@emotion/styled"
import { Button } from "./button"
import { WIDTHS, HEIGHTS, RADII, FONT_SIZES } from "./consts"

type ButtonWrapper = {
    backgroundColor: string
}

const ButtonWrapper = styled.div<ButtonWrapper>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem 3rem 3rem;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 0 0 3rem 3rem;
`

interface IStarButton {
    color: string
    backgroundColor: string
    buttonSize: string
}

export const StarButton = ({
    color,
    backgroundColor,
    buttonSize,
}: IStarButton) => {
    const fontSize = FONT_SIZES[buttonSize]
    const width = WIDTHS[buttonSize]
    const height = HEIGHTS[buttonSize]
    const radius = RADII[buttonSize]

    return (
        <ButtonWrapper backgroundColor={backgroundColor}>
            <Button
                color={color}
                backgroundColor={backgroundColor}
                fontSize={fontSize}
                width={width}
                height={height}
                radius={radius}
            >
                Star
            </Button>
        </ButtonWrapper>
    )
}
