import React, { useState } from "react"
import { PageWrapper, FieldWrapper } from "../common/elements"
import { PageTitle } from "../common/page-title"
import { Label } from "../common/label"
import { Link } from "../common/link"
import styled from "@emotion/styled"

const H1 = styled.h1`
    color: red;
`

export const LinkCreator: React.FunctionComponent = () => {
    const [linkParams, setLinkParams] = useState({
        owner: "",
        repo: "",
        githubIcon: false,
        color: "#000000",
        backgroundColor: "#FFFFFF",
        buttonSize: "small",
    })
    const [link, setLink] = useState({
        url: "Input valid 'Repo Owner' and 'Owner'",
        isValidUrl: false,
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
                <FieldWrapper>
                    <Label text="Repo" />
                    <input
                        id="repo"
                        value={linkParams.owner}
                        onChange={handleChange}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label text="GitHub icon" />
                    <input
                        id="githubIcon"
                        checked={linkParams.githubIcon}
                        onChange={handleChange}
                        type="checkbox"
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label text="Text color" />
                    <input
                        type="color"
                        id="color"
                        value={linkParams.color}
                        onChange={handleChange}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label text="Background color" />
                    <input
                        type="color"
                        id="backgroundColor"
                        value={linkParams.backgroundColor}
                        onChange={handleChange}
                    />
                </FieldWrapper>

                <Label text="Link" />
                <Link url={link.url} isValidUrl={link.isValidUrl} />
            </form>
        </PageWrapper>
    )
}
