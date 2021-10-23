/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // 图的存储，出边数组 和 入度
  let to = Array.from(new Array(numCourses), () => [])
  let indegress = new Array(numCourses).fill(0)

  for (let p of prerequisites) {
    const [end, start] = p
    to[start].push(end)
    indegress[end] += 1
  }

  // BFS
  let lessions = []
  let q = []
  // BFS 的起点是入度为 0 的课程
  for (let i = 0; i < numCourses; i++) {
    if (indegress[i] === 0) q.push(i)
  }

  while (q.length) {
    let course = q.shift()
    lessions.push(course)

    for (let preCourse of to[course]) {
      indegress[preCourse]--
      if (indegress[preCourse] === 0) {
        q.push(preCourse)
      }
    }
  }

  return lessions.length === numCourses ? lessions : []
}
