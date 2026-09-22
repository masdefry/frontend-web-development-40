import axios from "axios";
import type { CreateBookRequest } from "../../features/create-book/validations/createBookSchema";

export const createBookApi = async ({title, isbn, author, imageUrl}: CreateBookRequest) => {
  await axios.post(
    'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Books',
    { title, isbn, author, imageUrl },
  );
};


