const fetchImageById = async ({ ctx, id }) => {
  console.log({ ctx });

  return {
    id,
    name: 'foo',
  };
};

module.exports = { fetchImageById };
