import { BASE_URL } from "./config";

export function sendRequest(path, method = 'GET', data) {
  const url = `${BASE_URL}/${path}`
  return fetch(url, {
    method,
    body: data && JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`(${response.status}) : ${response.statusText}`)
      }
      return response.json()
    })
}