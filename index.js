function getFirstSelector(selector) {
  const first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  const nest = document.querySelector('#nested .target');
  return nest;
}

function increaseRankBy(n) {
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i <rank.length; i++) {
    rank[i].innerHTML = ((parseInt(rank[i].innerHTML))+n)
  }
}

function deepestChild() {

var deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length-1]
}
