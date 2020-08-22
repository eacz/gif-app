export const getGifs = async (category) => {
    const apiKey = '7Q6AJRVzL0zg38gCvD0SgdJmVCitOo1u';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
    }));

    return gifs;
}