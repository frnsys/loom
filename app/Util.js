function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}

function ewma(prevMean, val, alpha=0.8) {
  return prevMean + (alpha * (val - prevMean));
}

function manhattanDistance(coord_a, coord_b) {
  return Math.abs(coord_a.x - coord_b.x) + Math.abs(coord_a.y - coord_b.y);
}

export default {
  uuid: uuid,
  ewma: ewma,
  manhattanDistance: manhattanDistance
};

