const fetchClipById = ({ ctx, id }) => {
  cconsole.log({ ctx });

  return {
    id,
    name: 'foo',
  }
}

module.exports = { fetchClipById }
