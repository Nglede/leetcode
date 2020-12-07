/**
 * @param {string[]} s
 // * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    let right = s.length-1, left = 0
    for (; left <= right; left++, right--) {
        [s[left], s[right]] = [s[right], s[left]]
    }

    return s
}

export default reverseString;
