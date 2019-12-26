const axios = require("axios");

axios.get("https://api.github.com/users/EzequielBrilhante").then((resposta) => {
  console.log(resposta.data)
})