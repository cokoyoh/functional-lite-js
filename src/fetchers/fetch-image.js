const fetchImageById = async ({ ctx, id }) => {
  console.log({ ctx });

  return {
    id,
    type: 'image',
    name: 'foo',
  };
};

module.exports = { fetchImageById };
