export function RemoveAttributeValue(el, attr, value) {
  var re, m;
  if (el.getAttribute(attr)) {
    if (el.getAttribute(attr) == value) {
      el.removeAttribute(attr);
    } else {
      re = new RegExp('(^|\\s)' + value + '(\\s|$)');
      m = el.getAttribute(attr).match(re);
      if (m && m.length == 3) {
        el.setAttribute(attr, el.getAttribute(attr).replace(re, (m[1] && m[2])?' ':''))
      }
    }
  }
}
