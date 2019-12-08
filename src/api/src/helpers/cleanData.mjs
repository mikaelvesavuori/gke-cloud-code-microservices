export function cleanData(data) {
  console.log("|||| DATA ||||", typeof data, data);
  const BODY = data.body ? data.body : "No content fetched";

  return BODY;
}
