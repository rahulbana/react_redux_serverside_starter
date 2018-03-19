import URI from 'urijs'
 
const API_ROOT = ''

function getResourceBase(base, resource, extras = []) {
  return new URI(`${base}/${[resource, ...extras.filter(extra => extra !== null)].join('/')}`)
}

function getResourceURL(resource, extras) {
  return getResourceBase(API_ROOT, resource, extras)
}
