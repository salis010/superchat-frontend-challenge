import * as React from "react"
import styled from "../../styles/styled"
import Favicon from "react-favicon"
import { Card } from "./index"
import { getContributors } from "./get-contributors"
import { CONTRIBUTORS_EXAMPLES } from "../common/consts"
import { IContributor } from "../common/consts"

const CardPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem;
`

export const CardPage = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    const owner = urlParams.get("owner")
    const repo = urlParams.get("repo")

    const url = `https://api.github.com/repos/${owner}/${repo}`

    const [details, setDetails] = React.useState({
        repo: urlParams.get("repo") || "N/A",
        owner: urlParams.get("owner") || "N/A",
        description: "",
        stars: 0,
        contributors: CONTRIBUTORS_EXAMPLES,
        githubIcon: urlParams.get("githubIcon") === "true",
        color: "#" + urlParams.get("color"),
        backgroundColor: "#" + urlParams.get("backgroundColor"),
        buttonSize: urlParams.get("buttonSize") || "medium",
    })

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                getContributors(data.contributors_url)
                    .then((contributors: IContributor[]) => {
                        setDetails({
                            ...details,
                            description: data.description,
                            stars: data.stargazers_count,
                            contributors,
                        })
                    })
                    .catch((err) => console.log(err))
            )
    }, [])

    return (
        <CardPageWrapper>
            <Favicon url="../../../favicon.png" />
            <Card
                repo={details.repo}
                owner={details.owner}
                description={details.description}
                githubIcon={details.githubIcon}
                stars={details.stars}
                contributors={details.contributors}
                color={details.color}
                backgroundColor={details.backgroundColor}
                buttonSize={details.buttonSize}
            />
        </CardPageWrapper>
    )
}
