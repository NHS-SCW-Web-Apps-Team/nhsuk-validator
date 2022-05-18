export function FileApiSupported() {
  var input = document.createElement('input');
  input.type = 'file';
  return typeof input.files != 'undefined';
};
