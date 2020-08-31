(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 450,
	fps: 24,
	color: "#454545",
	manifest: [
		{src:"images/_420x42001.png", id:"_420x42001"},
		{src:"images/BANH101.png", id:"BANH101"},
		{src:"images/BANH201.png", id:"BANH201"},
		{src:"images/cungkhampha01.png", id:"cungkhampha01"},
		{src:"images/dongtext01.png", id:"dongtext01"},
		{src:"images/nenmay01.png", id:"nenmay01"},
		{src:"images/TGDK01.png", id:"TGDK01"},
		{src:"images/youtobe_fb01.png", id:"youtobe_fb01"}
	]
};



// symbols:



(lib._420x42001 = function() {
	this.initialize(img._420x42001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,875,875);


(lib.BANH101 = function() {
	this.initialize(img.BANH101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,246);


(lib.BANH201 = function() {
	this.initialize(img.BANH201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,201);


(lib.cungkhampha01 = function() {
	this.initialize(img.cungkhampha01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,154);


(lib.dongtext01 = function() {
	this.initialize(img.dongtext01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,875,221);


(lib.nenmay01 = function() {
	this.initialize(img.nenmay01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1297,295);


(lib.TGDK01 = function() {
	this.initialize(img.TGDK01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,420);


(lib.youtobe_fb01 = function() {
	this.initialize(img.youtobe_fb01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,848,192);


(lib.Tween3copy4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("KHÁM PHÁ NGAY", "bold 55px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.setTransform(-0.5,-7.5,0.228,0.228);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.1,-7.4,108.2,14.9);


(lib.Tween2copy4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("KHÁM PHÁ NGAY", "bold 55px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.setTransform(-0.5,-7.5,0.228,0.228);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.1,-7.4,108.2,14.9);


(lib.Symbol24copy3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.BANH201();
	this.instance.setTransform(-118.5,-100.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.5,-100.5,237,201);


(lib.Symbol23copy3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.BANH101();
	this.instance.setTransform(-174,-123);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-174,-123,348,246);


(lib.Symbol17copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnYCGQhXAAAAhZIAAhYQAAhaBXAAIOxAAQBXAAAABaIAABYQAABZhXAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-13.4,112.2,26.8);


(lib.Symbol16copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AnYCGQhXAAAAhZIAAhYQAAhaBXAAIOxAAQBXAAAABaIAABYQAABZhXAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-13.4,112.2,26.8);


(lib.Symbol15copy5 = function() {
	this.initialize();

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.dongtext01, null, new cjs.Matrix2D(1,0,0,1,-440.4,-150.6)).s().p("Eg4wADZIAAmxMBxhAAAIAAGxg");
	this.shape.setTransform(726.5,23.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.dongtext01, null, new cjs.Matrix2D(1,0,0,1,-441.6,-98)).s().p("Eg4JAFAIAAp/MBwTAAAIAAJ/g");
	this.shape_1.setTransform(4.2,17.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-355.3,-14.4,1445.1,64.1);


(lib.Symbol13copy5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.youtobe_fb01();
	this.instance.setTransform(-424,-96);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-424,-96,848,192);


(lib.Symbol12copy5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.TGDK01, null, new cjs.Matrix2D(1,0,0,1,-204.7,-223.6)).s().p("A4yPZIAA+xMAxmAAAIAAexg");
	this.shape.setTransform(-5.3,13.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-164.1,-85,317.6,197.2);


(lib.Symbol10copy11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cungkhampha01();
	this.instance.setTransform(653.5,-91.6,1.09,1.09);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(653.5,-91.6,264.9,167.9);


(lib.Sprite6copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E54035","#FFFFFF"],[0,1],-7.7,-37.5,3.8,11.7).s().p("A4WFJQgRgkAAgkQAAgoATgqQAuhmASg2QAZhIAAg1QAAgagGgZQgThNgIg3QA8CACFA0QCEAzD3gJQD1gIDuglQCAgUCUghQA1gLC1gwQFJhWB/gYQC2giB4gPQCugXCcAAIAtABQDRADCpAoQrwEptwDTQrlCxq1BUQgvgkgVgqg");
	this.shape.setTransform(157.6,40.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,315.3,81.5);


(lib.Shape46copy5 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Shape27copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.702)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0.035,0.353,0.686,1],0,0,0,0,0,46.6).s().p("AlCFDQiFiHAAi8QAAi8CFiGQCGiFC8AAQC8AACGCFQCFCGABC8QgBC8iFCHQiGCFi8AAQi8AAiGiFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.6,-45.6,91.3,91.3);


(lib.Shape26copy5 = function() {
	this.initialize();

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0)","rgba(252,255,204,0.4)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.682,0.729,0.867,1],0,0,0,0,0,44.9).s().p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCACBABC1QgBC2iACBQiBCAi2ABQi1gBiBiAg");

	// Shape Sublayer 0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.6)","rgba(255,255,255,0)","rgba(255,255,255,0.102)","rgba(255,255,255,0)"],[0,0.094,0.886,0.906,0.929],0,0,0,0,0,153.8).s().p("Aw1Q2Qm+m/AAp3QAAp2G+m/QG/m+J2AAQJ3AAG/G+QG+G/AAJ2QAAJ3m+G/Qm/G+p3AAQp2AAm/m+g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152.5,-152.5,305,305);


(lib.Shape25copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,0.094,0.204,1],0,0,0,0,0,7).s().p("AguAvQgUgTAAgcQAAgaAUgUQAUgUAaAAQAbAAAUAUQAUAUAAAaQAAAcgUATQgUAUgbAAQgaAAgUgUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-6.7,13.5,13.5);


(lib.Shape24copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.094,0.682,1],0,0,0,0,0,10.6).s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.2,20.5,20.5);


(lib.Shape23copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0.102)","rgba(252,255,204,0.4)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.682,0.729,0.867,1],0,0,0,0,0,64.2).s().p("Am9G8Qi3i4gBkEQABkEC3i5QC5i3EEgBQEEABC4C3QC5C5ABEEQgBEEi5C4Qi4C5kEABQkEgBi5i5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-63,126,126);


(lib.Shape22copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0.051)","rgba(255,255,0,0.153)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(252,255,204,0.4)"],[0.353,0.682,1,1,1],0,0,0,0,0,14.8).s().p("AhlBmQgqgrAAg7QAAg7AqgqQAqgqA7AAQA7AAArAqQAqAqAAA7QAAA7gqArQgrAqg7AAQg7AAgqgqg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29,29);


(lib.Shape21copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.2)","rgba(255,255,255,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(252,255,204,0.4)"],[0.353,0.682,1,1,1],0,0.1,0,0,0.1,20.4).s().p("AiMCNQg7g6ABhTQgBhSA7g6QA6g7BSABQBTgBA6A7QA7A6gBBSQABBTg7A6Qg6A7hTgBQhSABg6g7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.Shape20copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,0,0.024)","rgba(252,255,204,0.2)","rgba(255,255,255,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.412,0.682,0.729,0.737,0.773,1],0,0,0,0,0,84.6).s().p("ApKJKQjzjzABlXQgBlXDzjzQD0jzFWABQFYgBDyDzQDzDzAAFXQAAFXjzDzQjyDzlYAAQlWAAj0jzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-83,166,166);


(lib.Shape19copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.6)","rgba(255,255,255,0)","rgba(255,255,255,0.102)","rgba(255,255,255,0)","rgba(255,255,0,0.102)","rgba(255,255,255,0.102)"],[0,0,0.886,0.906,0.929,0.945,0.98],0,0,0,0,0,153.8).s().p("Aw1Q2Qm+m/AAp3QAAp2G+m/QG/m+J2AAQJ3AAG/G+QG+G/AAJ2QAAJ3m+G/Qm/G+p3AAQp2AAm/m+g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152.5,-152.5,305,305);


(lib.Shape18copy5 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,0,0.102)","rgba(255,255,255,0.102)","rgba(255,255,255,0.6)","#FFFFFF","#FFFFFF","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0,0,0,0,0,0.176,0.502],0,0,0,0,0,5.8).s().p("AglAjQgRgPABgUQgBgTARgPQAPgPAWAAQAXAAAPAPQARAPgBATQABAUgRAPQgPAPgXAAQgWAAgPgPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-5,11,10);


(lib.Shape9copy3 = function() {
	this.initialize();

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.251)","rgba(255,245,200,0)","#FFD839","rgba(255,255,255,0)"],[0,0.216,0.776,1],-77,0,77,0).s().p("EgMBAgCMAAAhADIYCAAMAAABADg");
	this.shape.setTransform(77,205.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,154,410.1);


(lib.Shape7copy3 = function() {
	this.initialize();

	// Shape Sublayer 83
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D29F2C").s().p("AgJAOQgGgFAAgJQAAgHAFgFQAFgGAGAAIAKAEQAFAEAAAGQAAAEgEACIgMACIgGAAQABADADACIAFACQAHAAAFgDIAAADQAAAIgOAAIgBAAQgEAAgFgFgAgEgIIgCAGIAAABIAFAAIAHgBIACgDQAAgFgIAAQgBAAgDACg");
	this.shape.setTransform(108.5,-25.6);

	// Shape Sublayer 82
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D29F2C").s().p("AgGAOIgBgYIADAAQAFAAAAAHIAAAPQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAIAEABIACAAIAAACQAAAGgFAAIgBAAQgJAAAAgLgAgGgPIgCgDIABgEQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADABIABAEIgBAEQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(105.7,-26.2);

	// Shape Sublayer 81
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D29F2C").s().p("AgMAXIgCgEIgCgVQgBgJAEgGQAFgGAIgBQAGgBAGAGQAFAFAAAHQABAHgEAGQgEAGgIABQgEABgEgGIABARIgCAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAAAgQQgIABABALQAAAEADACQADADACAAIAFgDIACgGQgBgMgHAAIAAAAg");
	this.shape_2.setTransform(102.6,-24.8);

	// Shape Sublayer 80
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D29F2C").s().p("AgJAVQgGgEgBgIQgBgJADgEQAEgGAIgBIAEABIAEADIgCgRIADAAQAGgBABAGIADAYQADASgSACIgCAAQgEAAgFgEgAgBgEIgFAEIgBAGQABAGADADQADADACgBQAHgBgBgKQgCgKgGAAIgBAAg");
	this.shape_3.setTransform(97,-25.4);

	// Shape Sublayer 79
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D29F2C").s().p("AgHAQQgHgFgBgIQgBgHAEgGQAEgGAIgCIAJADQAFADABAGQABAFgEABQgEADgIABIgFABQABADADACIAGABIAKgFIABADQABAIgNACIgEAAQgDAAgEgDgAAAgKIgFADIgBAGIAAABIAEAAIAHgCIABgDQgBgFgFAAIAAAAg");
	this.shape_4.setTransform(93.2,-24.3);

	// Shape Sublayer 78
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D29F2C").s().p("AgIALIgEgUQgBgFACgDIAEgDIACgBIACAJIALgDIAAAEIgBADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgFACIACAMQAAAHAGgBIAGgDIAAAAIABADQABAGgIACIgEAAQgIAAgCgLg");
	this.shape_5.setTransform(90.1,-24.1);

	// Shape Sublayer 77
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D29F2C").s().p("AgHASQgFgDgBgFQgCgKAQgDIADgBIAAAAIgDgFIgEAAQgJABgCAFIAAAAIgBgDQAAgDACgDQADgEAHgBQANgDADAQIACAHQABAFgDAFQgDAEgGABIgCABgAACACQgHABABAFQABAEAEgBQAGgBgBgFIgBgEg");
	this.shape_6.setTransform(86.9,-23.1);

	// Shape Sublayer 76
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D29F2C").s().p("AgJAQQgFgFgCgHQgCgHAEgGQADgHAJgCQAGgBAGAEQAGAEABAIQACAHgEAGQgDAHgJACIgDAAQgEAAgFgDgAgBgJIgFAEIgBAFQADAMAGgCQAIgBgCgJQgCgKgGAAIgBABg");
	this.shape_7.setTransform(83,-22.3);

	// Shape Sublayer 75
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D29F2C").s().p("AgGAQQgHgEgBgIQgCgGAEgHQAEgHAIgCIAHABIAEAFIABAEIgBAAIgKgBQgCABgDADIgBAFQABAFADADQACACAEgBQAHgBACgEIABAAIAAAEQABADgCADIgIAEIgEABQgDAAgFgDg");
	this.shape_8.setTransform(79.3,-21.6);

	// Shape Sublayer 74
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D29F2C").s().p("AgGAQQgHgEgCgHQgCgIAEgGQADgHAIgCIAJACQAGADABAGQABAGgDABQgEACgIACIgFABQABADAEACIAFABQAHgCADgEIABAAIAAACQACAJgNACgAgBgKIgFAEIgBAFIABABIAEAAIAGgCIABgEQgBgEgEAAIgBAAg");
	this.shape_9.setTransform(73.9,-20.4);

	// Shape Sublayer 73
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D29F2C").s().p("AgIALIgEgUQgBgEACgEIADgDIACgBIACAJIALgDIABAEIgBADIgEACIgFACIACAMQABAHAFgCIAHgDIAAAAIABAEQABAGgIABIgFABQgHAAgDgLg");
	this.shape_10.setTransform(70.6,-20);

	// Shape Sublayer 72
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D29F2C").s().p("AgHASQgFgDgBgFQgCgKAQgDIADgBIAAAAIgDgFIgEAAQgJACgCAFIAAAAIgBgDQgBgEADgDQADgEAGgBQAOgEADARIACAGQACAGgDAFQgEAEgGABIgBABgAACACQgGABABAFQABAFAEgCQAGgBgCgGIAAgDg");
	this.shape_11.setTransform(67.3,-18.9);

	// Shape Sublayer 71
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D29F2C").s().p("AgEAOIgIgjIACgBQAHgCABAHIAFAcIACAEIAFAAIADgBIAAACQABAGgGABIgEAAQgGAAgCgJg");
	this.shape_12.setTransform(64.5,-18.8);

	// Shape Sublayer 70
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D29F2C").s().p("AgJAQQgFgFgCgHQgCgHAEgGQADgHAJgCQAGgBAGAEQAFAEACAIQACAHgEAGQgDAHgJACIgDAAQgEAAgFgDgAgBgJQgEAAgCAEIAAAFQACAMAHgCQAIgBgCgJQgCgKgGAAIgBABg");
	this.shape_13.setTransform(61.5,-17.6);

	// Shape Sublayer 69
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D29F2C").s().p("AgGAPQgHgEgBgHQgCgHAEgGQAFgHAHgCIAIABIADAFIABAFIAAAAIgLgCQgCAAgCAEQgDADABACIAEAIIAGACQAIgCABgEIABAAIAAAFQABADgDADQgCACgFABIgEABQgDAAgFgEg");
	this.shape_14.setTransform(58.1,-16.9);

	// Shape Sublayer 68
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D29F2C").s().p("AgKAPQgFgEgBgIQgCgGAEgHQAEgHAJgBQAGgBAGAFQAFAFABAHQACAHgEAGQgEAHgJABIgCAAQgFAAgFgEgAgBgKQgDABgCAEQgCADABACQACAMAHgBQAIgBgCgKQgCgKgGAAIgBAAg");
	this.shape_15.setTransform(54.3,-16.2);

	// Shape Sublayer 67
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D29F2C").s().p("AgNATIgFgqIADAAQAHgBAAAGIACALQACgGAEAAQAOgCACAPIADAVIgDABIgFgBQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIgCgPQgBgGgGAAIgDADIgCAFIACAVIgDAAIgBAAQgFAAgBgFg");
	this.shape_16.setTransform(50.3,-16.2);

	// Shape Sublayer 66
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D29F2C").s().p("AgJATQgIgGgBgLQgBgJAHgHQAFgIAJgBIAKACIAFAHIAAAEIgOgFQgEABgEAFQgEAEABAFQABAIAEAEQADAEAGgBQAIAAAEgFIABAAIAAADQAAAFgEADIgJADIgDAAQgGAAgGgFg");
	this.shape_17.setTransform(46.2,-15.9);

	// Shape Sublayer 65
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D29F2C").ss(0.6).p("AgdARIAAgBIAAgBIgBABIgBAEIAAABIAAADQACACAEAAIAIgBQAGgBAGgEIAQgHQAOgHAHgMIAAgBIAAgEIgDAHIgJAJIgPAKIgKAFIgNAEQgIABgDgBQgCgBAAgDIABgCg");
	this.shape_18.setTransform(63.3,-60.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D29F2C").s().p("AgfARIAAgDIAAgBIABgEIABgBIAAABIAAABIgBABIgBACQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQADABAIgBIANgEIAKgFIAPgIIAJgLIADgHIAAAEIAAABQgHANgOAGIgQAHQgGAEgGABIgIABQgEAAgCgCg");
	this.shape_19.setTransform(63.3,-59.6);

	// Shape Sublayer 64
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D29F2C").ss(0.6).p("AAKACIgEAAIABAAIAAAAIACgBIAAAAIABABIAAAA");
	this.shape_20.setTransform(66.3,-61.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D29F2C").s().p("AgBAAIABAAIAAAAIABAAIAAAAIABAAg");
	this.shape_21.setTransform(67.1,-61.7);

	// Shape Sublayer 63
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D29F2C").ss(0.6,0,0,60).p("AAAAAIAAAA");
	this.shape_22.setTransform(64.6,-60);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D29F2C").ss(0.6).p("AAKgSIAAABIgBgBIgCgBIgCACIAAABIgBgBIgDACIAAABIgBgBIgCACIAAACIgBAAQgCAAgBABQAAABABACIgDAAIgBABIAAACIgBAAIgBABIgBACIAAABIgBAAIgBAAIAAACIABgCIACAAIACAAIAAACQgCACgDgCIgBAAIgBACIAAABIgBABIgBACIAAABIgBABIAAACIgBACIABABIAAAAIgBABIAAABIAAAAIABAAIABABIACgBIABAAIABgCIABABIAEgBIAAgCIABABQABABACgCIABgCIAAAAIABABIADAAQAAgBAAgCIAAgCIABABIADABIADgCIAAgEQACADACgBIAEgDIgBgBIgBgBIAAgCIACgCIADACIABACIAAgBIADAAIABgDIACgBIAAgCIACgCIAAgCIACgDIgCgBIgCAAIAAgBIAAAAIgBAAIAAAAIAAgBIABABIAAAAAAEgRIACADIAAACIgDACIgBgCIgBgCIABgCgAAHgSIACAAIABAEIgBACIgCAAIgBgCIAAgDgAAOgSIgCgBIgCABIACgBIACABIAAACIgBACIgCAAIgBgCIAAgCAASgRIAAACIgDAAQgBgCABgBIACAAgAATgSIACABIAAABIgCAAIAAgBgAAWgRIgCgBIgBABIgCgCIgCABIgBAAIAAAAAAYgRIAAAAIgBAAIgBAAIABAAIAAABIAAAAIgBAAIAAgBAAWgRIAAAAAAcgLQgCACgBgCQgBgEADABQACAAgBADgAAZgNIAAADIgBABIgCAAQgCAAAAgDIABgCIADAAgAAbgKIAAAAQAAACgBgBgAAPgMQAAgCACAAIACABIABADIgBADIgCAAIgCgCgAAUgGIABABIABABIAAACIgCABIgCgCgAAZgHIgBgBIACgBIAAABIAAABIgBAAIgBABQgBACgBgCIAAgBIABgBgAAOgKIABADIgDADQgDAAgBgDQgBgEAEgBgAAFgIIACABIABAEIgDACIgDgCIAAgDgAADgBIgCABIgBAAIgBgBIAAgCIABgBIACABgAALAAIACAAIABACIgBACQgBABgCAAQgBAAgCgBQgBgCABgCIABAAgAAHAHQgBABgDABIgDgDQAAgCABgCIAFABgAARABIACgBAAPABIACAAIAAAAIABAAIABgBAAOABIABAAAgBgJIABACIgCACQgBAAgBgBIgBgDQAAgCACAAIACACIAAgDIABgCIABABIABADIgBABIgBABQAAAAgBgBgAgEgGIABACIgBACIgCAAQgDgBAAgCIACgCgAgJgDIACABIABACIgCAAIgCAAIgBgBIAAgCgAgNACIABACIgBACIgCAAIgBgBIACgDgAgQAGIACAAIgBADIgBAAIgBgBgAgQALIgCABIAAgDIABAAIABABgAgLAFIACAAIABABQABACgCABQgCAAAAgCgAgOAMIgCACIAAgCIABgBgAgKANIAAABQAAACgDAAIgBgCQABgCACAAgAgMALIgDAAQgBgCADgBIACABgAAAAAIgCADIgCgBIgCgCIADgBIACABgAgEAEIgCACIgDgCIAAgCIACgBIADACgAgFANQgCABgBAAQgBAAgBgCIABgCIAEAAgAgFAHIAEgCIABAEIgCADIgCgCgAgQAQIAAgBIACAAIgBABIgBAAIgBABQgBAAAAAAIABgBgAgRAOIAAABQAAABgBgBIAAgBgAgTAPIAAgBIAAgCIgBACQAAABABAAgAgUARIAAgBIABAAIAAABg");
	this.shape_23.setTransform(63.1,-60.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D29F2C").s().p("AgXASIgBABIABgBIAAgBIgBABIAAgBIABgBIAAAAIAAgBIAAgCIgBACIAAAAIAAAAIABgCIAAgCIABgBIAAAAIABgDIACgBIAAgBIABgCIABAAIAAAAIgBAAIgBADIABABIABAAIABgCIAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAAgBIgCgCIgCAAIAAADIgBgCIABgBIABAAIAAAAIABgCIABgBIABAAIAAgBIABgCIADAAIAAgDQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIABAAIAAgCIAEgBIABAAIAAAAIABgCIAAACIAAACIAAACIACgCIAAgCIgCgCIAAAAIAAgBIABABIAAAAIACgDIACABIABABIABgBIAAADIABABIABAAIABgBIAAgDIAAABIABgBIADgBIABACIAAAAIAAABIABABIABAAIAAgCIgBAAIABgBIABACIAAABIABAAIAAgBIAAAAIgBgBIABAAIABABIAAAAIAAAAIAAABIABgBIAAABIAAABIACgBIACABIAAABIgBgBQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABQABAAAAABQAAAAAAAAQAAAAABAAQAAAAABgBIAAAAIgBABIAAAAIAAABIAAAAIAAABIgBAAIABAAIgBgBIgCABIABABIgCAAIgBAAIAAACQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABgCIABAAIgBABIAAABIgCABIgBADIgBAAIABgBIAAgCIgBgBIgBAAIgCACIACACIAAAAIAAAAIgCgBIgDgCIgCACIAAABIABACIABABIgCACIABgCIgBgCIgCgBIgCAAIgCACIAAADIAEABIABAAIAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBIAAAEIgBgEIgCgBQgBABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIACADIgBAAIgBgBIABABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgCAAIAEgDIgDgEIgDADIAAADIACABIgBAAIgBgBIAAAAIgBACIABgCIgFgBIgBACIABACIAAgBIAAACIgBAAIAAgBIAAgBIgBgBQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAACIAAAAIAAgBIgBACIgCAAIAAAAIAAAAIACAAIAAgCIgBAAIgBACIAAAAIgCAAIABAAIgBABgAgWAQQAAABAAAAQABAAAAAAQAAAAAAAAQAAgBABAAIgBgBIgBAAgAgUANIAAACIACgCIAAgBgAgWANIACgBIABAAIgBgBIgCAAgAgSAMIACAAIABgCIgCAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABABAAgAgPAJQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIgCgBIgCAAgAgVAKIABAAIACAAIAAgDIgCAAgAgNADIAAACIADACIACgCIAAgBIgDgCgAgJABIABACIACABIACgCIgBgCIgCAAgAgPgCIAAACIABABIACABIACgCIgBgBIgCgBgAgFgCIAAACIABAAIAEABIAAgBIAAgCIgCgBgAAAgEIAAACIABACIADgCIgBgDIgCgCgAgNgEQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIACAAIABgCIgBgBIgCgCgAAFgGQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIADgDIgBgDIgDgCQgEABACAEgAgJgHIABACIACABIACgBIgBgDQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIACgBIAAgCIAAgDIgCgBIgDACIAAADIgCgCQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABgAALgLIAAAEIACACIADgBIAAgDIAAgDIgCgBQgBABAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAgAARgLQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAABIACAAIABgCIAAgDIgBgBIgDAAgAACgPIAAACIABACIACAAIABgCIAAgDIgDgBgAALgQQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIADAAIABgCIgCgBgAgVASIABAAIAAABIgBgBgAgYASIAAAAIAAABgAgRARIAAAAIADgBIgCABIgBAAgAgYAPIABABIgBgBgAgMAPIAAAAIABAAIACgBIgCABIgBAAgAgNAPIABAAIgBAAgAAAAKIAAAAIAAAAgAAAAKIAAAAIAAAAgAADAIQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAgAAJAFIAAAAIgBABgAgRADIAAAAIABABIgBgBgAAOACIACgCIgCACgAANACIABAAgAALACIAAAAgAAQAAIABAAIgBAAgAAWgGIAAgBIAAABgAAXgJIABAAIgBABgAAZgMIgBACIAAAAgAAAgPIAAAAIAAAAgAAVgPIAAAAgAAQgQIAAAAIgBAAgAAIgSIgBABIABgBIACABg");
	this.shape_24.setTransform(63.5,-60.2);

	// Shape Sublayer 62
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D29F2C").ss(0.6).p("AAAAAIAAAA");
	this.shape_25.setTransform(60.2,-58.4);

	// Shape Sublayer 61
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D29F2C").ss(0.6).p("AgtADIAFgKQAEgJAHgIQAIgKAOgBIAPADIAGADIACABIADAAIADAAIABAAIgBAAIgFgBIgDAAIgCgCIgBgBIgBAAIgDgBIgEgBIgEgBQgUgCgJANIgIALIgGAKIgFALQgBACABACIAEACIAEABIAIABIAHAAIAGgBIALgCQAHgCAGgHQAIgFACgHIABgDIABgFIABgCIAAgGIADgBIADAAIABgBIgFAAIABAAIABAAIgEABIgBAAIAAAEIAAACIgCAKQgEAJgHADIgNAIIgJACIgOACIgMgCIgCgCIgBgCIABgBIAAgBIABgEIABgBIAAAAg");
	this.shape_26.setTransform(64.9,-58.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D29F2C").s().p("AgUAaIgIgBIgEgBIgDgCQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAGgNIAFgIIAIgMQAKgMASABIAGABIAEABIADABIAAABIACABIACABIADABIAEABIgDAAIgDgBIgBAAIgGgEIgSgCQgLABgJAKQgHAIgEAHIgEALIgBgBIAAABIgCAEIAAABIAAACIAAACIACACIANABIANgBIAHgCIAQgJQAHgFADgIIACgJIABgBIgBgEIACgBIACgBIAAABIAEAAIgBAAIgDAAIgDABIAAAGIAAACIgBAGIgBAAQgDAIgHAHQgIAGgIACIgIACIgHABgAgfANIAAAAIgBABgAAigQIAAAAIgBAAgAAjgRIACgBIgBABg");
	this.shape_27.setTransform(63.6,-60);

	// Shape Sublayer 60
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D29F2C").ss(0.6,1).p("AAAAAIAAAA");
	this.shape_28.setTransform(67.4,-61.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#D29F2C").ss(0.6,1).p("AAAAAIAAAAAAAAAIAAAB");
	this.shape_29.setTransform(67.4,-61.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#D29F2C").ss(0.6).p("AgCADIAAAAIAAAAgAgCAGIAAgBIABAA");
	this.shape_30.setTransform(67.7,-62.3);

	// Shape Sublayer 59
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#D29F2C").ss(0.6).p("AgUgVQAEAKAMAJIABABIAIAGIANAPIADgDIgGgFIgGgGIgLgJQgLgIgDgKIgCgBg");
	this.shape_31.setTransform(68.1,-66.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D29F2C").s().p("AAFAGIgIgGIgBgBQgMgJgEgKIACAAIACABQADAJALAJIALAIIAGAGIAGAFIgDAEg");
	this.shape_32.setTransform(68.1,-66.8);

	// Shape Sublayer 58
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D29F2C").ss(0.6).p("AADgEIADAEIABAHIAAgHIgDgFIgEgHIAAgEIAAADg");
	this.shape_33.setTransform(67.7,-64);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D29F2C").s().p("AACADIgCgDIgCgIIgBgDIACAEIACAHIADAFIAAAHg");
	this.shape_34.setTransform(68.1,-64.5);

	// Shape Sublayer 57
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#D29F2C").ss(0.6,1).p("AgBAmIABgKIAAgJIACgFIABgIIAAAGIgCAIQgDAMABAGg");
	this.shape_35.setTransform(68.2,-63);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#D29F2C").ss(0.6,1).p("AAAAAIAAAB");
	this.shape_36.setTransform(68,-59.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D29F2C").s().p("AgBAJIAAAGIAAgGgAAAAFIAAgGIACgFIABgIIAAAGIgCAHIgCAKg");
	this.shape_37.setTransform(68.2,-60.8);

	// Shape Sublayer 56
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#D29F2C").ss(0.6).p("AgUgHIAAACIABACIADADIACACQABAEACABQABACADAAQgEgCgCgFIgCgCIgDgEg");
	this.shape_38.setTransform(68.8,-60);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D29F2C").s().p("AACAHQgCgCAAgDIgBgCIgCgEIgCgCIABgCIACAEIACADIAAACQACAGAEACIgEgCg");
	this.shape_39.setTransform(67.3,-60);

	// Shape Sublayer 55
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D29F2C").ss(0.6).p("AgaAQIADABIAAABIAAgBQgDgJACgHIADgFIAFgFIAFgDIAEgDIgKAFIgFAFIgEAGQgCAHACAIg");
	this.shape_40.setTransform(68.5,-64.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D29F2C").s().p("AgFARIgDgBQgCgJACgHIAEgGIAEgFIAKgFIgFADIgEAEIgDAEIgEAFQgBAHACAJIABABg");
	this.shape_41.setTransform(66.6,-64);

	// Shape Sublayer 54
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#D29F2C").ss(0.6).p("AgHgWIAAAAIgBABIACAEIACAFIABAFIAAAFIACAFQgCgDABgHIAAgFIgDgFg");
	this.shape_42.setTransform(68.2,-59.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D29F2C").s().p("AACAIIABAFIgBgFgAABAGIAAgEIgBgEIAAgEIgCgFIABgBIAAAAIABAFIACAFIAAAEIAAAGg");
	this.shape_43.setTransform(67.6,-60.3);

	// Shape Sublayer 53
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D29F2C").ss(0.6).p("AgKAEIgDAGQgBAEAAAJIAAACQAAAGADAHIABgBIgCgLIABgCIgBgGIABgIIACgGIADgEg");
	this.shape_44.setTransform(68.4,-65.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D29F2C").s().p("AgCAHIAAgCQgBgHABgFIACgFIADgGIgDAGIAAAFIAAAHIAAAFIAAACIAAALIAAABQgDgHABgFg");
	this.shape_45.setTransform(67.3,-63.8);

	// Shape Sublayer 52
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#D29F2C").ss(0.6).p("AAbgOIgHgIIgJgEQAKAEADAGQAEAHgBAHIgCAKIAAABIgDAOIgFAJQgDAFABACIAHgKQAGgLAAgJIAAgBIABgKg");
	this.shape_46.setTransform(66.5,-63);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D29F2C").s().p("AgCAaIAEgJIACgOIAAgBIACgKQACgHgFgHQgCgEgDgEIACACIAGAIIADAMIgBAKIAAABQgBAJgGALIgFAKQAAgCACgFgAgHggIAFACg");
	this.shape_47.setTransform(68.6,-62.4);

	// Shape Sublayer 51
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#D29F2C").ss(0.6).p("AgWgFIAAAIIACABQgBgJADgIQADgHAIgEIAHgEIACgCIAAgBIAAgDIABAAIAAAEIAAACIAEACIAJAGQAEAEABALQACALgEAMQgCAIgKALIgCACIgBgBQgCAAgCgCIgBgCIgHgHIgBADIAFAEIAGAFQAFACACgDIALgUQAFgJgDgOQgCgSgNgFIgDgBIAAgCIAAgGIgCgCQgCgBAAACIAAAGQAAACgBABIgHADIgEADIgIAKg");
	this.shape_48.setTransform(67.4,-62.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D29F2C").s().p("AACAnIgGgFIgFgEIABgDIAHAHIABACIAEACIABABIACgCQAKgLACgIQAEgMgCgLQgBgLgEgEIgJgGIgEgCIAAgCIAAgEIgBAAIAAADIAAABIgCACIgHAEQgIAEgDAHQgDAIABAJIgCgBIAAgIIACgIIAIgKIAEgDIAHgDQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgGQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIACACIAAAGIAAACIADABQANAFACASQADAOgFAJIgLAUQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEgBg");
	this.shape_49.setTransform(67.4,-62.9);

	// Shape Sublayer 50
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#D29F2C").ss(0.6).p("AAIgYIgBACIgBADIgBAGIgEALIADgGIACgHIABgHIABAAg");
	this.shape_50.setTransform(64.8,-63.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D29F2C").s().p("AAAAAIABgFIABgDIABgBIAAABIgBAAIgBAHIgBAFIgCAGg");
	this.shape_51.setTransform(65.3,-65.1);

	// Shape Sublayer 49
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#D29F2C").ss(0.6,1).p("AADgDIgCADIgBABIAAABIgCAC");
	this.shape_52.setTransform(58.9,-63.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#D29F2C").ss(0.6).p("AABAAIgBAB");
	this.shape_53.setTransform(58.9,-63.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#D29F2C").ss(0.6).p("AgIAHIAAgBIABgBIAAgBIgBABIAAABIgBAAIAAACIgCAD");
	this.shape_54.setTransform(60.2,-64.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D29F2C").s().p("AgBADIABgBIgBACgAAAABIAAgBIAAgBIABgBIAAgBIABAAIAAAAIgBABIAAABIgBABIAAACg");
	this.shape_55.setTransform(59.1,-63.5);

	// Shape Sublayer 48
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#D29F2C").ss(0.6,1).p("AgFAHIADgCIACgCIABgEIADgEIACgB");
	this.shape_56.setTransform(60.2,-63.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#D29F2C").ss(0.6).p("AAFgEIgBAAIgBAAIAAABIgBABIgCADIgDAG");
	this.shape_57.setTransform(60.2,-63.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D29F2C").s().p("AAAABIABgEIABgBIAAgBIABAAIACAAIgCABIgDAEIgBAEIgDACg");
	this.shape_58.setTransform(60.3,-63.6);

	// Shape Sublayer 47
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D29F2C").ss(0.6,1).p("AgPAQIADgDIACgCIADgHIADgEIAAgBIABAAIAAgBIgCABIAAABIgBAAIgDAG");
	this.shape_59.setTransform(62.3,-64.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#D29F2C").ss(0.6).p("AABgCIgBAF");
	this.shape_60.setTransform(61.2,-63.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D29F2C").s().p("AAAABIABgEIAAgCIABgBIACgBIgBABIAAAAIgBABIgCAFIgCAGIgBACg");
	this.shape_61.setTransform(61.5,-63.9);

	// Shape Sublayer 46
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#D29F2C").ss(0.6).p("AAIggIABgBAAIggIAAAAIAAAAIAAAAIAAABIgBABIgBAHIgDAJIgDAHIAEgNIACgHIAAgDIABgBg");
	this.shape_62.setTransform(62.2,-62);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D29F2C").s().p("AAAAAIABgGIABgDIAAgBIACgBIgBABIAAABIgCAHIgBAHIgDAHgAAEgLIAAAAIAAAAg");
	this.shape_63.setTransform(62.7,-64.1);

	// Shape Sublayer 45
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D29F2C").ss(0.6).p("AAAgLIAAADIgBAIIgEALIADgIIACgGIAAgHIABgDIgBABg");
	this.shape_64.setTransform(63.9,-64.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D29F2C").s().p("AAAAAIABgGIABgDIABgBIABgCIgCAEIgBAHIgBAGIgDAHg");
	this.shape_65.setTransform(63.7,-64.4);

	// Shape Sublayer 44
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#D29F2C").ss(0.6).p("AANggIgCACIgBAEIgBAHIgFANIAEgIIACgIIACgHIABgDIABAA");
	this.shape_66.setTransform(63.7,-62.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D29F2C").s().p("AAAAAIABgGIABgEIACgBIgBACIgCAHIgBAHIgDAHg");
	this.shape_67.setTransform(64.6,-64.8);

	// Shape Sublayer 43
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#D29F2C").ss(0.6,1).p("AgIgCIADABIAFABIAHADIABAAIABgB");
	this.shape_68.setTransform(64.7,-66.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D29F2C").ss(0.6).p("AAIACIgCAAIgFgCIgFgBIgDAA");
	this.shape_69.setTransform(64.9,-66.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D29F2C").s().p("AAFACIgFgCIABAAIAFABIACABIgCAAgAAAAAIAAAAIAAAAgAgHgBIADAAIAEABg");
	this.shape_70.setTransform(64.9,-66.5);

	// Shape Sublayer 42
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#D29F2C").ss(0.6).p("AgEgCIgBAAIAAABg");
	this.shape_71.setTransform(58.6,-63.6,1,1,0,0,0,-1.4,0);

	// Shape Sublayer 41
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#D29F2C").ss(0.6).p("AgKABIAIgBIADAAIABAAIABAAIABAAIABgBIgDABIgCAAIgFAAIgDAAg");
	this.shape_72.setTransform(58.8,-63.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D29F2C").s().p("AgGAAIAEAAIADAAIAEAAIADAAIgBAAIgBAAIgBAAIgCAAIgDAAIgHABg");
	this.shape_73.setTransform(58.5,-63.8);

	// Shape Sublayer 40
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#D29F2C").ss(0.6).p("AgDAAIAJAAIAGABIACABIABAAIABgBIABAAIgDAAIgFgBIgHAAIgCAAg");
	this.shape_74.setTransform(59.1,-64.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D29F2C").s().p("AAHABIgCgBIgFAAIgKAAIADAAIAEAAIAFAAIAFAAIAEAAIgBABIgCAAg");
	this.shape_75.setTransform(59.8,-64.4);

	// Shape Sublayer 39
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#D29F2C").ss(0.6).p("AgEgCIgBAAIAAABg");
	this.shape_76.setTransform(61.1,-64.3,1,1,0,0,0,-1.4,0);

	// Shape Sublayer 38
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#D29F2C").ss(0.6,1).p("AAFABIgFgBIgEAA");
	this.shape_77.setTransform(60.3,-65.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#D29F2C").ss(0.6).p("AgIAAIAGABIACABIAAgBIAAAAIAAAAIgFgBIgHgCIgDAA");
	this.shape_78.setTransform(61.8,-64.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D29F2C").s().p("AAEABIgEgBIABAAIAGACIABAAIAAAAIgBABgAAAAAIAAAAIAAAAgAgHgCIACABIAFABg");
	this.shape_79.setTransform(61,-64.9);

	// Shape Sublayer 37
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#D29F2C").ss(0.6,1).p("AALAAIAAABIgBAAIgCAAIgBgBIgHAAIgFgBIgFAA");
	this.shape_80.setTransform(62,-65.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#D29F2C").ss(0.6).p("AgEACIABAAIABgBIgBAAIgBAAIgBAAIgDgBIgDAAIgIgBIgCAA");
	this.shape_81.setTransform(63.6,-65.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D29F2C").s().p("AAFABIgCAAIgEgBIgHgBIACAAIAGABIADAAIADABIABAAIABAAIABAAIgBAAIgBABgAAIABIgBAAg");
	this.shape_82.setTransform(62.3,-65.5);

	// Shape Sublayer 36
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#D29F2C").ss(0.6,1).p("AgKgCIAFABIAFABIAHACIACABIABAAIABAA");
	this.shape_83.setTransform(62.9,-66);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#D29F2C").ss(0.6).p("AAEADIABgBIgBAAIgBAAIgEgCIgIgBIgDAA");
	this.shape_84.setTransform(63.5,-66);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D29F2C").s().p("AAIADIgCgBIgCgBIgEgBIgIgCIADAAIAGACIAGACIABAAIABAAIgBABg");
	this.shape_85.setTransform(63.1,-65.9);

	// Shape Sublayer 35
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#D29F2C").ss(0.6).p("AgEgCIgBAAIAAABg");
	this.shape_86.setTransform(63.3,-65.3,1,1,0,0,0,-1.4,0);

	// Shape Sublayer 34
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#D29F2C").ss(0.6,1).p("AgLgBIAFAAIAGABIAGACIADAAIABAAIACAA");
	this.shape_87.setTransform(63.9,-66.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#D29F2C").ss(0.6).p("AAJACIAAAAIgDAAIgGgCIgGgBIgDAA");
	this.shape_88.setTransform(64.1,-66.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D29F2C").s().p("AAHACIgDgBIgFgBIgIgBIADAAIAGABIAGABIADABIAAAAIgCAAg");
	this.shape_89.setTransform(64.1,-66.3);

	// Shape Sublayer 33
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#D29F2C").ss(0.6).p("AAAAAIAAAA");
	this.shape_90.setTransform(65.1,-66);

	// Shape Sublayer 32
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#D29F2C").ss(0.6).p("AABACIgBABIAGgCIABgBIgBAAIgBAAIgEACIAAAA");
	this.shape_91.setTransform(64.9,-66.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D29F2C").s().p("AgBAAIABAAIABAAIACAAIgCAAIgDABg");
	this.shape_92.setTransform(65.4,-66.1);

	// Shape Sublayer 31
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#D29F2C").ss(0.6,0,0,60).p("AAAAAIAAAA");
	this.shape_93.setTransform(59.4,-63.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#D29F2C").ss(0.6).p("AALAAIAAgBIgBgBIgKACIAAAAIAAAAIAAABIAEgBgAAAAAIAAAA");
	this.shape_94.setTransform(59.4,-64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D29F2C").s().p("AgFABIACgBIgBAAIAJgBIABAAIAAABIgGAAIgFACgAgEAAIAAAAg");
	this.shape_95.setTransform(59.9,-64);

	// Shape Sublayer 30
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#D29F2C").ss(0.6).p("AAHgBIABgBIAAAAIgCAAIgGACIABAAIgBAAIAAAAIAGgBg");
	this.shape_96.setTransform(63.2,-65.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D29F2C").s().p("AgDAAIACAAIgCAAIAFgBIACABIAAAAIgBAAIgBAAIgFACg");
	this.shape_97.setTransform(63.5,-65.4);

	// Shape Sublayer 29
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#D29F2C").ss(0.6,1).p("AgEACIAHgCIABgBIABAA");
	this.shape_98.setTransform(62.5,-65);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#D29F2C").ss(0.6).p("AAQgFIgCAAIgGAEIgFABIABAAIAAAAIABAAIAAAAIgCAAIABAAIABAA");
	this.shape_99.setTransform(61.4,-64.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D29F2C").s().p("AgEADIABAAIgCAAgAgEACIAAAAIgBAAIAFgCIAEgCIACAAIgBABIgBABIgHACg");
	this.shape_100.setTransform(62.4,-65);

	// Shape Sublayer 28
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#D29F2C").ss(0.6).p("AgBACIgBABIAHgDIACAAIgCAAIAAAAIgHACIABAAIAAgBIAAABIABAAg");
	this.shape_101.setTransform(64.3,-65.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D29F2C").s().p("AgDABIABAAIgBAAIAAgBIAGAAIAAAAIACgBIgCABIgHACgAgEABIABgBIAAABgAgDAAIAAAAIAAAAg");
	this.shape_102.setTransform(64.5,-65.8);

	// Shape Sublayer 27
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#D29F2C").ss(0.6).p("AAHgCIgBAAIgBACIAKgEIAAgBIAAAAIgBAAIgKADg");
	this.shape_103.setTransform(60.1,-64);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D29F2C").s().p("AgCABIABgBIgDAAIAIgBIAAAAIABAAIgBABIgHACg");
	this.shape_104.setTransform(61.2,-64.4);

	// Shape Sublayer 26
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#D29F2C").ss(0.6).p("AAAgGIAMgGIAAgBIgBABIgBAAIgOAIIgDAEIgBABIACgBg");
	this.shape_105.setTransform(58,-62.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D29F2C").s().p("AgJAFIAEgEIANgGIABAAIACgBIgBABIgKAFIgHAEIgDADg");
	this.shape_106.setTransform(58.1,-63.1);

	// Shape Sublayer 25
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#D29F2C").ss(0.6).p("AADACIAHgCIACAAQABgBgDgBIgIACIABAAg");
	this.shape_107.setTransform(65.3,-66.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D29F2C").s().p("AgCABIgBAAIAFgCQABAAAAAAQABABAAAAQABAAgBAAQAAAAAAABIgBAAIgGABg");
	this.shape_108.setTransform(66.1,-66.4);

	// Shape Sublayer 24
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#D29F2C").ss(0.6).p("AhCAEQADgGAOgMQAFgFAIgDQAIgDADgCQAFgFAKgCIALgCIANADIAIABIADgBQADABgBADIgCAAIgDAJIAEgEIADgHQABgBACgBIAEABIAAgDQAAgCACABIgBgBIgFADIgFAAIgMAAIgOgDIgLABQgKACgGAFIgMAHIgMAHQgNAMgDAGIgBAFIAAABIABgBIAFgDQAIgCAUACIAegCQAHgCAIgEIABgEIgBABQgOAGgHACIgfACIgVABQgFABgBACg");
	this.shape_109.setTransform(63.8,-63.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D29F2C").s().p("Ag0AWIABgFQADgHANgKIANgIIALgHQAGgFAIgBIANgBIAOACIAMABIAGgBIAEgDIABABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABgBAAIAAAEIgDgBIgEACIgDAHIgEADIAEgJIABAAQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDACIgHgCIgOgCIgNABQgIADgEAEQgEADgHADQgJADgFAEQgOALgDAHIgBAFQABgDAFgBIAEAAIgEABIgFACIgBACgAgjATIAKgBIAegBQAGgCAQgIIABgBIgBAEQgIAGgJACIgcACIgRgBgAgjATIgHAAIAHAAg");
	this.shape_110.setTransform(62.3,-64.6);

	// Shape Sublayer 23
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#D29F2C").ss(0.6).p("AgBACIAFgCQACAAABgCIAAgCIgEgBQgCABgBABg");
	this.shape_111.setTransform(66.7,-65.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D29F2C").s().p("AgBgBIACgCIAEABIAAACQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgFADg");
	this.shape_112.setTransform(67,-66.1);

	// Shape Sublayer 22
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAwBTQgOAAgKgIQgMgIgJgUIgVgyIgGgLIgCgFIgEBjIgSgBQgJAAgHgHQgHgHAAgMIAHiJIAUABQAhACAMAiIAaA7IAFhbIATABQAIAAAGAGQAHAGgBAKIgGCMg");
	this.shape_113.setTransform(113.8,-46.2);

	// Shape Sublayer 21
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgYAiQgIgGAAgLQgBgNAMgHQgGgIAAgFQgBgIAGgGQAFgGAKgBQAHgBAFAFQAFAEABAJQABAMgMAIIAJAKQAFgIAAgIIAEAAIAFACIADAEQAAAJgHAKQAGAGAJgBIAAACQAAAKgJAAQgHABgEgEIgEgDQgGAIgKAAIgCAAQgJAAgHgEgAgPAOQABAKAJgBQAEAAABgDIgMgOQgDAEAAAEgAgLgSQAAAEAEAFQAGgEgBgGIgBgEIgEgBQgEABAAAFg");
	this.shape_114.setTransform(102.4,-41.6);

	// Shape Sublayer 20
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgjBQQgIgHgCgNIgRiAQAagLAUgCIAQgCQAYgEARAMQASAMADAZQAEAagPAQQgOASgZAEQgMABgGgBIAGA4IgSACIgEABQgHAAgGgFgAgHguIgIACIAEAkQAHABAIgBQATgCgDgTQgBgMgGgEIgNgDg");
	this.shape_115.setTransform(94.1,-45.3);

	// Shape Sublayer 19
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgiA7QgXgPgFgcQgHgdAOgYQAOgXAdgGQAYgGAWAPQAXAOAGAdQAHAegNAWQgOAWgfAHQgHACgFAAQgTAAgPgKgAgHgfQgJACgEAKQgFAKADALQAIAjAVgFQAKgCAEgKQAFgJgDgMQgEgRgIgIQgHgFgFAAIgGAAg");
	this.shape_116.setTransform(75.7,-40.3);

	// Shape Sublayer 18
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgYA6QgWgOgHgdQgGgbANgXQAOgYAegHQAMgEANAHQAMAGADAMIAEAQIgBAAIgMgEIgRABQgOAEgGAJQgHAKAEALQADAQAIAHQAKAGAOgEQARgDAKgKIABAAIADANQADANgJALQgJALgRAEQgIACgIAAQgPAAgQgKg");
	this.shape_117.setTransform(63.9,-37.9);

	// Shape Sublayer 17
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgkA5QgWgPgFgcQgGgeAPgXQAPgWAdgGQAYgEAWAOQAWAQAGAdQAGAegOAVQgPAWgfAGIgLACQgTAAgQgMgAgGgfQgJABgFAKQgFAKADALQAGAkAWgFQAKgCAFgJQAEgKgCgLQgDgRgJgIQgGgGgHAAIgEAAg");
	this.shape_118.setTransform(51.2,-34.9);

	// Shape Sublayer 16
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgvBSQgHgGgBgOIgOiSIAOgBQANgBAIAGQAIAGABAMIADAiQAKgUAXgCQATgCAPANQAPAPADAYIAHBNIgQACQgQABgHgHQgFgFgBgOIgEgrQgDgZgSACQgKABgEAHQgEAFACAOIAGBGIgOABIgGAAQgLAAgGgEg");
	this.shape_119.setTransform(37.5,-35);

	// Shape Sublayer 15
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAJBVQgfgCgWgYQgYgZACgjQADglAXgYQAZgYAkACQAWABANAMQAMALgBARIgBARIgBAAIgSgNIgZgGQgUgBgKALQgOAMAAAUQgCAWAMAOQAMAMARABIAZgDQANgDAGgGIABAAIgBAQQgBARgOAJQgNAJgTAAIgFAAg");
	this.shape_120.setTransform(23,-34.1);

	// Shape Sublayer 14
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D29F2C").s().p("AADAEIgLgEIABgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAKADIgBACQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_121.setTransform(92.1,-69.7);

	// Shape Sublayer 13
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D29F2C").s().p("AAQAXQgFAAABgGIAEgWIgMASIgEAHIgBAAQgEgBgBgHIgDgXQgDAKgEARIgDAAQgFAAABgGIAFgQIAFgRIACABQAIABABAIIACAPIAAAIIAIgQIAJgLIABAAQAHACgBAJIgFAeg");
	this.shape_122.setTransform(87,-71.1);

	// Shape Sublayer 12
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D29F2C").s().p("AgBAVQgPgCACgQIACgGIACgMQACgFAFAAIASADIAAADQgBAEgFgBIgLgBIgCAJIANACIgBABQAAAEgFgBIgIgBIgBACIABAHQACACADABIACAAIAJAAIgBADIgCAEIgHAAg");
	this.shape_123.setTransform(83.1,-71.9);

	// Shape Sublayer 11
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D29F2C").s().p("AAIAWIgFgEIgJgSIgCAUIgDgBQgFAAABgGIADgiIADABQAFAAAAAGIgCANIALgPIADgCIADAAIAGAAIAAABIgRARIAFAIIAGAIIADACQgCAEgDAAIgBAAg");
	this.shape_124.setTransform(79.7,-72.3);

	// Shape Sublayer 10
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D29F2C").s().p("AANAVQgFAAAAgFIgBgGIgNgBIgDALIgDAAQgEAAABgEQAAgFAEgMQAGgOAEgFIACAAIAFAFIAGAPIAFAVgAgFADIAKAAIgFgPg");
	this.shape_125.setTransform(74.4,-72.6);

	// Shape Sublayer 9
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D29F2C").s().p("AABAVQgMAAAAgQIgBgZIAEAAQAEAAABAHIAAASQAAAEABACIAEACIACAAIAJgBIAAACQAAAHgJAAg");
	this.shape_126.setTransform(71,-72.6);

	// Shape Sublayer 8
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D29F2C").s().p("AgLAWQgGgGAAgJQAAgIAEgGQAFgGAIgBQAGAAAFAFQAGAGABAHQAAAKgEAGQgFAHgIAAIgBABQgGAAgFgGgAAAgGQgEAAgCAEQgDACAAAGQABAOAJAAQAKgBgBgNQgBgMgJAAIAAAAgAgJgRQAAgEADgCIAFgEIAEADQAEACAAAEIAAACIgHgEIgJAFg");
	this.shape_127.setTransform(67.1,-73.1);

	// Shape Sublayer 7
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D29F2C").s().p("AgIARQgGgGgBgJQgBgHAFgHQAFgHAHgBIAIACQAEACAAAEIAAADQgEgEgHABQgEAAgDAEQgDAEABAEQABAHADAEQADADAFAAQAHgBADgFIAAAAIABAEQAAAEgEACQgDADgEAAIgDAAQgEAAgGgEg");
	this.shape_128.setTransform(63.4,-72.3);

	// Shape Sublayer 6
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D29F2C").s().p("AgJAXQgGgFgCgJQgBgJAEgFQAEgHAJgCQAFgBAGAFQAGAFACAHQABAKgEAHQgEAHgJABIgCABQgEAAgFgFgAgBgGIgGAEQgDACABAHQACAPAJgCQAFgBACgEIABgKQgCgLgIAAIgBAAgAgLgQQgBgEADgCIAFgFIAEADIAFAFIAAACIgIgDIgIAGg");
	this.shape_129.setTransform(59.4,-72.3);

	// Shape Sublayer 5
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D29F2C").s().p("AgJAPIAAgEQAFAEAEgBQAIgCgBgFIgCgDIgGgBQgLgBgCgGQgBgFADgFQADgFAHgBQAJgCACAHIABAEIgKgCQgHACABAFQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAGABQALAAACAGQABAGgDAFIgKAGIgDAAQgHAAgCgGg");
	this.shape_130.setTransform(55.7,-71);

	// Shape Sublayer 4
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D29F2C").s().p("AgKATIgJghIADgBIAFADIAEAMIANgFIgEgQIADgBIADABIACACIAKAiIgDABIgDAAIgDgEIgDgMIgNAEIAFASIgDABIgCAAQgDAAgCgEg");
	this.shape_131.setTransform(50.7,-69.8);

	// Shape Sublayer 3
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D29F2C").s().p("AgGAXIgDgEIgLggIADgBQAHgCAHAGIAMAOIgJgZIAEgBIADABIACACIANAhIgEABIgFAAIgJgHIgKgJIgEgEIAKAbIgCABg");
	this.shape_132.setTransform(47,-68.7);

	// Shape Sublayer 2
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D29F2C").s().p("AgNAaIgDgTQgBgNACgGIADgBIAHABIAKAMIANARIgDABQgFACgBgEIgEgGIgNAGIADALIgDABIgCABQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAgIAKIAJgFIgKgLgAgRgQIACgHIAEgEQAAgBABAAQABAAAAAAQABABAAAAQAAABABAAQABADgDADIgGAEIgCABg");
	this.shape_133.setTransform(44,-67.8);

	// Shape Sublayer 1
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D29F2C").s().p("AgFAPIgNgZIAJgGIAEgCIAIgCIAHAGQADAGgFAFIAGABIAEACIABAKIgHAHIgEACQgEACgDAAQgDAAgDgGgAACABIgDADIABAHQABABAAAAQABAAAAABQABAAAAAAQABgBABAAIADgBQAFgDgCgEQgCgEgDAAIgEABgAgDgMIgDACIgCACIAEAIIAEgDQAFgCgCgFQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAIgDABg");
	this.shape_134.setTransform(40.1,-65.9);

	// Shape Sublayer 0
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D29F2C").s().p("AgGAEQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAABAAIAJgGIACADQACADgEAAIgJAHg");
	this.shape_135.setTransform(36.6,-63.7);

	this.addChild(this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.3,-75.9,104.7,62.5);


(lib.Shape4copy3 = function() {
	this.initialize();

	// Shape Sublayer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E49E15").s().p("AomCmQhCgPgbgiQgbgiATgqQAVgsAGgXQAJgegGgVQgPg7AEgWQARA/AzAZQAxAYBlgEICrgPIBugVIB5gfICGggIB0gTICIgIQBRACBAAPQBLASAmAiQAkAfgKA2QgGAegWAmQgSAgAAA5QgVgsgxgSQg7gViDAFQhsAEjDArIiNAhQhLARgnAFIi6ARIgqABQhGAAgugLgApohPIACAUQAAATgJAcIgYA3QgHAQAAAPQAAANAGAOQAKAUAaAQQAZAQAmAJQA8AOBjgEIC4gSIBPgPIBkgWIC/gqQBugUBOgDQB4gEA8ARQA0APAYAmQADgvAPgbQAegyAAgmQAAgkgbgXQgigfhDgRQhDgShXgCIiEAIIh3ATIioApIhXAWIhnATIizARQhcADgxgTQgxgTgWgwg");
	this.shape.setTransform(68.9,-40.6);

	// Shape Sublayer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4312C").s().p("AomCmQhCgPgbgiQgbgiATgqQAVgsAGgXQAJgegGgVQgPg7AEgWQARA/AzAZQAxAYBlgEICrgPIBugVIB5gfICGggIB0gTICIgIQBRACBAAPQBLASAmAiQAkAfgKA2QgGAegWAmQgSAgAAA5QgVgsgxgSQg7gViDAFQhsAEjDArIiNAhQhLARgnAFIi6ARIgqABQhGAAgugLg");
	this.shape_1.setTransform(68.9,-40.6);

	// Shape Sublayer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E49E15").s().p("AooDIQhcgVgagpQgXgjAFgoQADgYATgsIAFgNQAKgZgBghIgHgyIgCgOQgDgQAEgRQAEgRAHgJQAIgIAIAAQARAAAEAeQADAVAQAUQAdAlA6AIQBLALBvgMQBugLB3gfIDcg2QBngVBVgFQBhgGBaAUQBaAUAxAnQBSBAg9B5QgfBAAEA4QABASgEANIgIANQgEAEgFAAQgGAAgEgFQgGgJAAgUQAAgRgNgRQgWgdg1gNQg4gNh9AJQh+AIh+AbIhjAWIi+AnQhjAShBADIgkABQhMAAhDgQgAqKizQgGATADATIAJA2QADApgMAfQgXA2gDASQgIApAXAjQAZAnBYAVQBRATBggFQBOgECHgbIDvgzQB9gaB8gJQCBgKA7APQA1AMAZAeQAQATAAAWQAAANADAHIAFAGQAEAAAEgJQAFgMgBgTQgEg7AghBQAZgwAAgnQAAg1gsgjQgxgmhagUQhXgSheAFQhVAFhlAVQhDAOiaAoQh9AghyALQhqALhJgLQg8gIgfgmQgSgXgEgYQgDgXgKAAQgKAAgHAUg");
	this.shape_2.setTransform(69.1,-40.6);

	// Shape Sublayer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AonDBQhYgVgZgnQgXgjAIgpQADgSAXg2QAMgfgDgpIgJg2QgDgTAGgTQAHgUAKAAQAKAAADAXQAEAYASAXQAfAmA8AIQBJALBqgLQBygLB9ggQCagoBDgOQBlgVBVgFQBegFBXASQBaAUAxAmQAsAjAAA1QAAAngZAwQggBBAEA7QABATgFAMQgEAJgEAAIgFgGQgDgHAAgNQAAgWgQgTQgZgeg1gMQg7gPiBAKQh8AJh9AaIjvAzQiHAbhOAEIgkABQhMAAhBgPg");
	this.shape_3.setTransform(69.1,-40.6);

	// Shape Sublayer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E49E15").s().p("AjaFaQhqgahSg0QhUg0gthFQguhEAAhMQgBhKAthFQAshFBUg1QBSg0BpgdQBqgcBzgBQCYgBCEAvQCEAuBQBTQArArAWAyQAWAyAAA0QABBJgtBGQgsBFhUA1QhRA0hqAdQhpAch0ABIgCAAQhyAAhogbgAAMllQhwABhoAdQhlAchNAzQhNAygrBBQgrBDAABIQABBJAsBDQArBBBOAxQBOAyBlAbQBoAbBwAAQBygBBogdQBlgcBNgzQBNgzArhBQArhDAAhIQgBhJgshDQgrhAhOgyQhOgxhlgbQhmgbhwAAIgEAAg");
	this.shape_4.setTransform(69.5,-42.1);

	// Shape Sublayer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B2D2D").s().p("AjXFOQhlgbhOgyQhOgxgqhAQgthDAAhKQgBhIAshDQAqhABNgzQBOgzBkgcQBogdBygBQBxAABoAbQBlAbBOAyQBNAxAsBBQAsBCAABJQABBIgsBEQgqBBhNAzQhOAyhkAcQhoAdhyABIgCAAQhxAAhmgbg");
	this.shape_5.setTransform(70.9,-41.8);

	// Shape Sublayer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBGcQh9AAhygiQhugghVg6QhVg5guhLQgwhNABhSQAAhUAxhMQAvhKBVg5QBWg4BugfQBzgfB7AAQB9ABByAhQBuAhBVA5QBUA6AvBLQAwBNgBBSQgBBUgwBMQgvBKhWA5QhVA4hvAfQhuAfh5AAIgGgBg");
	this.shape_6.setTransform(69.4,-42.9);

	// Shape Sublayer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(7.5).p("Ap5jPQgIAAgIAIQgHAJgEARQgEARADAQIACAOIAHAyQABAhgKAZIgFANQgTAsgDAYQgFAoAXAjQAaApBcAVQBSAUBhgFQBBgDBjgSIC+gnIBjgWQB+gbB+gIQB9gJA4ANQA1ANAWAdQANARAAARQAAAUAGAJQAEAFAGAAQAFAAAEgEIAIgNQAEgNgBgSQgEg4AfhAQA9h5hShAQgxgnhagUQhagUhhAGQhVAFhnAVIjcA2Qh3AfhuALQhvAMhLgLQg6gIgdglQgQgUgDgVQgEgegRAAgApsiwQAEAYASAXQAfAmA8AIQBJALBqgLQBygLB9ggQCagoBDgOQBlgVBVgFQBegFBXASQBaAUAxAmQAsAjAAA1QAAAngZAwQggBBAEA7QABATgFAMQgEAJgEAAIgFgGQgDgHAAgNQAAgWgQgTQgZgeg1gMQg7gPiBAKQh8AJh9AaIjvAzQiHAbhOAEQhgAFhRgTQhYgVgZgnQgXgjAIgpQADgSAXg2QAMgfgDgpIgJg2QgDgTAGgTQAHgUAKAAQAKAAADAXg");
	this.shape_7.setTransform(69.1,-40.6);

	// Shape Sublayer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AooDIQhcgVgagpQgXgjAFgoQADgYATgsIAFgNQAKgZgBghIgHgyIgCgOQgDgQAEgRQAEgRAHgJQAIgIAIAAQARAAAEAeQADAVAQAUQAdAlA6AIQBLALBvgMQBugLB3gfIDcg2QBngVBVgFQBhgGBaAUQBaAUAxAnQBSBAg9B5QgfBAAEA4QABASgEANIgIANQgEAEgFAAQgGAAgEgFQgGgJAAgUQAAgRgNgRQgWgdg1gNQg4gNh9AJQh+AIh+AbIhjAWIi+AnQhjAShBADIgkABQhMAAhDgQgAqKizQgGATADATIAJA2QADApgMAfQgXA2gDASQgIApAXAjQAZAnBYAVQBRATBggFQBOgECHgbIDvgzQB9gaB8gJQCBgKA7APQA1AMAZAeQAQATAAAWQAAANADAHIAFAGQAEAAAEgJQAFgMgBgTQgEg7AghBQAZgwAAgnQAAg1gsgjQgxgmhagUQhXgSheAFQhVAFhlAVQhDAOiaAoQh9AghyALQhqALhJgLQg8gIgfgmQgSgXgEgYQgDgXgKAAQgKAAgHAUg");
	this.shape_8.setTransform(69.1,-40.6);

	// Shape Sublayer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E49E15").s().p("AgBGrQh9AAhyghQhygghZg8Qhbg+gwhPQgwhPABhVQAAg7AYg5QAYg5AugyQBXhfCPg1QCPg1CkABQB9ABByAgQBzAhBYA8QBbA9AwBPQAwBPgBBVQAABXgxBOQgxBPhbA8QhaA6hyAfQhvAeh5AAIgGAAgAj0l+QhuAehWA5QhVA4gvBKQgxBNAABUQgBBSAwBNQAuBKBVA6QBVA6BuAgQByAhB9ABQB7ABByggQBvgeBVg5QBWg5AvhJQAwhNABhUQABhSgwhNQgvhKhUg6QhVg6huggQhyghh7gBIgEAAQh7AAhxAfg");
	this.shape_9.setTransform(70.2,-42.8);

	// Shape Sublayer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(7.5).p("AgEmdQB7ABByAhQBuAgBVA6QBUA6AvBKQAwBNgBBSQgBBUgwBNQgvBJhWA5QhVA5hvAeQhyAgh7gBQh9gBhyghQhugghVg6QhVg6guhKQgwhNABhSQAAhUAxhNQAvhKBVg4QBWg5BugeQBzggB9ABgApdh3QgYA5AAA7QgBBVAwBPQAwBPBbA+QBZA8ByAgQByAhB9AAQB7ABBzgfQBygfBag6QBbg8AxhPQAxhOAAhXQABhVgwhPQgwhPhbg9QhYg8hzghQhyggh9gBQikgBiPA1QiPA1hXBfQguAygYA5g");
	this.shape_10.setTransform(70.2,-42.8);

	// Shape Sublayer 0
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBGrQh9AAhyghQhygghZg8Qhbg+gwhPQgwhPABhVQAAg7AYg5QAYg5AugyQBXhfCPg1QCPg1CkABQB9ABByAgQBzAhBYA8QBbA9AwBPQAwBPgBBVQAABXgxBOQgxBPhbA8QhaA6hyAfQhvAeh5AAIgGAAgAj0l+QhuAehWA5QhVA4gvBKQgxBNAABUQgBBSAwBNQAuBKBVA6QBVA6BuAgQByAhB9ABQB7ABByggQBvgeBVg5QBWg5AvhJQAwhNABhUQABhSgwhNQgvhKhUg6QhVg6huggQhyghh7gBIgEAAQh7AAhxAfg");
	this.shape_11.setTransform(70.2,-42.8);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.3,-96,177.1,107.7);


(lib.Tween1copy6 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Symbol15copy5();
	this.instance.setTransform(-127.6,-19.6,0.39,0.39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-425.1,-25.2,1177,46);


(lib.Symbol31copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	//  100 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+/JXQjsg4hjh7Qhhh4BFiXQBLilAXhTQAfhsgUhLQg2jTAMhRQA/DlC2BYQCwBWFsgMIJng5IGLhLIObjhIGjhFIHpgcQEiAGDmA3QENBBCLB5QCBBxgkDCQgWBwhOCKQhBBzAADLQhMieiwg/QjWhLnVAQQmGAOq8CcIoCB1QkOA+iKASIqdA+QhQAEhJAAQj8AAilgng");
	mask.setTransform(-5.5,2.3);

	// Layer 100
	this.instance = new lib.Shape9copy3("single",0);
	this.instance.setTransform(103.6,-478.3,1.807,1.807,76.2);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,158,414);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.81,scaleY:1.81,x:274.1,y:-53.9},23).to({x:311.3,y:38.3},5).to({scaleX:1.81,scaleY:1.81,x:318.9,y:56},1).wait(16));

	// Layer 98
	this.instance_1 = new lib.Shape7copy3("single",0);
	this.instance_1.setTransform(-253.4,148.5,3.597,3.597);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// Layer 13
	this.instance_2 = new lib.Sprite6copy3();
	this.instance_2.setTransform(-241.5,-58.4,1.336,1.336);
	this.instance_2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// Layer 12
	this.instance_3 = new lib.Shape4copy3("single",0);
	this.instance_3.setTransform(-253.4,148.5,3.597,3.597);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.3,-192.3,598.3,372.8);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol10copy11();
	this.instance.setTransform(-519.8,5.1,0.661,0.661);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.6,-56.5,180,116);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol10copy11();
	this.instance.setTransform(-519.8,5.1,0.661,0.661);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.6,-56.5,180,116);


(lib.Symbol21copy3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween3copy4("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.1,-7.4,108.2,14.9);


(lib.Symbol19copy8 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Symbol31copy3();
	this.instance.setTransform(-3.2,10.1,0.534,0.534);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-331.9,-245.3,496.4,357);


(lib.Symbol19copy7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween2copy4("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.1,-7.4,108.2,14.9);


(lib.Symbol10copy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol19copy7();
	this.instance.setTransform(-17.2,0.4,0.874,0.874);

	this.instance_1 = new lib.Symbol21copy3();
	this.instance_1.setTransform(-17.2,0.4,0.874,0.874);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},15).to({_off:false},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},15).to({_off:true},14).wait(1));

	// Shape Sublayer 0
	this.instance_2 = new lib.Symbol16copy3();
	this.instance_2.setTransform(-16.6,-0.4,0.874,0.874);

	this.instance_3 = new lib.Symbol17copy3();
	this.instance_3.setTransform(-16.6,-0.4,0.874,0.874);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},15).to({_off:false},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},15).to({_off:true},14).wait(1));

	// Layer 1
	this.instance_4 = new lib.Shape46copy5("single",0);
	this.instance_4.setTransform(-53.3,-13.2,1.036,1.036);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.6,-12.1,98.1,23.4);


(lib.Symbol9copy11 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Symbol24copy3();
	this.instance.setTransform(83.7,-51.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.8,-151.8,237,201);


(lib.Symbol9copy10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol10copy10();
	this.instance.setTransform(0,1.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.6,-11.9,98.1,24.5);


(lib.Symbol8copy5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol9copy10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.6,-11.9,98.1,24.5);


(lib.Symbol7copy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},11).to({scaleX:1,scaleY:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.1,-85,317.6,197.2);


(lib.Symbol6copy11 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.nenmay01();
	this.instance.setTransform(-270.6,-66.4,0.471,0.471);

	// Layer 3
	this.instance_1 = new lib.Symbol13copy5();
	this.instance_1.setTransform(45.4,77.7,0.557,0.557);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270.6,-66.4,610.9,197.6);


(lib.Symbol4copy11 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.Symbol23copy3();
	this.instance.setTransform(-61.9,0.9,1.39,1.39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.7,-170.1,483.7,342);


(lib.Symbol2copy6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol7copy11();
	this.instance.setTransform(1.2,-6.1,0.428,0.428,-10.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.6,-54.1,149.3,108.3);


(lib.Symbol1copy4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol7copy11();
	this.instance.setTransform(1.2,-6.1,0.428,0.428,-10.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.6,-54.1,149.3,108.3);


(lib.Sprite47copy5 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Symbol8copy5();
	this.instance.setTransform(51.5,12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,0.1,98.1,24.5);


(lib.Sprite28copy5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Shape27copy5("single",0);
	this.instance.setTransform(-78.2,-184.3);
	this.instance.alpha = 0.398;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,rotation:2.6,x:-47.6,y:-133.3,alpha:0.469},3).to({scaleX:0.92,scaleY:0.92,rotation:3.5,x:-35.3,y:-118,alpha:0.5},1).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:4.3,x:-22.2,y:-103.5,alpha:0.52},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:5.3,x:-8.6,y:-89.5,alpha:0.551},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:6.3,x:5.7,y:-75.9,alpha:0.57},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:7.1,x:19.9,y:-62.4,alpha:0.602},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:8,x:34,y:-48.6,alpha:0.621},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:9,x:47.9,y:-34.9,alpha:0.648},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:9.8,x:61.6,y:-20.8,alpha:0.672},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:10.8,x:75.2,y:-6.8,alpha:0.699},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:11.8,x:88.9,y:7.2,alpha:0.719},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:12.6,x:102.9,y:20.9,alpha:0.75},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:13.5,x:117.2,y:34.1,alpha:0.77},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:14.6,x:132.2,y:46.7,alpha:0.801},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:15,x:142.1,y:54.1,alpha:0.781},0).to({scaleX:0.71,scaleY:0.71,rotation:16.1,x:163.2,y:67.4,alpha:0.75},2).to({scaleX:0.73,scaleY:0.73,rotation:17.3,x:185.4,y:78.8,alpha:0.711},2).to({scaleX:0.76,scaleY:0.76,rotation:18.3,x:208.4,y:88.8,alpha:0.68},2).to({scaleX:0.8,scaleY:0.8,rotation:20.8,x:254.6,y:106.2,alpha:0.602},4).to({scaleX:0.82,scaleY:0.82,rotation:21.8,x:278.1,y:114.1,alpha:0.57},2).to({scaleX:0.86,scaleY:0.86,rotation:23.6,x:313.5,y:124.9,alpha:0.512},3).to({scaleX:0.87,scaleY:0.87,rotation:24.1,x:325.3,y:128.3,alpha:0.5},1).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:24.6,x:337.2,y:131.6,alpha:0.48},0).to({scaleX:0.91,scaleY:0.91,rotation:25.8,x:361.1,y:138.2,alpha:0.441},2).to({scaleX:0.92,scaleY:0.92,rotation:26.3,x:373.1,y:141.3,alpha:0.43},1).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:27,x:385.2,y:144.4,alpha:0.41},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:27.6,x:397,y:147.5,alpha:0.391},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:28.1,x:409,y:150.6,alpha:0.371},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:28.8,x:420.9,y:153.7,alpha:0.359},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:29.3,x:432.8,y:157,alpha:0.34},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:30,x:444.7,y:160.1,alpha:0.32},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.6,x:456.7,y:163.6,alpha:0.301},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.289},0).wait(1).to({scaleX:1,scaleY:1,x:456.6,y:163.7,alpha:0.281},0).wait(1).to({x:456.7,y:163.6,alpha:0.27},0).wait(1).to({startPosition:0},0).wait(1).to({y:163.7,alpha:0.262},0).wait(1).to({alpha:0.25},0).wait(1).to({scaleX:1,scaleY:1,y:163.6,alpha:0.238},0).wait(1).to({y:163.7,alpha:0.23},0).wait(1).to({x:456.6,y:163.6},0).wait(1).to({x:456.7,y:163.7,alpha:0.219},0).wait(1).to({scaleX:1,scaleY:1,y:163.6,alpha:0.211},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.199},0).wait(1).to({scaleX:1,scaleY:1,y:163.7},0).wait(1).to({scaleX:1,scaleY:1,y:163.6,alpha:0.191},0).wait(1).to({scaleX:1,scaleY:1,x:456.6,y:163.7,alpha:0.18},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.172},0).wait(1).to({y:163.6,alpha:0.16},0).to({alpha:0.148},2).to({y:163.7,alpha:0.141},1).wait(1).to({x:456.7,y:163.6,alpha:0.129},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.121},0).wait(1).to({y:163.7,alpha:0.109},0).wait(1).to({y:163.6},0).wait(1).to({y:163.7,alpha:0.102},0).wait(1).to({alpha:0.09},0).wait(1).to({scaleX:1,scaleY:1,y:163.6},0).wait(1).to({alpha:0.078},0).to({alpha:0.059},2).to({y:163.7},1).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.039},0).wait(1).to({y:163.6},0).wait(1).to({alpha:0.031},0).wait(1).to({y:163.7,alpha:0.02},0).wait(1).to({startPosition:0},0).wait(1).to({y:163.6,alpha:0.012},0).wait(1).to({scaleX:1,scaleY:1,alpha:0},0).wait(1).to({scaleX:1,scaleY:1,y:163.7},0).wait(1).to({scaleX:1,scaleY:1},0).wait(422).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:163.6},0).wait(1));

	// Layer 10
	this.instance_1 = new lib.Shape26copy5("single",0);
	this.instance_1.setTransform(-78.9,-185.6);
	this.instance_1.alpha = 0.398;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,rotation:2.6,x:-48.2,y:-134.6,alpha:0.469},3).to({scaleX:0.92,scaleY:0.92,rotation:3.5,x:-36,y:-119.4,alpha:0.5},1).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:4.3,x:-22.9,y:-104.8,alpha:0.52},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:5.3,x:-9.2,y:-90.7,alpha:0.551},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:6.3,x:5.1,y:-77.2,alpha:0.57},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:7.1,x:19.3,y:-63.6,alpha:0.602},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:8,x:33.5,y:-49.9,alpha:0.621},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:9,x:47.3,y:-36.1,alpha:0.648},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:9.8,x:61,y:-21.9,alpha:0.672},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:10.8,x:74.7,y:-7.9,alpha:0.699},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:11.8,x:88.5,y:6,alpha:0.719},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:12.6,x:102.6,y:19.7,alpha:0.75},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:13.5,x:116.9,y:33,alpha:0.77},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:14.6,x:132,y:45.6,alpha:0.801},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:15,x:141.9,y:53.1,alpha:0.781},0).to({scaleX:0.71,scaleY:0.71,rotation:16.1,x:163.1,y:66.3,alpha:0.75},2).to({scaleX:0.73,scaleY:0.73,rotation:17.3,x:185.3,y:77.6,alpha:0.711},2).to({scaleX:0.76,scaleY:0.76,rotation:18.3,x:208.2,y:87.5,alpha:0.68},2).to({scaleX:0.8,scaleY:0.8,rotation:20.8,x:254.5,y:104.9,alpha:0.602},4).to({scaleX:0.82,scaleY:0.82,rotation:21.8,x:278,y:112.7,alpha:0.57},2).to({scaleX:0.86,scaleY:0.86,rotation:23.6,x:313.3,y:123.6,alpha:0.512},3).to({scaleX:0.87,scaleY:0.87,rotation:24.1,x:325.3,y:127,alpha:0.5},1).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:24.6,x:337.2,y:130.4,alpha:0.48},0).to({scaleX:0.91,scaleY:0.91,rotation:25.8,x:361,y:136.9,alpha:0.441},2).to({scaleX:0.92,scaleY:0.92,rotation:26.3,x:373.1,y:140,alpha:0.43},1).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:27,x:385.1,y:143.2,alpha:0.41},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:27.6,x:397,y:146.2,alpha:0.391},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:28.1,x:408.9,y:149.4,alpha:0.371},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:28.8,x:420.9,y:152.4,alpha:0.359},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:29.3,x:432.8,y:155.6,alpha:0.34},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:30,x:444.8,y:158.8,alpha:0.32},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.6,x:456.8,y:162.1,alpha:0.301},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.289},0).wait(1).to({scaleX:1,scaleY:1,x:456.7,y:162.2,alpha:0.281},0).wait(1).to({y:162.1,alpha:0.27},0).wait(1).to({startPosition:0},0).to({y:162.2,alpha:0.25},2).to({scaleX:1,scaleY:1,x:456.8,alpha:0.238},1).wait(1).to({x:456.7,alpha:0.23},0).wait(1).to({y:162.1},0).wait(1).to({alpha:0.219},0).wait(1).to({scaleX:1,scaleY:1,x:456.8,alpha:0.211},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.199},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.191},0).wait(1).to({scaleX:1,scaleY:1,x:456.7,alpha:0.18},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.16},0).to({alpha:0.148},2).to({alpha:0.141},1).wait(1).to({startPosition:0},0).to({alpha:0.121},2).to({startPosition:0},1).wait(1).to({alpha:0.109},0).to({alpha:0.09},3).to({alpha:0.078},1).wait(1).to({alpha:0.07},0).to({alpha:0.059},2).to({alpha:0.051},1).wait(1).to({startPosition:0},0).to({alpha:0.031},2).to({startPosition:0},1).wait(1).to({alpha:0.02},0).wait(1).to({scaleX:1,scaleY:1,x:456.8,alpha:0.012},0).wait(1).to({scaleX:1,scaleY:1,alpha:0},0).wait(426));

	// Layer 8
	this.instance_2 = new lib.Shape25copy5("single",0);
	this.instance_2.setTransform(89.5,22.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:130.4,y:45.6},18).to({x:164.5,y:64.7},15).to({x:189.5,y:78.7},11).to({alpha:0.922},3).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

	// Layer 7
	this.instance_3 = new lib.Shape24copy5("single",0);
	this.instance_3.setTransform(197.9,82.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:154,y:58.4},18).to({x:119.8,y:39.6},14).to({x:90.5,y:23.5},12).to({alpha:0.922},3).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

	// Layer 6
	this.instance_4 = new lib.Shape23copy5("single",0);
	this.instance_4.setTransform(228.3,95.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:65.1,y:5.1},44).to({alpha:0.922},3).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0.051)","rgba(255,255,0,0.153)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(252,255,204,0.4)"],[0.353,0.682,1,1,1],0,0,0,0,0,14.8).s().p("AhlBmQgqgrAAg7QAAg7AqgqQAqgqA7AAQA7AAArAqQAqAqAAA7QAAA7gqArQgrAqg7AAQg7AAgqgqg");
	this.shape.setTransform(139.7,53.5);
	this.shape._off = true;

	this.instance_5 = new lib.Shape22copy5("single",0);
	this.instance_5.setTransform(137,52);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(6).to({x:139.4,y:53.4},0).wait(1).to({x:139.1,y:53.2},0).wait(1).to({x:138.9,y:53.1},0).wait(1).to({x:138.6,y:52.9},0).wait(1).to({x:138.3,y:52.7},0).wait(1).to({x:138.1,y:52.6},0).wait(1).to({x:137.8,y:52.4},0).wait(1).to({x:137.5,y:52.3},0).wait(1).to({x:137.3,y:52.2},0).wait(1).to({x:137.2,y:52.1},0).to({_off:true},1).wait(495));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({x:136.5,y:51.7},3).to({x:136.3,y:51.6},1).wait(1).to({x:136.2,y:51.5},0).wait(1).to({x:136},0).wait(1).to({x:135.8,y:51.4},0).wait(1).to({x:135.7,y:51.3},0).wait(1).to({x:135.5,y:51.2},0).to({x:135,y:50.9},3).to({x:134.8,y:50.8},1).wait(1).to({x:134.7,y:50.7},0).wait(1).to({x:134.5,y:50.6},0).wait(1).to({x:134.3,y:50.5},0).wait(1).to({x:134.1,y:50.4},0).wait(1).to({x:134,y:50.3},0).wait(1).to({x:133.8,y:50.2},0).wait(1).to({x:133.6,y:50.1},0).to({x:133.3,y:49.9},2).to({x:133.1,y:49.8},1).wait(1).to({x:133,y:49.7},0).wait(1).to({x:132.8,y:49.6},0).wait(1).to({x:132.6},0).wait(1).to({x:132.5,y:49.5},0).wait(1).to({x:131.8,y:50.2},0).to({alpha:0.922},3).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

	// Layer 4
	this.instance_6 = new lib.Shape21copy5("single",0);
	this.instance_6.setTransform(162.1,65.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:158.3,y:63.3},4).to({x:154.4,y:61.2},4).to({x:150.6,y:59},4).to({x:146.7,y:56.9},4).to({x:142.8,y:54.8},4).to({x:139,y:52.7},4).to({x:135.1,y:50.5},4).to({x:131.3,y:48.4},4).to({x:127.4,y:46.3},4).to({x:123.6,y:44.2},4).to({x:120.7,y:42.6},3).to({x:120.3,y:41},1).wait(1).to({alpha:0.969},0).to({alpha:0.922},2).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

	// Layer 3
	this.instance_7 = new lib.Shape20copy5("single",0);
	this.instance_7.setTransform(348.2,136.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({x:12.1,y:-40.9},44).to({alpha:0.922},3).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

	// Layer 2
	this.instance_8 = new lib.Shape19copy5("single",0);
	this.instance_8.setTransform(497.3,169.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({x:-69.7,y:-161.6},44).to({alpha:0.922},3).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

	// Layer 1
	this.instance_9 = new lib.Shape18copy5("single",0);
	this.instance_9.setTransform(18.8,-34.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({x:269.8,y:112.3},44).to({alpha:0.922},3).to({alpha:0.891},1).wait(1).to({alpha:0.871},0).to({alpha:0.82},2).to({alpha:0.801},1).wait(1).to({alpha:0.77},0).to({alpha:0.73},2).to({alpha:0.699},1).wait(1).to({alpha:0.68},0).to({alpha:0.609},3).to({alpha:0.578},1).wait(1).to({alpha:0.551},0).to({alpha:0.512},2).to({alpha:0.48},1).wait(1).to({alpha:0.461},0).to({alpha:0.41},2).to({alpha:0.379},1).wait(1).to({alpha:0.359},0).to({alpha:0.289},3).to({alpha:0.262},1).wait(1).to({alpha:0.238},0).to({alpha:0.191},2).to({alpha:0.16},1).wait(1).to({alpha:0.141},0).to({alpha:0.09},2).to({alpha:0.07},1).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).wait(426));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol11copy4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6copy11();
	this.instance.setTransform(-18.2,-15.5,0.523,0.479);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.8,-47.3,319.7,94.8);


(lib.Symbol7copy10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sprite47copy5();
	this.instance.setTransform(-18.9,-6.7,0.544,0.544);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.6,-6.6,53.3,13.3);


(lib.Symbol6copy10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sprite47copy5();
	this.instance.setTransform(-18.9,-6.7,0.544,0.544);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.6,-6.6,53.3,13.3);


(lib.Symbol14copy3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol11copy4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.8,-47.3,319.7,94.8);


// stage content:
(lib._300x450 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_319 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(319).call(this.frame_319).wait(48));

	// khung
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A0506").ss(2,1,1).p("EAXRgi9MAAABF7MguhAAAMAAAhF7g");
	this.shape.setTransform(150,225.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(367));

	// EFFECK
	this.instance = new lib.Sprite28copy5();
	this.instance.setTransform(63,88.5,1,1,15);
	this.instance.alpha = 0.801;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(367));

	// KHAM PHA NGAY
	this.instance_1 = new lib.Symbol6copy10();
	this.instance_1.setTransform(151.1,349,0.815,0.815);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(252, 5, 1)];
	this.instance_1.cache(-29,-9,57,17);

	this.instance_2 = new lib.Symbol7copy10();
	this.instance_2.setTransform(151.1,349,1.781,1.781);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},82).to({state:[{t:this.instance_2,p:{scaleX:1.781,scaleY:1.781}}]},16).to({state:[{t:this.instance_2,p:{scaleX:1.876,scaleY:1.876}}]},1).wait(268));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({_off:false},0).to({_off:true,scaleX:1.78,scaleY:1.78},16).wait(269));

	// Layer 3
	this.instance_3 = new lib.Symbol19copy8();
	this.instance_3.setTransform(248.5,35.6,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(367));

	// the gioi dieu ky
	this.instance_4 = new lib.Symbol1copy4();
	this.instance_4.setTransform(76.5,45.5,2.26,2.26);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol2copy6();
	this.instance_5.setTransform(76.5,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},7).wait(352));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},7).wait(352));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_48 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_49 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_50 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_51 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_52 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_53 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_54 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_55 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_56 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_57 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_58 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_59 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_60 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");
	var mask_graphics_61 = new cjs.Graphics().p("EgXaAgWIAAkMMAu1AAAIAAEMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_graphics_48,x:150,y:207}).wait(1).to({graphics:mask_graphics_49,x:150,y:207}).wait(1).to({graphics:mask_graphics_50,x:150,y:207}).wait(1).to({graphics:mask_graphics_51,x:150,y:207}).wait(1).to({graphics:mask_graphics_52,x:150,y:207}).wait(1).to({graphics:mask_graphics_53,x:150,y:207}).wait(1).to({graphics:mask_graphics_54,x:150,y:207}).wait(1).to({graphics:mask_graphics_55,x:150,y:207}).wait(1).to({graphics:mask_graphics_56,x:150,y:207}).wait(1).to({graphics:mask_graphics_57,x:150,y:207}).wait(1).to({graphics:mask_graphics_58,x:150,y:207}).wait(1).to({graphics:mask_graphics_59,x:150,y:207}).wait(1).to({graphics:mask_graphics_60,x:150,y:207}).wait(1).to({graphics:mask_graphics_61,x:150,y:207}).wait(306));

	// Layer 1
	this.instance_6 = new lib.Tween1copy6("synched",0);
	this.instance_6.setTransform(567.8,413.3);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52).to({_off:false},0).to({startPosition:0},8).to({x:-294.2},259).to({_off:true},1).wait(47));

	// text
	this.instance_7 = new lib.Symbol11copy4();
	this.instance_7.setTransform(151.2,412.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol14copy3();
	this.instance_8.setTransform(151.2,412.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},48).to({state:[{t:this.instance_8}]},13).wait(306));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({_off:false},0).to({_off:true,alpha:1},13).wait(306));

	// cung kham pha
	this.instance_9 = new lib.Symbol26();
	this.instance_9.setTransform(-67.1,290.1,1,1,0,0,0,-216.1,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Symbol25();
	this.instance_10.setTransform(-67.1,290.1,1,1,0,0,0,-216.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},31).to({state:[{t:this.instance_10}]},8).wait(328));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({_off:false},0).to({_off:true,alpha:1},8).wait(328));

	// hop banh 1
	this.instance_11 = new lib.Symbol4copy11();
	this.instance_11.setTransform(152.4,178.5,0.501,0.501);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({alpha:1},7).wait(345));

	// hop banh 2
	this.instance_12 = new lib.Symbol9copy11();
	this.instance_12.setTransform(138.6,196.8,0.822,0.822);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).to({alpha:1},6).wait(338));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A70E12").s().p("EgXbAjKMAAAhGTMAu3AAAMAAABGTg");
	this.shape_1.setTransform(150,225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(367));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,187.9,300,487.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;