export const Fetcher = ({data, setData, isLoading, setIsLoading}) => {    
    fetch('https://beta.haromstudio.hu/scriptedprod/wp-json/wp/v2/posts')
    .then(res => res.json())
    .then(json => setData(json))

    setIsLoading(false)
    return { isLoading, data }
}

