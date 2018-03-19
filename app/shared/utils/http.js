import axios from 'axios'

export function looseFetch(url, options = {}) {
  return axios.get(url.toString(), { ...options })
    .then((response) => response)
    .catch(() => {
    })
}

export function secureDelete(url, options = {}) {
  return axios.delete(url.toString(), { ...options })
    .then((response) => response)
    .catch(e => {
      if (e.response.status === 401) {
        window.location = '/auth'
      } else {
        throw e
      }
    })
}

export function secureFetch(url, options = {}) {
  return axios.get(url.toString(), { ...options })
    .then((response) => response)
    .catch(e => {
      if (e.response.status === 401) {
        window.location = '/auth'
      } else {
        throw e
      }
    })
}

export function securePost(url, options = {}) {
  return axios.post(url.toString(), { ...options })
    .then((response) => response)
    .catch(e => {
      if (e.response.status === 401) {
        window.location = '/auth'
      } else {
        throw e
      }
    })
}

export function securePut(url, options = {}) {
  return axios.put(url.toString(), { ...options })
    .then((response) => response)
    .catch(e => {
      if (e.response.status === 401) {
        window.location = '/auth'
      } else {
        throw e
      }
    })
}
