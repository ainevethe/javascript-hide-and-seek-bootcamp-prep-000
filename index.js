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
