import { createSelector } from 'reselect';

const generalFormValues = (state) => state.form.general && state.form.general.values;
const releaseContent = (state) => state.content.body;

const getReleaseContent = createSelector(
  [generalFormValues, releaseContent],
  (values, content) => {
    if(values && content) {
      let modifiedContent = content;
      Object.keys(values).forEach((key) => {
        modifiedContent= modifiedContent.replace(`{${key}}`, values[key]);
      });
      return modifiedContent;
    } else {
      return "You need to enter fields on the first page.";
    }
  }
);

export default getReleaseContent;