const { fetchAssets } = require("./fetch-assets");

const ids = [1, 22, 34, 45, 2, 444];

fetchAssets({ ctx: 'context', ids })
  .then(response => {
    console.log(response);
    return response
  })
  .catch(console.log)

