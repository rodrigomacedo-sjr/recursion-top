function merge(v) {
  if (!Array.isArray(v)) {
    return "error";
  }
  if (v.length < 0) {
    return "error";
  }
  if (v.length == 1 || v.length == 0) {
    return v;
  }

  let [a, b] = recSplit(v);
  a = merge(a);
  b = merge(b);
  return recSort(a, b);
}

function recSplit(v) {
  const half = v.length / 2;
  let l = [];
  let r = [];
  for (let i = 0; i < v.length; ++i) {
    if (i < half) {
      l.push(v[i]);
    } else {
      r.push(v[i]);
    }
  }
  return [l, r];
}

function recSort(a, b) {
  const out = [];
  let [i, j] = [0, 0];
  while (i < a.length && j < b.length) {
    if (!b || a[i] <= b[j]) {
      out.push(a[i]);
      ++i;
    } else if (!a || a[i] > b[j]) {
      out.push(b[j]);
      ++j;
    }
  }

  while (i < a.length) {
    out.push(a[i]);
    ++i;
  }

  while (j < b.length) {
    out.push(b[j]);
    ++j;
  }
  return out;
}

export default merge;
