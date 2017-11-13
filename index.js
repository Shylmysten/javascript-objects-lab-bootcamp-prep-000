var recipes = {};

// creates a function that updates an Object with a new key value
function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key]= value;
  return Object.assign({},obj, {[key]:value});
}


// creates a function that clones another object, updates and returns only the clone's data



function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
