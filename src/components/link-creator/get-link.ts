export const getLink = (origin, linkParams) => {
    const queryParams = Object.entries(linkParams).map((param) => `${param[0]}=${param[1]}`).join('&')
    
    return `${origin}/card?` + queryParams.replace(/#/g, '')
}