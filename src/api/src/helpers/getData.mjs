import fetch from "node-fetch";

export async function getData(url) {
  return await fetch(url)
    .then(async res => await res.json())
    .then(res => {
      console.log("|||| RESPONSE ||||", typeof res, res);
      return JSON.parse(res);
    })
    .catch(error => {
      console.error("|||| ERROR ||||", error);
      throw new Error("|||| ERROR ||||", error);
    });
}
