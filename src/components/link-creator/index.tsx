import React, { useState } from "react"
import { PageWrapper } from "../common/elements"
import { PageTitle } from "../common/page-title"
import styled from "@emotion/styled"

const H1 = styled.h1`
    color: red;
`

export const LinkCreator: React.FunctionComponent = () => {
    return (
        <PageWrapper>
            <PageTitle text="Link Creator" />
        </PageWrapper>
    )
}
