const ajaxService = (term) => {
  const url = "https://api.postit.lt/?term=";
  const key = "cPdodcqFOqEeR3JgSmqZ";
  return fetch(`${url}${term}&key=${key}`).then((response) => response.json());
};

export default ajaxService;
