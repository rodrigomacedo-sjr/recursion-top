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

function recFibs(n) {
  if (typeof n != "number" || isNaN(n)) {
    return "error";
  }
  if (n <= 0 || n % 1 != 0) {
    return "natural numbers only!";
  }

  return rec(n, [], 0);
}

function rec(n, l, i) {
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }
  const prev = rec(n - 1, l, i + 1);
  return [...prev, prev.at(-1) + prev.at(-2)];
}

export { fibs, recFibs };
