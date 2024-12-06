const fetchClipById = async ({ ctx, id }) => {
  console.log({ ctx });

  return {
    id,
    type: 'clip',
    name: 'foo',
  }
}

module.exports = { fetchClipById }
