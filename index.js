var recipes = {};

// creates a function that clones another object, updates and returns both the
// clone with the update and the unchanged originals data.
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({},obj, {[key]:value})
}

// creates a function that destructively updates an object with a new key/value pair

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
