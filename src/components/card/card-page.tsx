import React, { useState, useEffect } from "react"
import { Card } from "./index"
import { getContributors } from "./get-contributors"

export const CardPage = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    const owner = urlParams.get("owner")
    const repo = urlParams.get("repo")

    const url = `https://api.github.com/repos/${owner}/${repo}`

    const [details, setDetails] = useState({
        repo: urlParams.get("repo"),
        owner: urlParams.get("owner"),
        description: "",
        stars: 0,
        contributors: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
        githubIcon: urlParams.get("githubIcon") === "true",
        color: "#" + urlParams.get("color"),
        backgroundColor: "#" + urlParams.get("backgroundColor"),
        buttonSize: urlParams.get("buttonSize"),
    })

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                getContributors(data.contributors_url).then((contributors) => {
                    setDetails({
                        ...details,
                        description: data.description,
                        stars: data.stargazers_count,
                        contributors: contributors,
                    })
                })
            )
    }, [])

    return (
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
    )
}
