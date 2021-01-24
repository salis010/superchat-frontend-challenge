import React, { useState, useEffect } from "react"
import { PageWrapper, FieldWrapper, H2 } from "../common/elements"
import { getLink } from "./get-link"
import { PageTitle } from "../common/page-title"
import { Label } from "../common/label"
import { Link } from "../common/link"
import { Card } from "../card/index"
import { CONTRIBUTORS_EXAMPLES } from "../common/consts"

export const LinkCreator: React.FunctionComponent = () => {
    const INVALID_URL = "Input valid 'Repo Owner' and 'Owner'"
    let origin = ""

    const [linkParams, setLinkParams] = useState({
        owner: "apache",
        repo: "superset",
        githubIcon: false,
        color: "#000000",
        backgroundColor: "#FFFFFF",
        buttonSize: "small",
    })
    const [link, setLink] = useState({
        url: INVALID_URL,
        isValidUrl: false,
    })

    useEffect(() => {
        origin = window.location.origin
        updateLink()
    }, [linkParams])

    const updateLink = () => {
        if (linkParams.owner && linkParams.repo) {
            const url = `https://api.github.com/repos/${linkParams.owner}/${linkParams.repo}`
            fetch(url).then((response) => {
                if (response.status == 200) {
                    let contributors
                    setLink({
                        url: getLink(origin, linkParams),
                        isValidUrl: true,
                    })
                } else {
                    setLink({ url: INVALID_URL, isValidUrl: false })
                }
            })
        }
    }

    const handleOnChange = (event) => {
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value

        setLinkParams({
            ...linkParams,
            [event.target.id]: value,
        })

        updateLink()
    }

    const handleOnBlur = () => {
        updateLink()
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
                <FieldWrapper>
                    <Label text="Button size" />
                    <select
                        id="buttonSize"
                        value={linkParams.buttonSize}
                        onChange={handleOnChange}
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </FieldWrapper>

                <Label text="Link" />
                <Link url={link.url} isValidUrl={link.isValidUrl} />
            </form>
            {link.isValidUrl && (
                <>
                    <H2>Card Preview</H2>
                    <Card
                        repo={linkParams.repo}
                        owner={linkParams.owner}
                        githubIcon={linkParams.githubIcon}
                        description="To be provided"
                        stars={666}
                        contributors={CONTRIBUTORS_EXAMPLES}
                        buttonSize={linkParams.buttonSize}
                        color={linkParams.color}
                        backgroundColor={linkParams.backgroundColor}
                    />
                </>
            )}
        </PageWrapper>
    )
}
