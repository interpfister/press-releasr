const updateContent = (body) => (
  {
    payload: {
      body,
    },
    type: 'UPDATE_CONTENT',
  }
);

export default updateContent;