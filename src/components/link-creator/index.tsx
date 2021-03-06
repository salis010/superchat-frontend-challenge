import * as React from "react"
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

    const [linkParams, setLinkParams] = React.useState({
        owner: "",
        repo: "",
        githubIcon: false,
        color: "#4267B2",
        backgroundColor: "#EEEEEE",
        buttonSize: "small",
    })
    const [link, setLink] = React.useState({
        url: INVALID_URL,
        isValidUrl: false,
    })

    React.useEffect(() => {
        origin = window.location.origin
        updateLink()
    }, [
        linkParams.githubIcon,
        linkParams.color,
        linkParams.backgroundColor,
        linkParams.buttonSize,
    ])

    const updateLink = () => {
        link.isValidUrl
            ? setLink({ ...link, url: getLink(origin, linkParams) })
            : setLink({ ...link, url: INVALID_URL })
    }

    const handleOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value

        setLinkParams({
            ...linkParams,
            [event.target.id]: value,
        })

        if (event.target.type !== "text") updateLink()
    }

    const handleOnSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setLinkParams({
            ...linkParams,
            [event.target.id]: event.target.value,
        })
    }

    const handleOnBlur = () => {
        if (linkParams.owner && linkParams.repo) {
            const url = `https://api.github.com/repos/${linkParams.owner}/${linkParams.repo}`
            fetch(url).then((response) => {
                if (response.status == 200) {
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
                        onChange={handleOnSelectChange}
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
                        stars={0}
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
