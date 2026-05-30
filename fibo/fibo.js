function fibs(n) {
  if (typeof n != "number" || isNaN(n)) {
    return "error";
  }
  if (n <= 0 || n % 1 != 0) {
    return "natural numbers only!";
  }

  let ans = [0];

  if (n == 1) {
    return ans;
  }
  ans.push(1);

  for (let i = 2; i < n; ++i) {
    ans.push(ans[i - 1] + ans[i - 2]);
  }

  return ans;
}

export default fibs;
