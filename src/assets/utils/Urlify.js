function toUrl(name) {
  return name.trim().replace(/ /g, '_');
}

function fromUrl(url) {
  return url.replace(/_/g, ' ');
}
export { toUrl, fromUrl };
