import { createSelector } from 'reselect';

const getItems = (state) => state.content.items;

const getEventTypes = createSelector(
  [getItems],
  (items) => {
    return items.map((item) => item.fields.eventType);
  }
);

export default getEventTypes;
