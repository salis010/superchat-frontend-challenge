const sortData = (data) => data.sort((a, b) => b.contributions - a.contributions)

const filterData = (data, fieldNames) => 
    data.map((item, i) => ({rank: i + 1, [fieldNames[0]]: item[fieldNames[0]], [fieldNames[1]]: item[fieldNames[1]] }))

const getTopN = (data, n) => data.slice(0, n)

export const getContributors = (url) => {

    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if(response.status == 200) {
                    response.json()
                        .then(data => sortData(data))
                        .then(data => filterData(data, ["login", "contributions"]))
                        .then(data => getTopN(data, 10))
                        .then(data => resolve(data))
                } else {
                    reject("error in getting contributors")
                }
            })
        })
    }