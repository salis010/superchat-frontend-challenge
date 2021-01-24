export interface IContributor {
    rank: number
    login: string
    contributions: number
}

export const CONTRIBUTORS_EXAMPLES: IContributor[] = [
    { rank: 1, login: "Mr Example A", contributions: 300 },
    { rank: 2, login: "Mr Example B", contributions: 200 },
    { rank: 3, login: "Mr Example C", contributions: 100 },
]
