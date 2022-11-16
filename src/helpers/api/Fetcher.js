export const Fetcher = ({url, data, setData, isLoading, setIsLoading}) => {    
    fetch(url)
    .then(res => res.json())
    .then(json => setData(json))

    setIsLoading(false)
    return { isLoading, data }
}

