/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = new Map()

  for (let cp of cpdomains) {
    let [nums, url] = cp.split(/\s+/)
    let domains = url.split('.')

    let len = domains.length

    for (let i = 0; i < len; i++) {
      let domain = [...domains]
        .reverse()
        .slice(0, i + 1)
        .reverse()
        .join('.')

      if (map.has(domain)) {
        map.set(domain, Number(map.get(domain)) + Number(nums))
      } else {
        map.set(domain, Number(nums))
      }
    }
  }

  let ans = []

  for (let [key, value] of map) {
    ans.push(`${value} ${key}`)
  }

  return ans
}
