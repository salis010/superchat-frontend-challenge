import React, { useState } from "react"
import styled from "../../styles/styled"

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

export const Card: React.FunctionComponent<ICard> = () => {
    ;<CardWrapper></CardWrapper>
}
