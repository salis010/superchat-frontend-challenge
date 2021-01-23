import React, { useState } from "react"
import { PageWrapper, FieldWrapper } from "../common/elements"
import { PageTitle } from "../common/page-title"
import { Label } from "../common/label"
import { Link } from "../common/link"
import styled from "@emotion/styled"

export const LinkCreator: React.FunctionComponent = () => {
    const INVALID_URL = "Input valid 'Repo Owner' and 'Owner'"

    const [linkParams, setLinkParams] = useState({
        owner: "",
        repo: "",
        githubIcon: false,
        color: "#000000",
        backgroundColor: "#FFFFFF",
        buttonSize: "small",
    })
    const [link, setLink] = useState({
        url: INVALID_URL,
        isValidUrl: false,
    })

    const handleOnChange = (event) => {
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value

        return setLinkParams({
            ...linkParams,
            [event.target.id]: value,
        })
    }

    const handleOnBlur = () => {
        if (linkParams.owner && linkParams.repo) {
            const url = `https://api.github.com/repos/${linkParams.owner}/${linkParams.repo}`
            fetch(url).then((response) => {
                if (response.status == 200) {
                    setLink({ url, isValidUrl: true })
                } else {
                    setLink({ url: INVALID_URL, isValidUrl: false })
                }
            })
        }
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
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label text="Repo" />
                    <input
                        id="repo"
                        value={linkParams.repo}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label text="GitHub icon" />
                    <input
                        id="githubIcon"
                        checked={linkParams.githubIcon}
                        onChange={handleOnChange}
                        type="checkbox"
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label text="Text color" />
                    <input
                        type="color"
                        id="color"
                        value={linkParams.color}
                        onChange={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label text="Background color" />
                    <input
                        type="color"
                        id="backgroundColor"
                        value={linkParams.backgroundColor}
                        onChange={handleOnChange}
                    />
                </FieldWrapper>

                <Label text="Link" />
                <Link url={link.url} isValidUrl={link.isValidUrl} />
            </form>
        </PageWrapper>
    )
}
