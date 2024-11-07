// Load environment variables from the .env file
require("dotenv").config();

const ajaxService = (term) => {
  const url = "https://api.postit.lt/?term=";
  const key = process.env.API_KEY;
  return fetch(`${url}${term}&key=${key}`).then((response) => response.json());
};

export default ajaxService;
