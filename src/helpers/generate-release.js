import { createSelector } from 'reselect';

const generalFormValues = (state) => state.form.general.values;

const content = 'Super cool thing at {LOCATION}';

const getReleaseContent = createSelector(
    [generalFormValues],
    (values) => {
        return content.replace('{LOCATION}',values.tastingNotes);
    }
);

export default getReleaseContent;