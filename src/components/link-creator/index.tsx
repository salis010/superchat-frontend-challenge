import React, { useState } from "react"
import { PageWrapper } from "../common/elements"
import { PageTitle } from "../common/page-title"
import { Label } from "../common/label"
import styled from "@emotion/styled"

const H1 = styled.h1`
    color: red;
`

export const LinkCreator: React.FunctionComponent = () => {
    const [linkParams, setLinkParams] = React.useState({
        owner: "",
        repo: "",
        githubIcon: false,
        color: "#000000",
        backgroundColor: "#FFFFFF",
        buttonSize: "small",
    })

    return (
        <PageWrapper>
            <PageTitle text="Link Creator" />
            <form>
                <Label text="Repo Owner" />
            </form>
        </PageWrapper>
    )
}
