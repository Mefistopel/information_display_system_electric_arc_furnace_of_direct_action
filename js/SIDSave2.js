
    var canvas = this.__canvas = new fabric.Canvas('canvas');
    fabric.Object.prototype.transparentCorners = false;




    //котлован
     var furnace = new fabric.Path('M 0 0 L 0 250 Q 170, 390, 340, 250 L 340 0 L 360 0 L 360 250 Q 170 430 -20 250 L -20 0 L 360 0 z', { fill: '#800000', stroke: 'black' });
        furnace.set({ left: 100, top: 150,     selectable: false });
    //печь
     var furnace1 = new fabric.Path('M 0 0 L 0 380 L 420 380 L 420 0 L 400 0 L 400 270 Q 200 450 21 269 L 21 0  L 400 0 L 400 21  L 21 21 L 21 0 z', { fill: 'black', stroke: 'black' });
        furnace1.set({ left: 80, top: 130,     selectable: false });

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
     }
    var text = new fabric.Text('Cтатус:', { left: 425, top: 25, fontSize: 18, selectable: false });
    var text2 = new fabric.Text('Температура:', { left: 425, top: 50, fontSize: 18, selectable: false });
    var text3 = new fabric.Text('Вес:', { left: 425, top: 75, fontSize: 18, selectable: false });
    var text4 = new fabric.Text('Время работы:', { left: 425, top: 100, fontSize: 18, selectable: false });

    canvas.add( text, text2, text3, text4);

    var condition; FuncCondition ('Не активно');
    function FuncCondition(displ) {//функция отображения статуса
      canvas.remove(condition);
      condition =  new fabric.Text(displ, { left: 490, top: 25, fontSize: 18, selectable: false });canvas.add(condition);
    }

    var weight; FuncWeight(0);
    function FuncWeight(displ) { //функция отображения веса
      canvas.remove(weight);
      weight = new fabric.Text(displ.toFixed(3) + ' т.', { left: 470, top: 75, fontSize: 18, selectable: false });canvas.add(weight);
    }

    var temp; FuncTemp(20);
    function FuncTemp(displ) {//функция отображения температуры
      canvas.remove(temp);
      temp = new fabric.Text(displ +' °t', { left: 540, top: 50, fontSize: 18, selectable: false });canvas.add(temp);
    }


    var sec; FuncSec(0)
    function FuncSec(displ) {//функция отображения времени
      canvas.remove(sec);
      sec = new fabric.Text(' '+displ + ' cек.', { left: 540, top: 100, fontSize: 18, selectable: false });canvas.add(sec);
    }
    function Timer()  {
       if (timer) clearInterval(timer);
       timer = setInterval(
          function () {
           secs++;
           FuncSec(secs);
         }, 1000);
           }




    window.metal_one_kind = new Array(); window.metal_two_kind = new Array();
    var clonedStartPoints = [];
    window.polygon = [];
    window.startPoints = [ //слитки
       {x: 0, y: 0}, //
       {x: 0, y: 20},//
       {x: 10, y: 20},
       {x: 20, y: 20},
       {x: 30, y: 20},
       {x: 40, y: 20},//
       {x: 40, y: 0}//
     ];
    window.endPoints = [ //слитки расплавлены
       {x: -20, y: 140}, //
       {x: -20, y: 180}, //
       {x: 0, y: 180},
       {x: 20, y: 175},
       {x: 30, y: 180},
       {x: 40, y: 180}, //
       {x: 40, y: 150} //
     ];
       window.startPoints1 = [
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
        window.endPoints3 = [
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
        var systemGroup =  new fabric.Group([furnace,furnace1,candle[0],candle[1],candle[2]],{selectable: false});
        canvas.add(systemGroup);

     window.len = true;
           function rewrite(){
             canvas.remove(systemGroup);
             canvas.add(systemGroup);
      }

function addPolygon1() {
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
}

var z, s; var x = 0;var timer; secs = 0; window.OneOn = 1;
function patternRunOne() {//кнопка 1
     FuncCondition ('Завалка'); FuncWeight(x+=fabric.util.getRandomInt(1,5, 3));
     if (len == true) {
          Timer()//единственный раз добавляет запускает таймер
       }
     canvas.remove(systemGroup); window.proviso = 1; window.even = true;
       if (OneOn == 1) { //чтобы нельзя было запустить при работающей функции
         ObjectMettal();
       }
function ObjectMettal() {
  clonedStartPoints = startPoints.map(function(o){ //функция клонирования свойств объекта
       return fabric.util.object.clone(o);
     });
         OneOn = 2;
        for (s = 0; s<5; s++){
          polygon[s] = new fabric.Polygon(clonedStartPoints, { //фигура и её свойства
             left: 175+s*50,
             top: 115+ 4.4 * 40,
             angle: fabric.util.getRandomInt(-60, 30),
             fill: 'rgba(128,0,0,0.8)',
             selectable: false
           });
                canvas.add( polygon[s]); //"плавящиеся" объекты
      }
  //объекты, изображавшие металл
    for (var i=0; i<9; i++){ //объекты по горизонтали
      metal_one_kind[i] = new Array();
      metal_two_kind[i] = new Array();
     for (var j=0; j<10; j++){ //сколько будет горизонтальных линий
      if (j !=9  ){z = j;} else { z = 2;}//для top, чтобы не вышло за рамки объекта
      //слитки
     metal_one_kind[i][j] = new fabric.Path('M 0 0 L 0 20 L 40, 20 L 40 0 z', {
               fill: 'rgba(128,0,0,0.8)' });
               metal_one_kind[i][j].set({
                 left: 125+i*37,
                 top: 268+44+z* 44 ,
                 angle: fabric.util.getRandomInt(-60, 30),
                 selectable: false });
            //круги
               metal_two_kind[i][j] = new fabric.Circle({
                 radius: 11,
                 fill: 'rgba(128,0,0,0.8)',
                 left: fabric.util.getRandomInt(125, 350),
                 top: 265+44+z * fabric.util.getRandomInt(20, 36),
                selectable: false
           });
   canvas.add(metal_one_kind[i][j], metal_two_kind[i][j]);
    }}}
    rewrite();
  }

 function patternRunSecond(){ //кнопка ПЛАВЛЕНИЕ
  window.temperature = 20;
   FuncCondition ('Плавление');
var timer1; var stopTimer1 = true; var StopWeight = true;

  (function()
            {
         if (timer1) clearInterval(timer1);
         timer1 = setInterval(
            function () {
              if (stopTimer1 == true) {
             if(temperature<1600 && secs%1==0){
               temperature+=Math.floor(Math.random() * (150 - 10 + 1)) + 10;}
               else {
                 temperature = 1600; stopTimer1 = false;
               } // случайное число в качестве температуры

             FuncTemp(temperature)
           }},
           1000
           );
             })();




   for (var i=0; i<3; i++){ //здесь включаются свечи
    canvas.remove(  torch[i])
    canvas.add( torch[i]);
    candle[i].set('stroke', '#00BFFF')}
    rewrite();
    for (var i = 0; i < polygon.length; i++) {
      polygon[i].animate('angle',0,{onChange: canvas.renderAll.bind(canvas)});
    }

   function animatePoint(r, prop, endPoints) { // функция анимирования плавки металла
    fabric.util.animate({
      startValue: polygon[1].points[r][prop],
      endValue: endPoints[r][prop],
      duration: 5000,
      onChange: function(value) {
        polygon[0].points[r][prop] = value;
        polygon[1].points[r][prop] = value;
        polygon[3].points[r][prop] = value;
        // only render once
        if (r === startPoints.length - 1 && prop === 'y') {canvas.renderAll();}
      },
      onComplete: function() {
       if ( r==3 && prop=='y'){
         if (len == true) {
           addPolygon1(); //единственный раз добавляет желтый объект
         }
        animate1(); window.stop = 3;
        FuncWeight(x-=Math.random() * (0.008 - 0.0004) + 0.0004);
        rewrite();
        }
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
  setTimeout(animate, 1000); //запуск функции плавления верхнего слоя шлака

function animatePoint11(r, prop, endPoints) {
    fabric.util.animate({
      startValue: polygon1.points[r][prop],
      endValue: endPoints1[r][prop],
      duration: 5000, //время анимации заполнения рабочего пространства печи расплавленным металлом
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
         FuncWeight(x-=Math.random() * (0.06 - 0.02) + 0.02); //когда расплавленный объект полностью заполнил рабочее пространство
        }
      }
    });
  }
  function animate1() {
    for (var r = 0, len = startPoints1.length; r < len; r++) {
      animatePoint11(r, 'x',  endPoints1);
      animatePoint11(r, 'y',  endPoints1);
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
          if (StopWeight == true) {
            for (i = 0; i < 2; i++) {
              FuncWeight(x-=Math.random() * (0.001 - 0.0005) + 0.0005); // плавка и расход веса - два раза
            }
            StopWeight = false; //исключить измениние веса, а то при длительном времени уйдём в минус веса
          }
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
        animatePoint2(r, 'x', endPoints1);
        animatePoint2(r, 'y', endPoints1);
      }}}
 }



function patternRunThird() { //кнопка ОТКЛЮЧИТЬ СВЕЧИ
  FuncCondition ('Простой');
    stop = 2; proviso = 1; OneOn = 1;
    for (var i=0; i<3; i++){ //здесь отключаются свечи
     canvas.remove(  torch[i]);
     candle[i].set('stroke', '');
    }
     for (s = 0; s<5; s++){
           canvas.remove(polygon[s]);
     }
     for (var i=0; i<metal_one_kind.length; i++){
       for (var j=0; j<metal_one_kind[i].length; j++){
            canvas.remove(metal_one_kind[i][j], metal_two_kind[i][j]);
     }}
     cooling();
     function cooling() { //охлаждение при остывании
       stopTimerTem= setInterval(function(){if (t != 0) {
         FuncTemp(temperature-=(Math.floor(Math.random() * (2 - 1 + 1)) + 1))
       } else clearInterval(stopTimerTem)}, 2000);
       cooling();
     }
}



function patternRunFourth() { //кнопка ПРОИЗВЕСТИ РАСКИСЛЕНИЕ
    stopTimerWei= setInterval(function(){if (stop !=2) {
      FuncWeight(x-=Math.random() * (0.002 - 0.001) + 0.001)
    } else clearInterval(stopTimerWei)}, 10000);

FuncCondition ('Раскисление');var scavengers = []; var str = '[';
  for (var i = 0; i < 70; i++) {
      scavengers[i] = new fabric.Circle({
      radius: 3, fill: 'blue', left: 100, top: 100
    });
      scavengers[i].set({
                left: 130+i*4.6,
                top: 10,
                angle: fabric.util.getRandomInt(-60, 60),
                selectable: false });
      if (i !=69) {
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
            FuncWeight(x+=Math.random() * (0.08 - 0.02) + 0.02); // добавляет вес раскислителей

            FuncTemp(temperature-=Math.floor(Math.random() * (60 - 10 + 1)) + 10); //изменение температуры, т.к. раскислители холодные
            deoxidizationTemp()
            function deoxidizationTemp() {
              if (temperature<1600) {
                setTimeout(function(){temperature+=(Math.floor(Math.random() * (10 - 1 + 1)) + 1);FuncTemp(temperature);}, 1500);
                setTimeout(deoxidizationTemp, 1500);
              } else FuncTemp(1600);
            }

          }
        });
}
var singleton;
function patternRunFifth() { //пятая кнопка
  FuncCondition ('Слив');
  var t = 0;
    if (proviso == 1) { //чтобы нельзя было запустить при работающей функции
      Union();
    }
    function Union(){proviso = 2;
      if (len == true) {
        canvas.remove(systemGroup, polygon1);
         systemGroup =  new fabric.Group([polygon1,systemGroup],{});
           systemGroup.set({selectable: false});
                       canvas.add(systemGroup);
      }

    AngleSystem(0 , 60);
    betaTest();
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

function betaTest() { singleton = true;
  setTimeout(animate3(), 1000); //единожды
  setTimeout(function(){
    AngleSystem(60,0), //передаёт параметры на наклон в 90 градусов
    FuncWeight(x=Math.random() * (0.7 - 0.4) + 0.4), // вес болота
    FuncCondition ('Не активно'), // отображение статуса
    delete stop, evet, proviso, timer,StopWeight, stopTimer1; //удаление переменных, т.к. они создаются при нажатии на кнопку
  },
     2500); //единожды запускается и ОЧЕНЬ ПОЛЕЗНАЯ

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
      if (r === endPoints4.length - 1 && prop === 'y') {
        singleton = false; len = false;
        animate3();
      }
    }
  });
}
}

/* Код можно укоротить и сделать компактным, вынеся функцию fabric.util.animate и передавая ей множество параметров. Это уменьшит размер кода примерно в 2~3 раза.
Код разработал Андрей Янусов, контакт для связи: morphingsleep@gmail.com
Написан за 1 месяц прерывной работы в Июле-Августе 2016 года.
Также следует заметить, что в функции setTimeout нужно настраивать самостоятельно, запуски анимации во множестве раз зависят от этих функций. Если переносить код на реальный объект, необходимо избавиться от этих функций.*/
  }
