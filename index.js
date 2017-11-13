var recipes = {};

// creates a function that updates an Object with a new key value

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key]= value;
  return obj;
}

// creates a function that clones another object and returns the clone's data

function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.Assign({}, obj, {[key]:value})
}
