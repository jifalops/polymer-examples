function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function nl2br(text) {
  return text.replace(/\r?\n/g, "<br/>");
}

/**
 * The last specified data-<name> attribute is placed as a property on the element,
 * e.g. element.dataName. Other data-<name> attributes are placed inside the dataset
 * property, e.g. element.dataset.<name>. Why????
 */
function findDataArg(el, name) {
  var arg = el['data' + name.charAt(0).toUpperCase() + name.slice(1)];
  if (arg === undefined) arg = el.dataset[name];
  return arg;
}
