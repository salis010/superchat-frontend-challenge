import React, { useState } from "react"
import { PageWrapper, FieldWrapper } from "../common/elements"
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

    const handleChange = (event) => {
        console.log(event.target.value)
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value

        return setLinkParams({
            ...linkParams,
            [event.target.id]: value,
        })
    }

    return (
        <PageWrapper>
            <PageTitle text="Link Creator" />
            <form>
                <FieldWrapper>
                    <Label text="Repo Owner" />
                    <input
                        id="owner"
                        value={linkParams.owner}
                        onChange={handleChange}
                    />
                </FieldWrapper>
            </form>
        </PageWrapper>
    )
}
