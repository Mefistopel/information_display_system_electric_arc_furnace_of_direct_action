
    var canvas = this.__canvas = new fabric.Canvas('canvas');
    fabric.Object.prototype.transparentCorners = false;




    //котлован
     var furnace = new fabric.Path('M 0 0 L 0 250 Q 170, 390, 340, 250 L 340 0 L 360 0 L 360 250 Q 170 430 -20 250 L -20 0 L 360 0 z', { fill: '#800000', stroke: 'black' });
        furnace.set({ left: 100, top: 150,     selectable: false });
    //печь
     var furnace1 = new fabric.Path('M 0 0 L 0 380 L 420 380 L 420 0 L 400 0 L 400 270 Q 200 450 21 269 L 21 0  L 400 0 L 400 21  L 21 21 L 21 0 z', { fill: 'black', stroke: 'black' });
        furnace1.set({ left: 80, top: 130,     selectable: false });
     canvas.add(  furnace, furnace1 );

    var candle = []; //свечи
    var torch = []; //факелы
    for (var i=0; i<3; i++){
       candle[i] = new fabric.Path('M 0 0 L 0 150 Q 10, 170, 20, 150 L 20 0 z', {
        fill: '#696969', stroke: '' });
         candle[i].set({
          left: 160+i*110,
          top: 50,
          selectable: false });
        torch[i] = new fabric.Path('M 0 0 L 0 10 Q 10, 50, 20, 10 L 20 0 z', {
         fill: '#00BFFF', stroke: '#FFE4E1'            });
          torch[i].set({
          left: 160+i*110,
          top: 200,
          selectable: false });
      canvas.add(candle[i]);
     }
    //         var block = new fabric.Path('M 0 0 L 190 0 L 190 105 L 0 105 z', {fill: '', stroke: 'blue'});
    //           block.set({
    //                left: 410,
    //                top: 20,
    //                selectable: false });
    var text = new fabric.Text('Cтатус:', { left: 425, top: 25, fontSize: 18, selectable: false });
    var text2 = new fabric.Text('Температура:', { left: 425, top: 50, fontSize: 18, selectable: false });
    var text3 = new fabric.Text('Вес:', { left: 425, top: 75, fontSize: 18, selectable: false });
    var text4 = new fabric.Text('Время работы:', { left: 425, top: 100, fontSize: 18, selectable: false });

    canvas.add( text, text2, text3, text4);

    var condition;
       condition =  new fabric.Text('Не активно', { left: 490, top: 25, fontSize: 18, selectable: false });canvas.add(condition);
    var weight;
       weight = new fabric.Text('0' + ' т.', { left: 470, top: 75, fontSize: 18, selectable: false });canvas.add(weight);
    var temp;
       temp = new fabric.Text('18' +' °t', { left: 540, top: 50, fontSize: 18, selectable: false });canvas.add(temp);
    var sec;
       sec = new fabric.Text('0' + ' cек.', { left: 540, top: 100, fontSize: 18, selectable: false });canvas.add(sec);
     function texti(a, b){
         canvas.remove(temp, sec);
         temp = new fabric.Text(a + ' °t', { left: 540, top: 50, fontSize: 18, selectable: false });canvas.add(temp);
         sec = new fabric.Text(b + ' cек.', { left: 540, top: 100, fontSize: 18, selectable: false });canvas.add(sec);
       }
       function rewrite(){
         canvas.remove(furnace, furnace1);
         canvas.add(  furnace, furnace1 );
         for (var i=0; i<3; i++){
          canvas.remove(  candle[i])
          canvas.add( candle[i]);}
  }


function patternRunOne()
       {
         window.metal_one_kind = new Array(); window.metal_two_kind = new Array(); var z, s,x; window.even = true;
      var clonedStartPoints = [];
      window.polygon = [];
      window.startPoints = [
         {x: 0, y: 0}, //
         {x: 0, y: 20},//
         {x: 10, y: 20},
         {x: 20, y: 20},
         {x: 30, y: 20},
         {x: 40, y: 20},//
         {x: 40, y: 0}//
       ];
      window.endPoints = [
         {x: -20, y: 30}, //
         {x: -20, y: 70}, //
         {x: 0, y: 80},
         {x: 20, y: 80},
         {x: 30, y: 80},
         {x: 40, y: 70}, //
         {x: 40, y: 30} //

       ];
clonedStartPoints = startPoints.map(function(o){ //функция клонирования свойств объекта
     return fabric.util.object.clone(o);
   });

  for (s = 0; s<5; s++){
    polygon[s] = new fabric.Polygon(clonedStartPoints, { //фигура и её свойства
     left: 175+s*50,
     top: 235+ 4.4 * 40,
     angle: fabric.util.getRandomInt(-60, 30),
     fill: 'rgba(128,0,0,0.8)',
     selectable: false
   });
        canvas.add( polygon[s]);
  }



  for (var i=0; i<9; i++){

    metal_one_kind[i] = new Array();
    metal_two_kind[i] = new Array();
   for (var j=0; j<4; j++){

    if (j !=3  ){ //только один сдвиг по топу будет, т.к. больше и не нужно
   z = j;
  }
  else { z = 2;}


   metal_one_kind[i][j] = new fabric.Path('M 0 0 L 0 20 L 40, 20 L 40 0 z', {
             fill: 'rgba(128,0,0,0.8)' });
             metal_one_kind[i][j].set({
               left: 125+i*37,
               top: 285+44+z* 44 ,
               angle: fabric.util.getRandomInt(-60, 30),
               selectable: false });
             metal_two_kind[i][j] = new fabric.Circle({
               radius: 11,
               fill: 'rgba(128,0,0,0.8)',
               left: fabric.util.getRandomInt(125, 350),
               top: 285+44+z * fabric.util.getRandomInt(20, 36),
              selectable: false
         });

 canvas.add(  metal_one_kind[i][j], metal_two_kind[i][j]);
  }}
  rewrite();
       }


 function patternRunSecond(){ //кнопка 2
   window.stop = 3;
   for (var i=0; i<3; i++){ //здесь включаются свечи
    canvas.remove(  torch[i])
    canvas.add( torch[i]);
    candle[i].set('stroke', '#00BFFF')}
    rewrite();
    polygon[1].animate('angle',0,{onChange: canvas.renderAll.bind(canvas)});
    polygon[2].animate('angle',0,{onChange: canvas.renderAll.bind(canvas)});
    polygon[3].animate('angle',0,{onChange: canvas.renderAll.bind(canvas)});

   function animatePoint(r, prop, endPoints) { // функция анимирования плавки металла
    fabric.util.animate({
      startValue: polygon[1].points[r][prop],
      endValue: endPoints[r][prop],
      duration: 5000,
      onChange: function(value) {

        polygon[1].points[r][prop] = value;
        // only render once
        if (r === startPoints.length - 1 && prop === 'y') {canvas.renderAll();}
      },
      onComplete: function() {
       if ( r==3 && prop=='y'){
            polygon1 = new fabric.Polygon(clonedStartPoints1, { //фигура и её свойства
            left: 125,
            top: 440,
            selectable: false
          });
        polygon1.setGradient('fill', {
         x1: 0,
         y1: 0,
         x2: polygon1.width ,
         y2: polygon1.width,
         colorStops: {
           0: "orange",
           0.2: "red",
           0.4: "yellow",
           0.5: "red",
           0.7: "orange",
           1: "red"
         }
       });
        canvas.add(polygon1);
        animate1();
        rewrite();
        }

        polygon[1].setCoords();
        // only start animation once

      }
    });
  }
 rewrite();
  function animate() {
    for (var r = 0, len = startPoints.length; r < len; r++) {
      animatePoint(r, 'x', true ? endPoints : startPoints);
      animatePoint(r, 'y', true ? endPoints : startPoints);
    }
  }

  setTimeout(animate, 1000);

 var startPoints1 = [
    {x: 0, y: 0}, //0
    {x: 36, y:0 },
    {x: 72, y:0 },
    {x: 108, y:0 },
    {x: 144, y:0 }, //4
    {x: 180, y: 0},
    {x: 216, y:0 },
    {x: 252, y:0 },
    {x: 288, y:0 }, //8
    {x: 324, y:0 },
    {x: 360, y:0 },
    {x: 360, y:40 },
    {x: 0,  y:40 } //12
  ];
 window.endPoints1 = [
    {x: -40, y: -170}, //0
    {x: 0, y: -170},
    {x: 40, y: -170},
    {x: 80, y: -170},
    {x: 120, y: -170}, //4
    {x: 160, y: -170},
    {x: 200, y: -170},
    {x: 240, y: -170},
    {x: 280, y: -170}, //8
    {x: 320, y: -170},
    {x: 360, y: -170},
    {x: 360, y: 40},
    {x: -40, y: 40} //12
  ];
  var clonedStartPoints1;
    clonedStartPoints1 = startPoints1.map(function(o){ //функция клонирования свойств объекта
      return fabric.util.object.clone(o);
    });
  window.endPoints2 = [
    {x: -40, y: -150}, //0
    {x: 0, y: -160},
    {x: 40, y: -165},
    {x: 80, y: -160},
    {x: 120, y: -165}, //4
    {x: 160, y: -160},
    {x: 200, y: -165},
    {x: 240, y: -160},
    {x: 280, y: -165}, //8
    {x: 320, y: -160},
    {x: 360, y: -165},
    {x: 360, y: 40},
    {x: -40, y: 40} //12
  ];


function animatePoint11(r, prop, endPoints) {
    fabric.util.animate({
      startValue: polygon1.points[r][prop],
      endValue: endPoints1[r][prop],
      duration: 1000,
      onChange: function(value) {
        polygon1.points[r][prop] = value;
        // only render once
        if (r === startPoints1.length - 1 && prop === 'y') {
          canvas.renderAll();}
      },
      onComplete: function() {
        polygon1.setCoords();
        if ( r==12 && prop=='y'){

         animate2();
         rewrite();
         for (var i=0; i<9; i++){
                canvas.remove(  metal_one_kind[i], metal_two_kind[i]);
         }

        }
      }
    });
  }

  function animate1() {
    for (var r = 0, len = startPoints1.length; r < len; r++) {
      animatePoint11(r, 'x', true ? endPoints1 : startPoints1);
      animatePoint11(r, 'y', true ? endPoints1 : startPoints1);
    }
  }

  function animatePoint2(r, prop, endPoints2) {

    fabric.util.animate({
      startValue: polygon1.points[r][prop],
      endValue: endPoints2[r][prop],
      duration: 1000,
      onChange: function(value) {
        polygon1.points[r][prop] = value;
        // only render once
        if (r === endPoints1.length - 1 && prop === 'y') {
          canvas.renderAll();
        }

      },
     easing: fabric.util.ease.easeOutBounce,
      onComplete: function() {
        polygon1.setCoords();
        // only start animation once
        if (r === endPoints1.length - 1 && prop === 'y') {
          even = !even;
          animate2();

        }
      }
    });
  }
  function animate2() {
    if (stop != 2) {
      for (var r = 0, len = endPoints1.length; r < len; r++) {
        animatePoint2(r, 'x', even ? endPoints1 : endPoints2);
        animatePoint2(r, 'y', even ? endPoints1 : endPoints2);
      }
    } else {
      for (var r = 0, len = endPoints1.length; r < len; r++) {
        animatePoint2(r, 'x', even ? endPoints1 : endPoints1);
        animatePoint2(r, 'y', even ? endPoints1 : endPoints1);
      }}}

 }

function patternRunThird() { //кнопка 3

    for (var i=0; i<3; i++){ //здесь отключаются свечи
     canvas.remove(  torch[i]);
     candle[i].set('stroke', '')};
     window.stop = 2;
     for (s = 0; s<5; s++){
           canvas.remove( polygon[s]);
     }
     for (var i=0; i<9; i++){
      for (var j=0; j<5; j++){
            canvas.remove(  metal_one_kind[i][j], metal_two_kind[i][j]);
     }}
}

function patternRunFourth() { //кнопка 4
  var scavengers = []; var str = '[';
  for (var i = 0; i < 30; i++) {
      scavengers[i] = new fabric.Circle({
      radius: 5, fill: 'blue', left: 100, top: 100
    });

      scavengers[i].set({
                left: 130+i*10,
                top: 10,
                angle: fabric.util.getRandomInt(-60, 60),
                selectable: false });
      if (i !=29) {
        str += 'scavengers['+(i)+'], ';
      } else str += 'scavengers['+(i)+']] ';
                }
                str = eval(str);

                var scavengersGroup = new fabric.Group(str,{});
      canvas.add( scavengersGroup);


      scavengersGroup.animate('top', fabric.util.getRandomInt(285, 300), {
          onChange:   canvas.renderAll.bind(canvas),
          onComplete: function () {
            canvas.remove(scavengersGroup);
          }
        });
}
var systemGroup;window.proviso = 1

function patternRunFifth() { //пятая кнопка
  var t = 0;
   var endPoints3 = [
      {x: 170, y: 40}, //0
      {x: 170, y: 40},
      {x: 170, y: 40},
      {x: 170, y: 40},
      {x: 170, y: 40}, //4
      {x: 170, y: 40},
      {x: 200, y: -50},
      {x: 300, y: -305},
      {x: 350, y: -400}, //8
      {x: 340, y: -300},
      {x: 360, y: -300},
      {x: 360, y: 40},
      {x: 170, y: 40} //12
    ];
   window.endPoints4 = [
      {x: -40, y: -0}, //0
      {x: 0, y: -0},
      {x: 40, y: -0},
      {x: 80, y: -0},
      {x: 120, y: -0}, //4
      {x: 160, y: -0},
      {x: 200, y: -0},
      {x: 240, y: -0},
      {x: 280, y: -0}, //8
      {x: 320, y: -0},
      {x: 360, y: -0},
      {x: 360, y: 40},
      {x: -40, y: 40} //12
    ];
    if (proviso == 1) {
      Union()
    }

    function Union(){proviso = 2;
   canvas.remove(furnace,furnace1,candle[0],candle[1],candle[2], polygon1);
    systemGroup =  new fabric.Group([polygon1,furnace,furnace1,candle[0],candle[1],candle[2]],{});
      systemGroup.set({
                   });
                  canvas.add(systemGroup);
    AngleSystem(0 , 60); betaTest();
  }
   function AngleSystem(sV,eV) {
      fabric.util.animate(
        {
              startValue: sV,
              endValue: eV,
              duration: 1000,
              onChange: function(value) {
                  ter = value;
                  systemGroup.setAngle(ter)
                  canvas.renderAll();},
              onComplete: function () {systemGroup.setCoords();}
      });
    }

function betaTest() {var singleton = true;
  setTimeout(animate3(), 1000);
  setTimeout(function(){AngleSystem(60,0)}, 5000)
  function animate3() {
  for ( r = 0, len = endPoints3.length; r < len; r++) {
    animatePoint3(r, 'x', singleton ? endPoints3 : endPoints4);
    animatePoint3(r, 'y', singleton ? endPoints3 : endPoints4);
  }
}
function animatePoint3(r, prop, endPoints3) {

  fabric.util.animate({
    startValue: polygon1.points[r][prop],
    endValue: endPoints3[r][prop],
    duration: 2500,
    onChange: function(value) {
      polygon1.points[r][prop] = value;
      // only render once
      if (r === endPoints4.length - 1 && prop === 'y') {
        canvas.renderAll();
      }
    },
    onComplete: function() {
      polygon1.setCoords();
      // only start animation once
      if (r === endPoints4.length - 1 && prop === 'y') {
        singleton = false;
        animate3();
      }
    }
  });
}
}




      //           systemGroup.setAngle(50).setCoords();
      //  systemGroup.renderAll();

    // systemGroup.animate(setAngle(50), {
    //     onChange:   canvas.renderAll.bind(canvas),
    //     onComplete: function () {
    //
    //     }
    //   });
  }
