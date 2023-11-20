async function createShortUrl(longUrl){
    const apikey = "019909a039dd464c94077e57fca5d4bc";
    const apiUrl = `https://api.rebrandly.com/v1/links/new?apikey=${apikey}&destination=${encodeURIComponent(longUrl)}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.shortUrl;
    } catch (error) {
        throw new Error('There was an error with the request:', error);
    }
}

export default createShortUrl;