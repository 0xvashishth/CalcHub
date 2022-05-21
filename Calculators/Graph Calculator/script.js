//Class for operators
function Operator(input) {
  this.operator = input;
  if (!input) {
    console.log("Operator has no input.");
  }

  this.solve = function(segment1, segment2, x) {
    var v1 = segment1.coefficient;
    if (segment1.type=="variable") {
      v1 = x;
    }
    var v2 = segment2.coefficient;
    if (segment2.type=="variable") {
      v2 = x;
    }
    if (this.operator=="+") {
      return new Segment(v1 + v2);
    } else if (this.operator=="-") {
      return  new Segment(v1 - v2);
    } else if  (this.operator=="*") {
      return  new Segment(v1 * v2);
    } else if (this.operator=="/") {
      return  new Segment(v1 / v2);
    } else if (this.operator=="^") {
      return  new Segment(Math.pow(v1, v2));
    }
  };
}

//Class for special functions
function MathFunction(input) {
  this.f=input;
  if (!input) {
    console.log("Math function has no input.");
  }

  this.solve = function(segment) {
    var v = segment.coefficient;
    if (this.f=="sin") {
      return new Segment(Math.sin(v));
    } else if (this.f=="cos") {
      return new Segment(Math.cos(v));
    } else if (this.f=="tan") {
      return new Segment(Math.tan(v));
    } else if (this.f=="asin") {
      return new Segment(Math.asin(v));
    } else if (this.f=="acos") {
      return new Segment(Math.acos(v));
    } else if (this.f=="atan") {
      return new Segment(Math.atan(v));
    } else if (this.f=="abs") {
      return new Segment(Math.abs(v));
    }
  };
}

//Class for a segment of math (a container)
function Segment(input) {
  this.sections = [];
  this.type="section";
  this.operator=0;
  this.coefficient=0;
  this.mathFunction=0;
  this.variable="";

  var removeBrackets = function(value) {
    if (!value) return "";

    //While there are brackets around the string
    while (value.substr(0, 1)=="(" && value.substr(value.length-1, 1)==")") {
      var openBrackets=1;

      //See if the end bracket closes the opening bracket or not
      for (var i=1; i<value.length&&openBrackets>0; i++) {
        if (value.substr(i, 1)=="(") openBrackets++;
        if (value.substr(i, 1)==")") openBrackets--;
      }
      i-=1;

      //If it corresponds to different brackets, do nothing
      if (openBrackets!==0 || i!=value.length-1) {
        break;

      //Otherwise, remove the brackets, continue loop to see if there are more
      } else {
        value=value.substring(1, value.length-1);
      }
    }

    return value;
  };

  var findLast = function(operator, value) {

    //Keep searching for the next last sign if the one found is within brackets
    var inBrackets=true;
    var index=-1;
    if (operator!="^") {
      index=value.lastIndexOf(operator);
    } else {
      index=value.indexOf(operator); //Look for the first instead of last if it's an exponent
    }
    var operators="+-/*^";
    while (inBrackets) {
      var openBrackets=0;

      //Find how many brackets are opened or closed at a given point in the string
      for (var i=0; i<value.length; i++) {
        if (value.substr(i, 1)=="(") {
          openBrackets++;
        } else if (value.substr(i, 1)==")") {
          openBrackets--;
        }

        if (i==index) {

          //If no brackets are open (and if the operator is actually - and not just a minus sign), break the loop.
          if ((openBrackets===0 && (operator!="-" || (i>0 && operators.indexOf(value.substr(i-1, 1))==-1) || i===0)) || (openBrackets==1 && operator=="(")) {
            inBrackets=false;
            break;

          //Otherwise, find the next operator, and loop through again to see if that one is in brackets
          } else {
            if (operator!="^") {
              index = value.substring(0, index).lastIndexOf(operator);
            } else {
              var nextOperator = value.substring(index+1).indexOf(operator);
              if (nextOperator==-1) {
                index=-1;
              } else {
                index = (index+1+value.substring(index+1).indexOf(operator));
              }
            }
          }
        }
      }

      //If no more operators are found, break the loop
      if (index==-1) {
        inBrackets=false;
      }
    }
    return index;
  };

  var findLastTrig = function(trig, value) {
    var matches=0;
    var index=-1;
    var r=0;
    if (trig=="sin") {
      r=/(a)?sin/g;
    } else if (trig=="cos") {
      r=/(a)?cos/g;
    } else if (trig=="tan") {
      r=/(a)?tan/g;
    } else {
      return -1;
    }
    for (matches=r.exec(value); matches; matches=r.exec(value)) if (RegExp.$1 != "a") index=matches.index;
    var inBrackets=true;
    while (inBrackets && index!=-1) {
      var openBrackets=0;

      //Find how many brackets are opened or closed at a given point in the string
      for (var i=0; i<value.length; i++) {
        if (value.substr(i, 1)=="(") {
          openBrackets++;
        } else if (value.substr(i, 1)==")") {
          openBrackets--;
        }

        if (i==index) {

          //If no brackets are open (and if the operator is actually - and not just a minus sign), break the loop.
          if (openBrackets===0) {
            inBrackets=false;
            break;

          //Otherwise, find the next operator, and loop through again to see if that one is in brackets
          } else {
            var sub = value.substring(0, index);
            index=-1;
            for (matches=r.exec(sub); matches; matches=r.exec(sub)) if (RegExp.$1 != "a") index=matches.index;
          }
        }
      }

      //If no more operators are found, break the loop
      if (index==-1) {
        inBrackets=false;
      }
    }
    return index;
  };

  //Specifically for finding brackets that can be used for multiplication
  var findMultiplicationBrackets = function(value) {

    //Keep searching for the next last sign if the one found is within brackets
    var inBracketsOpen=true;
    var inBracketsClosed=true;
    var indexOpen=-1;
    var indexClosed=-1;
    var operators="+-/*^sincostanabs";
    
    indexOpen=value.lastIndexOf("(");
    indexClosed=value.lastIndexOf(")");

    while (inBracketsOpen || inBracketsClosed) {
      var openBrackets=0;

      //Find how many brackets are opened or closed at a given point in the string
      for (var i=0; i<value.length; i++) {
        if (value.substr(i, 1)=="(") {
          openBrackets++;
        } else if (value.substr(i, 1)==")") {
          openBrackets--;
        }

        if (i==indexOpen && inBracketsOpen) {

          if (openBrackets==1 && i!==0 && operators.indexOf(value.substr(i-1, 1))==-1) {
            inBracketsOpen=false;

          //Otherwise, find the next operator, and loop through again to see if that one is in brackets
          } else {
            indexOpen = value.substring(0, indexOpen).lastIndexOf("(");
          }
        }

        if (i==indexClosed && inBracketsClosed) {

          if (openBrackets===0 && i<value.length-1 && operators.indexOf(value.substr(i+1, 1))==-1) {
            inBracketsClosed=false;

          //Otherwise, find the next operator, and loop through again to see if that one is in brackets
          } else {
            indexClosed = value.substring(0, indexClosed).lastIndexOf(")");
          }
        }
      }

      //If no more operators are found, break the loop
      if (indexOpen==-1) {
        inBracketsOpen=false;
      }
      if (indexClosed==-1) {
        inBracketsClosed=false;
      }
    }

    if (indexClosed>indexOpen && indexClosed!=-1) {
      return indexClosed;
    } else {
      return indexOpen;
    }
  };

  //Recursively solve children
  this.solve = function(x) {
    if (!x) x=0;
    if (this.type=="value") {
      return this;
    } else if (this.type=="variable") {
      return new Segment(x);
    } else if (this.type=="function") {
      return this.mathFunction.solve(this.sections[0].solve(x));
    } else {
      if (this.sections.length==1) {
        return this.sections[0].solve(x);
      } else if (this.sections.length==2) {
        return this.operator.solve(this.sections[0].solve(x), this.sections[1].solve(x), x);
      }
    }
  };

  //Outputs the final answer
  this.result = function(x) {
    return this.solve(x).coefficient;
  };

  this.display = function(x) {
    if (this.type=="value") return this.coefficient;
    if (this.type=="variable") return "x";
    if (this.type=="function") return this.mathFunction.f;
    var str = "<div class='group'>";
    for (var i=0; i<this.sections.length; i++) {
      str+=this.sections[i].display(x);
      if (i===0 && this.operator) {
        str+="<div class='group operator'>" + this.operator.operator + "</div>";
      }
    }
    str+="<div class='answer'>= " + this.solve().coefficient + "</div>";
    str+="</div>";
    return str;
  };



  //constructor
  if (input!==undefined) {
    if (typeof(input)=="string") {
      //Remove excess whitespace
      input = input.replace(/\s/g, "");

      //get rid of unnecessary brackets surrounding the section
      input = removeBrackets(input);
      
      //Find the last instance of each operator in the string
      var addition = findLast("+", input);
      var subtraction = findLast("-", input);
      var division = findLast("/", input);
      var exponent = findLast("^", input); //Find the first exponent, since those work in reverse
      var bracket1 = findLast("(", input);

      var sin = findLastTrig("sin", input);
      var cos = findLastTrig("cos", input);
      var tan = findLastTrig("tan", input);
      var asin = findLast("asin", input);
      var acos = findLast("acos", input);
      var atan = findLast("atan", input);
      var abs = findLast("abs", input);
      var multiplication = findLast("*", input);
      var multiplication2 = findMultiplicationBrackets(input); //Find brackets that are the same as multiplication
      var functionMultiplication = -1;
      if (sin>multiplication) functionMultiplication=sin;
      if (cos>multiplication) functionMultiplication=cos;
      if (tan>multiplication) functionMultiplication=tan;
      if (asin>multiplication) functionMultiplication=asin;
      if (acos>multiplication) functionMultiplication=acos;
      if (atan>multiplication) functionMultiplication=atan;
      if (abs>multiplication) functionMultiplication=abs;

      //Push back each half of the equation into a section, in reverse order of operations
      if (addition != -1 && (subtraction == -1 || addition>subtraction)) {
        this.sections.push(new Segment(input.substring(0, addition)));
        this.sections.push(new Segment(input.substring(addition+1)));
        this.operator = new Operator("+");
      } else if (subtraction != -1) {
        if (subtraction>0) {
          this.sections.push(new Segment(input.substring(0, subtraction)));
        } else {
          this.sections.push(new Segment(0));
        }
        this.sections.push(new Segment(input.substring(subtraction+1)));
        this.operator = new Operator("-");
      } else if (functionMultiplication >0 && functionMultiplication > multiplication && functionMultiplication > division) {
        this.sections.push(new Segment(input.substring(0, functionMultiplication)));
        this.sections.push(new Segment(input.substring(functionMultiplication)));
        this.operator = new Operator("*");
      } else if (multiplication2 != -1 && (division == -1 || multiplication>division) && (multiplication == -1 || multiplication2>multiplication)) {
        this.sections.push(new Segment(input.substring(0, multiplication2)));
        this.sections.push(new Segment(input.substring(multiplication2)));
        this.operator = new Operator("*");
      } else if (multiplication != -1 && (division == -1 || multiplication>division)) {
        this.sections.push(new Segment(input.substring(0, multiplication)));
        this.sections.push(new Segment(input.substring(multiplication+1)));
        this.operator = new Operator("*");
      } else if (division != -1) {
        this.sections.push(new Segment(input.substring(0, division)));
        this.sections.push(new Segment(input.substring(division+1)));
        this.operator = new Operator("/");
      } else if (exponent != -1) {
        this.sections.push(new Segment(input.substring(0, exponent)));
        this.sections.push(new Segment(input.substring(exponent+1)));
        this.operator = new Operator("^");
      } else if (sin != -1 && (cos == -1 || sin>cos) && (tan == -1 || sin>tan) && (asin == -1 || sin>asin) && (acos == -1 || sin>acos) && (atan == -1 || sin>atan) && (abs == -1 || sin>abs)) {
        this.sections.push(new Segment(input.substring(sin+3)));
        this.mathFunction = new MathFunction("sin");
        this.type = "function";
      } else if (cos != -1 && (tan == -1 || cos>tan) && (asin == -1 || cos>asin) && (acos == -1 || cos>acos) && (atan == -1 || cos>atan) && (abs == -1 || cos>abs)) {
        this.sections.push(new Segment(input.substring(cos+3)));
        this.mathFunction = new MathFunction("cos");
        this.type = "function";
      } else if (tan != -1 && (asin == -1 || tan>asin) && (acos == -1 || tan>acos) && (atan == -1 || tan>atan) && (abs == -1 || tan>abs)) {
        this.sections.push(new Segment(input.substring(tan+3)));
        this.mathFunction = new MathFunction("tan");
        this.type = "function";
      } else if (asin != -1 && (acos == -1 || asin>acos) && (atan == -1 || asin>atan) && (abs == -1 || asin>abs)) {
        this.sections.push(new Segment(input.substring(asin+4)));
        this.mathFunction = new MathFunction("asin");
        this.type = "function";
      } else if (acos != -1 && (atan == -1 || acos>atan) && (abs == -1 || acos>abs)) {
        this.sections.push(new Segment(input.substring(acos+4)));
        this.mathFunction = new MathFunction("acos");
        this.type = "function";
      } else if (atan != -1 && (abs == -1 || atan>abs)) {
        this.sections.push(new Segment(input.substring(atan+4)));
        this.mathFunction = new MathFunction("atan");
        this.type = "function";
      } else if (abs != -1) {
        this.sections.push(new Segment(input.substring(abs+3)));
        this.mathFunction = new MathFunction("abs");
        this.type = "function";
      } else if (bracket1 != -1) {
        var openBrackets=1;
        for (var i=bracket1+1; i<input.length&&openBrackets>0; i++) {
          if (input.substr(i, 1)=="(") openBrackets++;
          if (input.substr(i, 1)==")") openBrackets--;
        }
        if (openBrackets===0) {
          var bracket2=i-1;
          if (bracket1>0) this.sections.push(new Segment(input.substring(0, bracket1)));
          if (bracket2-bracket1!=1) this.sections.push(new Segment(input.substring(bracket1+1, bracket2)));
          if (bracket2!=input.length-1) this.sections.push(new Segment(input.substring(bracket2+1)));
          this.operator = new Operator("*");
        } else {
          console.log("Brackets nesting error: " + input);
        }

      //If there are no operators, just push the input itself
      } else {
        var xLocation=input.toLowerCase().indexOf("x");
        if (xLocation!=-1) {
          if (xLocation>0) {
            this.sections.push(new Segment(input.substring(0, xLocation)));
            this.sections.push(new Segment("x"));
            this.operator=new Operator("*");
          } else {
            this.variable="x";
            this.type="variable";
          }
        } else {
          this.coefficient = parseFloat(input);
          this.type = "value";
        }
      }
    } else if (typeof(input)=="number") {
      this.coefficient = input;
      this.type = "value";
    }
  } else {
    console.log("Segment has no input.");
  }
}


//One point on a graph
function Point(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}


//MathFunction to create graphs
function Graph(value, width, height, rangeX, rangeY) {
  var autoRange=false;

  //Default params
  if (rangeX===undefined) {
    rangeX=10;
  }
  if (rangeY===undefined) {
    autoRange = true;
  }

  //Properties
  this.expression = new Segment(value);
  this.points = [];
  this.canvas = document.createElement("canvas");
  this.canvas.width=width || 400;
  this.canvas.height=height || 400;
  this.min=undefined;
  this.max=undefined;
  this.x1 = 0-Math.abs(rangeX);
  this.x2 = 0+Math.abs(rangeX);
  this.y1 = 0-Math.abs(rangeY);
  this.y2 = 0+Math.abs(rangeY);
  var startMouse = new Point(0, 0);
  var mousePos = new Point(0, 0);
  var timer=0;
  var stage=0;
  var img=0;
  var magnitudeX = 0;
  var magnitudeY = 0;

  //Gets minimum y value in the set of points
  this.getMin = function() {
    if (this.min===undefined) {
      if (this.points.length>0) {
        var min = this.points[0].y;
        for (var i=1; i<this.points.length; i++) {
          if (this.points[i].y<min) min = this.points[i].y;
        }
        this.min=min;
        return min;
      } else {
        return 0;
      }
    } else {
      return this.min;
    }
  };

  //Gets maximum y value in the set of points
  this.getMax = function() {
    if (this.max===undefined) {
      if (this.points.length>0) {
        var max = this.points[0].y;
        for (var i=1; i<this.points.length; i++) {
          if (this.points[i].y>max) max = this.points[i].y;
        }
        this.max=max;
        return max;
      } else {
        return 0;
      }
    } else {
      return this.max;
    }
  };

  //Updates the points and graph
  this.update = function() {
    var accuracy = (this.x2-this.x1)/this.canvas.width;
    this.points = [];
    for (var i=this.x1; i<=this.x2; i+=accuracy) {
      this.points.push(new Point(i, this.expression.result(i)));
    }

    if (autoRange) {
      if (this.getMax()-this.getMin()>100000) {
        this.y1=-100;
        this.y2=100;
      } else {
        this.y1=this.getMin()-5;
        this.y2=this.getMax()+5;
      }
      autoRange = false;
    }

    magnitudeX = Math.ceil(Math.log(this.x2-this.x1));
    magnitudeY = Math.ceil(Math.log(this.y2-this.y1));

    this.redraw();
  };

  var drawAxes = function(_x1, _x2, _y1, _y2, redraw) {
    stage.strokeStyle="#bdc3c7";
    stage.fillStyle="#bdc3c7";
    var limit=0;
    var i=0;

    //Draw the y axis if it is in the view
    if (0>=_x1-30 && 0<=_x2+30) {
      stage.lineWidth=2;
      stage.beginPath();
      stage.moveTo(this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width, 0);
      stage.lineTo(this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width, this.canvas.height);
      stage.closePath();
      stage.stroke();
      stage.textAlign = "right";
      stage.textBaseline="middle";

      stage.lineWidth=1;
      limit = (Math.abs(_y2)>Math.abs(_y1))?Math.abs(_y2):Math.abs(_y1);
      for (i=0; i<=limit; i+=Math.pow(10, Math.floor(Math.log(_y2-_y1) / Math.LN10))/4) {
        if (i===0) continue;
        if (i<=_y2+50) {
          if (redraw || (i>=this.y2-50)) {
            stage.beginPath();
            stage.moveTo(this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width-5, this.canvas.height-((i-_y1)/(_y2-_y1))*this.canvas.height);
            stage.lineTo(this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width+5, this.canvas.height-((i-_y1)/(_y2-_y1))*this.canvas.height);
            stage.closePath();
            stage.stroke();
            stage.fillText(""+(Math.round(i*100)/100), this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width-8, this.canvas.height-((i-_y1)/(_y2-_y1))*this.canvas.height);
          }
        }

        if (i>=_y1-50) {
          if (redraw || (-i<=this.y1+50)) {
            stage.beginPath();
            stage.moveTo(this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width-5, this.canvas.height-((-i-_y1)/(_y2-_y1))*this.canvas.height);
            stage.lineTo(this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width+5, this.canvas.height-((-i-_y1)/(_y2-_y1))*this.canvas.height);
            stage.closePath();
            stage.stroke();
            stage.fillText(""+(Math.round(-i*100)/100), this.canvas.width/2-(((_x2+_x1)/2)/(_x2-_x1))*this.canvas.width-8, this.canvas.height-((-i-_y1)/(_y2-_y1))*this.canvas.height);
          }
        }
      }
    }

    //Draw the x axis if it is in the view
    if (0>=_y1-50 && 0<=_y2+50) {
      stage.lineWidth=2;
      stage.beginPath();
      stage.moveTo(0, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height);
      stage.lineTo(this.canvas.width, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height);
      stage.closePath();
      stage.stroke();
      stage.textAlign = "center";
      stage.textBaseline="top";

      stage.lineWidth=1;
      limit = (Math.abs(_x2)>Math.abs(_x1))?Math.abs(_x2):Math.abs(_x1);
      for (i=0; i<=limit; i+=Math.pow(10, Math.floor(Math.log(_x2-_x1) / Math.LN10))/4) {
        if (i===0) continue;
        if (i<=_x2+50) {
          if (redraw || (i>=this.x2-50)) {
            stage.beginPath();
            stage.moveTo(((i-_x1)/(_x2-_x1))*this.canvas.width, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height-5);
            stage.lineTo(((i-_x1)/(_x2-_x1))*this.canvas.width, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height+5);
            stage.closePath();
            stage.stroke();
            stage.fillText(""+(Math.round(i*100)/100), ((i-_x1)/(_x2-_x1))*this.canvas.width, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height+8);
          }
        }

        if (i>=_x1-50) {
          if (redraw || (-i<=this.x1+50)) {
            stage.beginPath();
            stage.moveTo(((-i-_x1)/(_x2-_x1))*this.canvas.width, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height-5);
            stage.lineTo(((-i-_x1)/(_x2-_x1))*this.canvas.width, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height+5);
            stage.closePath();
            stage.stroke();
            stage.fillText(""+(Math.round(-i*100)/100), ((-i-_x1)/(_x2-_x1))*this.canvas.width, this.canvas.height/2+(((_y2+_y1)/2)/(_y2-_y1))*this.canvas.height+8);
          }
        }
      }
    }
  }.bind(this);

  //Updates the canvas
  this.redraw = function() {
    if (this.points.length>1) {
      stage.clearRect(0, 0, this.canvas.width, this.canvas.height);
      stage.lineCap="round";

      var offsetY = -this.y1;

      drawAxes(this.x1, this.x2, this.y1, this.y2, true);

      //Draw all the points
      stage.strokeStyle="#2980b9";
      stage.lineWidth=1;
      stage.beginPath();
      stage.moveTo(0, this.canvas.height-((this.points[0].y+offsetY)/(this.y2-this.y1))*this.canvas.height);
      for (var i=1; i<this.points.length; i++) {
        if (Math.abs((this.canvas.height-((this.points[i].y+offsetY)/(this.y2-this.y1))*this.canvas.height)-(this.canvas.height-((this.points[i-1].y+offsetY)/(this.y2-this.y1))*this.canvas.height))<=this.canvas.height) {
          stage.lineTo((i/this.points.length)*this.canvas.width, this.canvas.height-((this.points[i].y+offsetY)/(this.y2-this.y1))*this.canvas.height);
        }
        stage.moveTo((i/this.points.length)*this.canvas.width, this.canvas.height-((this.points[i].y+offsetY)/(this.y2-this.y1))*this.canvas.height);
      }
      stage.closePath();
      stage.stroke();

      img = stage.getImageData(0, 0, this.canvas.width, this.canvas.height);
    } else {
      console.log("Not enough points to graph.");
    }
  };

  this.setRange = function(_x1, _x2, _y1, _y2) {
    this.x1=_x1;
    this.x2=_x2;
    this.y1=_y1;
    this.y2=_y2;
    this.update();
  };

  var getMousePos = function(evt) {
      var rect = this.canvas.getBoundingClientRect();
      var root = document.documentElement;
      
      // return relative mouse position
      var mouseX = evt.clientX - rect.left - root.scrollLeft;
      var mouseY = evt.clientY - rect.top - root.scrollTop;
      
      return new Point(mouseX, mouseY);
  }.bind(this);

  var startDrag = function(event) {
    document.addEventListener("mousemove", dragMouse, false);
    document.addEventListener("mouseup", endDrag, false);
    this.canvas.removeEventListener("mouseover", startMouseOver, false);
    this.canvas.removeEventListener("mousemove", moveMouse, false);
    startMouse = getMousePos(event);
  }.bind(this);

  var redrawLine = function() {
    var offsetX = ((mousePos.x-startMouse.x)/this.canvas.width)*(this.x2-this.x1);
    var offsetY = ((mousePos.y-startMouse.y)/this.canvas.height)*(this.y2-this.y1);
    this.setRange(this.x1-offsetX, this.x2-offsetX, this.y1+offsetY, this.y2+offsetY);
    startMouse = mousePos;
  }.bind(this);

  var dragMouse = function(event) {
    stage.clearRect(0, 0, this.canvas.width, this.canvas.height);
    mousePos = getMousePos(event);
    var newx1 = this.x1-((mousePos.x-startMouse.x)/this.canvas.width)*(this.x2-this.x1);
    var newx2 = this.x2-((mousePos.x-startMouse.x)/this.canvas.width)*(this.x2-this.x1);
    var newy1 = this.y1+((mousePos.y-startMouse.y)/this.canvas.height)*(this.y2-this.y1);
    var newy2 = this.y2+((mousePos.y-startMouse.y)/this.canvas.height)*(this.y2-this.y1);

    if (Math.abs(newx1-this.x1)>this.canvas.width/2 || Math.abs(newy1-this.y1)>this.canvas.height/2) {
      redrawLine();
    } else {
      drawAxes(newx1, newx2, newy1, newy2, false);
      stage.putImageData(img, mousePos.x-startMouse.x, mousePos.y-startMouse.y);
    }
      
    
  }.bind(this);

  var endDrag = function(event) {
    document.removeEventListener("mousemove", dragMouse, false);
    document.removeEventListener("mouseup", endDrag, false);
    this.canvas.addEventListener("mouseover", startMouseOver, false);
    this.canvas.addEventListener("mousemove", moveMouse, false);
    mousePos = getMousePos(event);

    var offsetX = ((mousePos.x-startMouse.x)/this.canvas.width)*(this.x2-this.x1);
    var offsetY = ((mousePos.y-startMouse.y)/this.canvas.height)*(this.y2-this.y1);
    this.setRange(this.x1-offsetX, this.x2-offsetX, this.y1+offsetY, this.y2+offsetY);
  }.bind(this);

  var startMouseOver = function(event) {
    this.canvas.addEventListener("mousemove", moveMouse, false);
    this.canvas.addEventListener("mouseout", endMouseOver, false);
  }.bind(this);

  var moveMouse = function(event) {
    stage.clearRect(0, 0, this.canvas.width, this.canvas.height);
    stage.putImageData(img, 0, 0);
    mousePos = getMousePos(event);
    var offsetY = -this.y1;

    //Draw the coordinate
    stage.fillStyle="#2980b9";
    stage.beginPath();
    stage.arc(mousePos.x, this.canvas.height-((this.points[Math.round(mousePos.x/this.canvas.width*this.points.length)].y+offsetY)/(this.y2-this.y1))*this.canvas.height, 4, 0, 2*Math.PI);
    stage.closePath();
    stage.fill();
    stage.fillStyle="#000";
    stage.strokeStyle="#FFF";
    stage.lineWidth=4;
    stage.textBaseline="alphabetic";
    var txt="(" + (Math.round(this.points[Math.round(mousePos.x/this.canvas.width*this.points.length)].x*100)/100).toFixed(2) + ", " + (Math.round(this.points[Math.round(mousePos.x/this.canvas.width*this.points.length)].y*100)/100).toFixed(2) + ")";

    if (mousePos.x<stage.measureText(txt).width/2+2) {
      stage.textAlign = "left";
    } else if (mousePos.x>this.canvas.width-stage.measureText(txt).width/2-2) {
      stage.textAlign = "right";
    } else {
      stage.textAlign = "center";
    }
    stage.strokeText(txt, mousePos.x, -10+this.canvas.height-((this.points[Math.round(mousePos.x/this.canvas.width*this.points.length)].y+offsetY)/(this.y2-this.y1))*this.canvas.height);
    stage.fillText(txt, mousePos.x, -10+this.canvas.height-((this.points[Math.round(mousePos.x/this.canvas.width*this.points.length)].y+offsetY)/(this.y2-this.y1))*this.canvas.height);
  }.bind(this);

  var endMouseOver = function(event) {
    this.canvas.removeEventListener("mousemove", moveMouse, false);
    this.canvas.removeEventListener("mouseout", endMouseOver, false);
    stage.clearRect(0, 0, this.canvas.width, this.canvas.height);
    stage.putImageData(img, 0, 0);
  }.bind(this);

  //Returns the canvas element
  this.getCanvas = function() {
    return this.canvas;
  };

  //If canvas drawing is supported
  if (this.canvas.getContext) {

    //Get the canvas context to draw onto
    stage = this.canvas.getContext("2d");
    stage.font = "12px sans-serif";
    this.canvas.style.backgroundColor="#FFF";

    //Make points
    this.update();

    this.canvas.addEventListener("mousedown", startDrag, false);
    this.canvas.addEventListener("mouseover", startMouseOver, false);
  } else {
    console.log("Canvas not supported in this browser.");
    this.canvas = document.createElement("div");
    this.canvas.innerHTML="Canvas is not supported in this browser.";
  }
}

//Module for input checking and parsing
var XCalc = (function() {
  var worker={};

  //Checks to see if brackets are properly nested in a string
  worker.properBrackets = function(value) {
    var openBrackets=0;
    for (var i=0; i<value.length; i++) {
      if (value.substr(i, 1)=="(") openBrackets++;
      if (value.substr(i, 1)==")") openBrackets--;
    }
    return openBrackets===0;
  };

  //Creates a new Section for an expression
  worker.createExpression = function(value) {
    if (this.properBrackets(value)) {
      return new Segment(value);
    } else {
      return 0;
    }
  };

  worker.graphExpression = function(value, width, height, rangeX, rangeY) {
    return new Graph(value, width, height, rangeX, rangeY);
  };

  return worker;
}());

function simplifyText(event) {
  var input = document.getElementById("input").value;
  if (XCalc.properBrackets(input)) {
    document.getElementById("wrapper").className="";
    var timer = setTimeout(function() {
      var graph = XCalc.graphExpression(input, 400, 400);
      document.getElementById("result").innerHTML = "";
      document.getElementById("result").appendChild(graph.getCanvas());
      document.getElementById("wrapper").className="solved";
    }, 800);
  } else {
    document.getElementById("result").innerHTML = "<div class='error'>Error: Improperly nested brackets. Remember to only use round brackets and close all opened brackets.</div>";
  }
}

window.onload = function() {
  document.getElementById("simplify").addEventListener("click", simplifyText);
  simplifyText();
};