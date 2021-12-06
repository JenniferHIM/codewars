// You have the radius of a circle with the center in point (0,0).

// Write a function that calculates the number of points in the circle where (x,y) - the cartesian coordinates of the points - are integers.

// Example: for radius = 2 the result should be 13.

// 0 <= radius <= 1000

function pointsNumber(radius){
  // your code...
  let points = 0;
  for(let i = -radius; i <= radius; i++) {
     for (let j= -radius; j <= radius; j++){
      if (i * i + j * j <= radius * radius) {
        points++
        }
    }
  }
  return points;
}

or

function pointsNumber(r) {
  let count = 0;
  for (let x = 0; x <= r; x++)
    count += Math.floor(Math.sqrt(r * r - x * x));
  return 4 * count + 1;
}

or

function pointsNumber(radius){
  let sum=0;
  for(let i=-radius;i<=radius;i++){
    for(let j=radius;j>=-radius;j--){
      let distance = Math.sqrt(Math.pow(i,2)+Math.pow(j,2));
      if(distance<=radius){
        sum++;
      }
    }
  }
    return sum;
}

pointsNumber(1000);