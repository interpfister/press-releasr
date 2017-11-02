const updateContent = (items) => (
  {
    payload: {
      items,
    },
    type: 'UPDATE_CONTENT',
  }
);

export default updateContent;