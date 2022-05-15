import { BASE_URL } from "./config";

export function sendRequest(path) {
  const url = `${BASE_URL}/${path}`
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`(${response.status}) : ${response.statusText}`)
      }
      return response.json()
    })
}