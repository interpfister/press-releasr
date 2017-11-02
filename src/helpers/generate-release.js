import { createSelector } from 'reselect';
import moment from 'moment';
import { STATES } from 'us';
import formDateFormat from './date-format';

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

const replaceDayDate = (content, values) => {
  const displayFormat = "dddd, MMMM Do";
  const key = "DATE";
  return values[key] ? content.replace(createRegex("DAY_DATE"), moment(values[key], formDateFormat).format(displayFormat)) : content;
}

const replaceRegular = (content, values) => {
  return Object.keys(values).reduce((modifiedContent, key) => {
    return modifiedContent.replace(createRegex(key), values[key]);
  }, content);
}

const replaceUpperCase = (content, values) => {
  return Object.keys(values).reduce((modifiedContent, key) => {
    return modifiedContent.replace(createRegex(`${key}_UPPER_CASE`), values[key].toUpperCase());
  }, content);
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
      const funcs = [replaceRegular, replaceUpperCase, replaceAPAbbr, replaceDayDate];
      return funcs.reduce((modifiedContent, func) => {
        return func(modifiedContent, values);
      }, content);
    } else {
      return "You need to enter fields on the first page.";
    }
  }
);

export default getReleaseContent;