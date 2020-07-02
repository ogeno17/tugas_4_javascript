var t1 = 185;
var t2 = 175;
var t3 = 195;

if (t1 > t2) {
  if (t3 > t1) {
    console.log(t3, t1, t2);
  } else if (t3 < t2) {
    console.log(t1, t2, t3);
  } else {
    console.log(t1, t3, t2);
  }
} else if (t2 > t1) {
  if (t3 > t2) {
    console.log(t3, t2, t1);
  } else if (t3 < t1) {
    console.log(t2, t1, t3);
  } else {
    console.log(t2, t3, t2);
  }
}
