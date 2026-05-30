function merge(v) {
  if (!Array.isArray(v)) {
    return "error";
  }
  if (v.length <= 0) {
    return "error"
  }
  return 1;
}

export default merge;
