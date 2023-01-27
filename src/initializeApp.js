import axios from 'axios';

const newApp = async () => {
  const id = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
  );
  return id;
};

export default newApp;
