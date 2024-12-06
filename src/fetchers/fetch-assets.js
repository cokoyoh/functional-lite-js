const { fetchClipById } = require("./fetch-clip");
const { fetchImageById } = require("./fetch-image");

const log = message => console.log(message)

const fetchers = {
  image: fetchImageById,
  clip: fetchClipById
}

const fetchAsset = async ({ ctx, id, type = 'image' }) => {
  const fetcher = fetchers[type];

  if (!fetcher) {
    throw new Error(`Fetcher of type: ${type} not found.`);
  }

  return fetcher({ ctx, id, type })
    .then(response => ({ id: response }))
    .catch(log)
}


const fetchAssets = ({ ctx, ids }) => {
  const requests = ids.map(id => fetchAsset({ ctx, id }));

  return Promise.all(requests)
}

module.exports = { fetchAssets }