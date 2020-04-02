function setup() {
  var selectedCanvas = document.getElementById("canvasSize").value;
  switch (selectedCanvas) {
    case "phone_portrait":
      var canvasWidth = 320;
      var canvasHeight = 160;
    break;
    case "phone_landscape":
      var canvasWidth = 720;
      var canvasHeight = 160;
    break;
    case "tablet_portrait":
      var canvasWidth = 720;
      var canvasHeight = 320;
    break;
    case "tablet_landscape":
      var canvasWidth = 1440;
      var canvasHeight = 320;
    break;
    default:
      var canvasWidth = 200;
      var canvasHeight = 200;
  }
  var canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.parent('content-create-wrapper');
  background(250,250,250);
  noFill();
}

function draw() {
  clear();
  background(250,250,250);
  curveTightness(-1);
  var q = [16.0,27.0];
  var w = [48.0,27.0];
  var e = [80.0,27.0];
  var r = [112.0,27.0];
  var t = [144.0,27.0];
  var y = [176.0,27.0];
  var u = [208.0,27.0];
  var i = [240.0,27.0];
  var o = [272.0,27.0];
  var p = [304.0,27.0];
  var a = [32.0,81.0];
  var s = [64.0,81.0];
  var d = [96.0,81.0];
  var f = [128.0,81.0];
  var g = [160.0,81.0];
  var h = [192.0,81.0];
  var j = [224.0,81.0];
  var k = [256.0,81.0];
  var l = [288.0,81.0];
  var z = [64.0,135.0];
  var x = [96.0,135.0];
  var c = [128.0,135.0];
  var v = [160.0,135.0];
  var b = [192.0,135.0];
  var n = [224.0,135.0];
  var m = [256.0,135.0];
  
  let kbMap = new Map();
  kbMap.set('q', q); 
  kbMap.set('w', w);
  kbMap.set('e', e);
  kbMap.set('r', r);
  kbMap.set('t', t);
  kbMap.set('y', y);
  kbMap.set('u', u);
  kbMap.set('i', i);
  kbMap.set('o', o);
  kbMap.set('p', p);
  kbMap.set('a', a);
  kbMap.set('s', s);
  kbMap.set('d', d);
  kbMap.set('f', f);
  kbMap.set('g', g);
  kbMap.set('h', h);
  kbMap.set('j', j);
  kbMap.set('k', k);
  kbMap.set('l', l);
  kbMap.set('z', z);
  kbMap.set('x', x);
  kbMap.set('c', c);
  kbMap.set('v', v);
  kbMap.set('b', b);
  kbMap.set('n', n);
  kbMap.set('m', m);

  var word = document.getElementById("word").value;;
  //curve(x1,y1,x2,y2,x3,y3,x4,y4)
  //x1,y1 are the coordinates of the last letter of the previous word (or the coordinates of the first letter if this is the first letter)
  //x2,y2 are the coordinates of the first letter
  //x3,y3 are the coordinates of the second letter
  //x4,y4 are the coordinates of the first letter of the next word (or the coordinates of the second letter if this is the last letter)
  
  if (word.length == 0) {
    clear();
    background(250,250,250);
  }  
  
  if (word.length == 1) {
    strokeWeight(8.0);
    point(kbMap.get(word.charAt(0).toLowerCase())[0],kbMap.get(word.charAt(0).toLowerCase())[1]);
  }
 
  if (word.length == 2) {
    strokeWeight(6.0);
    curve(kbMap.get((word.charAt(0).toLowerCase()))[0],kbMap.get((word.charAt(0).toLowerCase()))[1], kbMap.get((word.charAt(0).toLowerCase()))[0],kbMap.get((word.charAt(0).toLowerCase()))[1], 
          kbMap.get((word.charAt(1).toLowerCase()))[0],kbMap.get((word.charAt(1).toLowerCase()))[1], kbMap.get((word.charAt(1).toLowerCase()))[0],kbMap.get((word.charAt(1).toLowerCase()))[1]);
  } else {
    for (j = 0; j < word.length-1; j++) {
      if (j == 0) {
        strokeWeight(6.0-(((6.0-3.0)/(word.length-2))*j));
        curve(kbMap.get((word.charAt(j).toLowerCase()))[0],kbMap.get((word.charAt(j).toLowerCase()))[1], kbMap.get((word.charAt(j).toLowerCase()))[0],kbMap.get((word.charAt(j).toLowerCase()))[1], 
              kbMap.get((word.charAt(j+1).toLowerCase()))[0],kbMap.get((word.charAt(j+1).toLowerCase()))[1], kbMap.get((word.charAt(j+2).toLowerCase()))[0],kbMap.get((word.charAt(j+2).toLowerCase()))[1]);
      } else if (j == (word.length-2)) {
        strokeWeight(6.0-(((6.0-3.0)/(word.length-2))*j));
        curve(kbMap.get((word.charAt(j-1).toLowerCase()))[0],kbMap.get((word.charAt(j-1).toLowerCase()))[1], kbMap.get((word.charAt(j).toLowerCase()))[0],kbMap.get((word.charAt(j).toLowerCase()))[1], 
              kbMap.get((word.charAt(j+1).toLowerCase()))[0],kbMap.get((word.charAt(j+1).toLowerCase()))[1], kbMap.get((word.charAt(j+1).toLowerCase()))[0],kbMap.get((word.charAt(j+1).toLowerCase()))[1]);
      } else {
        strokeWeight(6.0-(((6.0-3.0)/(word.length-2))*j));
        curve(kbMap.get((word.charAt(j-1).toLowerCase()))[0],kbMap.get((word.charAt(j-1).toLowerCase()))[1], kbMap.get((word.charAt(j).toLowerCase()))[0],kbMap.get((word.charAt(j).toLowerCase()))[1], 
              kbMap.get((word.charAt(j+1).toLowerCase()))[0],kbMap.get((word.charAt(j+1).toLowerCase()))[1], kbMap.get((word.charAt(j+2).toLowerCase()))[0],kbMap.get((word.charAt(j+2).toLowerCase()))[1]);
      }
    }
  }
}
