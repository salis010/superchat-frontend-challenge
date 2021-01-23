import React, { useState } from "react"
import styled from "../../styles/styled"
import { WIDTHS, HEIGHTS, RADII, FONT_SIZES } from "./consts"
import { Button } from "./button"

const CardWrapper = styled.div``

interface ICard {
    repo: string
    owner: string
    githubIcon: boolean
    color: string
    backgroundColor: string
    buttonSize: string
    description: string
    stars: number
}

export const Card: React.FunctionComponent<ICard> = ({
    color,
    backgroundColor,
    buttonSize,
}) => {
    const fontSize = FONT_SIZES[buttonSize]
    const width = WIDTHS[buttonSize]
    const height = HEIGHTS[buttonSize]
    const radius = RADII[buttonSize]

    return (
        <CardWrapper>
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
        </CardWrapper>
    )
}
