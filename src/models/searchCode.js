import ajaxService from "./ajaxService";

const searchCode = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = document.querySelector(".term").value;

    const cachedPostalCode = localStorage.getItem(searchTerm);

    if (cachedPostalCode) {
      document.querySelector(".result").value = cachedPostalCode;
    } else {
      ajaxService(searchTerm)
        .then((result) => {
          if (
            result &&
            result.status === "success" &&
            result.success &&
            result.data.length > 0
          ) {
            const postalCode = result.data[0].post_code;
            localStorage.setItem(searchTerm, postalCode);
            document.querySelector(".result").value = postalCode;
          } else {
            document.querySelector(".result").value = "No post code found";
          }
        })
        .catch((error) => {
          console.error("Error fetching postal code:", error);
          document.querySelector(".result").value =
            "Error fetching postal code";
        });
    }
  });
};

export default searchCode;
