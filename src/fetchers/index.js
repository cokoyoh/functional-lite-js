const { fetchAssets } = require("./fetch-assets");

const ids = [98, 652, 34, 45, 2, 444];

fetchAssets({ ctx: 'context', ids, type: 'image' })
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(console.log)

fetchAssets({ ctx: 'context', ids, type: 'clip' })
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(console.log)

