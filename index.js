function getFirstSelector(selector) {
  const first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  const nest = document.querySelector('#nested .target');
  return nest;
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list');
  for (let i = 0; i <rank.length -1; i++) {
    var num = parseInt(rank[i].innerHTML + n);
  }
}

function deepestChild(array, stuff) {

let a = array
let b = []

  while (a)
    if (stuff(a)) {
      return a
    }

    if (Array.isArray(a)) {
      for (let i = 0; i < current.length; i++) {
        nest.push(current[i])
      }
    }
  a = next.shift()
}

