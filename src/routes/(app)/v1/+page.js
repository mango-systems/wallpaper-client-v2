export const load = ({ fetch, params }) => {
    
    async function fetchData(fetchurl){
        console.log("from +page.js: " + fetchurl)
    }
    return {
        channelFetchedData: fetchData(decodeURIComponent(params.fetchurl))
    }
};