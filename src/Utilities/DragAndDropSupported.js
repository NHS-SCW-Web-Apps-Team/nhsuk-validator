export  function DragAndDropSupported() {
  var div = document.createElement('div');
  return typeof div.ondrop != 'undefined';
};
