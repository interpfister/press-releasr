import { createSelector } from 'reselect';
import { STATES } from 'us';

const generalFormValues = (state) => state.form.general && state.form.general.values;
const getSelectedEventType = (state) => state.form.eventType && state.form.eventType.values && state.form.eventType.values.EVENT_TYPE;
const getItems = (state) => state.content.items;

const createRegex = (key) => {
  return new RegExp(`{${key}}`, "ig");
}

const replaceAPAbbr = (content, values) => {
  const key = "STATE";
  return values[key] ? content.replace(createRegex("STATE_AP"), STATES.find((state) => state.name === values[key]).ap_abbr) : content;
}

const replaceRegular = (content, values) => {
  let modifiedContent = content;
  Object.keys(values).forEach((key) => {
    modifiedContent = modifiedContent.replace(createRegex(key), values[key]);
  });
  return modifiedContent;
}

const replaceUpperCase = (content, values) => {
  let modifiedContent = content;
  Object.keys(values).forEach((key) => {
    modifiedContent = modifiedContent.replace(createRegex(`${key}_UPPER_CASE`), values[key].toUpperCase());
  });
  return modifiedContent;
}

const getReleaseContent = createSelector(
  [generalFormValues, getItems, getSelectedEventType],
  (values, items, eventType) => {
    if(!eventType) {
      return "You must select an event type on the first page.";
    }
    const item = items.find((item) => item.fields.eventType === eventType);
    const content = item.fields.body;
    if(values && content) {
      let modifiedContent = content;
      modifiedContent = replaceRegular(modifiedContent, values);
      modifiedContent = replaceUpperCase(modifiedContent, values);
      modifiedContent = replaceAPAbbr(modifiedContent, values);
      
      return modifiedContent;
    } else {
      return "You need to enter fields on the first page.";
    }
  }
);

export default getReleaseContent;