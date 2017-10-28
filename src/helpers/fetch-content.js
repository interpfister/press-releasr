import { createClient } from 'contentful';
import updateContent from '../modules/content-action';

const SPACE_ID = '15234xbqzf63'
const ACCESS_TOKEN = '79d180df8c8593be32c667e507b4e5378ebdfa830e3ed5ac066c0da5ec6bf553'

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

const fetchContent = () => {
    return async (dispatch) => {
      const response = await client.getEntries();
      if(!response ||
          !response.items ||
          response.items.length < 1 ||
          !response.items[0].fields ||
          !response.items[0].fields.body) {
          throw new Error('No content received from contentful');
      }
      dispatch(updateContent(response.items[0].fields.body));
    }
};

export default fetchContent;