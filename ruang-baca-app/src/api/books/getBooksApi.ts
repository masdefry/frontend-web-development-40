import axios from 'axios';

export const getBooksApi = async () => {
  const res = await axios.get(
    'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Books',
  );

  return res?.data;

//   res.data / res.data.data / res.data.response.data
};
