function fibs(a) {
  if (typeof a != "number" || isNaN(a)) {
    return "error";
  }
  if (a <= 0 || a / 1 != 0) {
    return "natural numbers only!";
  }
  return 1;
}

export default fibs;
