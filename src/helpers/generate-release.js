import { createSelector } from 'reselect';
import { STATES } from 'us';

const generalFormValues = (state) => state.form.general && state.form.general.values;
const releaseContent = (state) => state.content.body;

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
  [generalFormValues, releaseContent],
  (values, content) => {
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