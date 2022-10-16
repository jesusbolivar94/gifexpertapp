export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=mEA5veFLE9NCgaTFg6vePIZ6gOH4B553&q=${ category }&limit=10`

    const resp = await fetch( url )
    const { data = [] } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        postUrl: img.url
    }))

    return gifs
}