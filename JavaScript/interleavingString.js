// Description
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// My Solution
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const combined = (a, s, d) => {
    if (d === s3.length) return true;

    if (a === s1.length && s === s2.length) {
      return d === s3.length;
    }

    return (
      (s1[a] === s3[d] && combined(a + 1, s, d + 1)) ||
      (s2[s] === s3[d] && combined(a, s + 1, d + 1))
    );
  };

  return combined(0, 0, 0);
};
