//QUADRATIC EQUATION
//PETER HALL 4/4/2017
function quadratic_onClick() {
	var a = parseFloat(document.getElementById("a").value);
		b = parseFloat(document.getElementById("b").value);
		c = parseFloat(document.getElementById("c").value);

	var discriminant = Math.sqrt((b * b) - (4 * a * c));
		x_one = (-b + discriminant) / (2 * a);
		x_two = (-b - discriminant) / (2 * a);

		document.getElementById("answer").innerHTML = "x = " + x_one + ", " + x_two;
		ctx.translate(250,250);
		var canvasHeight = 250;
			vert_x = (-b) / (2 * a);
			vert_y = a * (Math.pow(vert_x, 2)) + b * (vert_x) + c;
			focus = (1 - ((Math.pow(b, 2) - 4 * a * c))) / (4 * a);
			difference = 250 - vert_y;
			focus_a = (Math.sqrt((canvasHeight - vert_y) / a)) + vert_x;
			focus_difference = vert_x - focus_a;
			focus_b = vert_x + focus_difference;
			canvasHeight = canvasHeight * -1;
			x_one = Math.round(x_one/.0001)*.0001;
			x_two = Math.round(x_two/.0001)*.0001;
			console.log(vert_x, vert_y, focus_a, focus_b, difference, focus, canvasHeight);

			ctx.beginPath();
			ctx.moveTo(focus_a, canvasHeight);
			ctx.quadraticCurveTo(vert_x, difference, focus_b, canvasHeight);
			ctx.stroke();
}
	
//MIDPOINT FORMULA
//PETER HALL 4/4/2017
function midpoint_onClick() {
	var x_first = parseInt(document.getElementById("x1").value);
		x_second = parseInt(document.getElementById("x2").value);
		y_first = parseInt(document.getElementById("y1").value);
		y_second = parseInt(document.getElementById("y2").value);

		xm = (x_first + x_second) / 2;
		ym = (y_first + y_second) / 2;
		xm = Math.round(xm/.0001)*.0001;
		ym = Math.round(ym/.0001)*.0001;
		document.getElementById("answer").innerHTML = "M = (" + xm + ", " + ym + ")";	
}

//DISTANCE FORMULA
//PETER HALL 4/5/2017
function distance_onClick() {
	var x_first = parseInt(document.getElementById("x1-d").value);
		x_second = parseInt(document.getElementById("x2-d").value);
		y_first = parseInt(document.getElementById("y1-d").value);
		y_second = parseInt(document.getElementById("y2-d").value);

		x = Math.abs(Math.pow((x_first - x_second), 2));
		y = Math.abs(Math.pow((y_first - y_second), 2));
		d = Math.sqrt((x + y));
		d = Math.round(d/.0001)*.0001;
		document.getElementById("answer").innerHTML = "d = " + d;
}

//PYTHAGOREAN THEOREM
//PETER HALL 4/5/2017
//TO DO: Add thing to require at least two blanks filled.
function pythagorean_onClick() {
	var a_pt = parseInt(document.getElementById("a-pt").value);
		b_pt = parseInt(document.getElementById("b-pt").value);
		c_pt = parseInt(document.getElementById("c-pt").value);

	if (document.form.a_pt.value == "") {
		var a_pt_ans = Math.pow(c_pt, 2) - Math.pow(b_pt, 2);

		a_pt_ans = Math.sqrt(a_pt_ans);
		a_pt_ans = Math.round(a_pt_ans/.0001)*.0001;

		document.getElementById("answer").innerHTML = "a = " + a_pt_ans + "<br>b = " + b_pt + "<br>c = " + c_pt;
	} else if (document.form.b_pt.value == "") {
		var b_pt_ans = Math.pow(c_pt, 2) - Math.pow(a_pt, 2);

		b_pt_ans = Math.sqrt(b_pt_ans);
		b_pt_ans = Math.round(b_pt_ans/.0001)*.0001;

		document.getElementById("answer").innerHTML = "a = " + a_pt + "<br>b = " + b_pt_ans + "<br>c = " + c_pt;
	} else if (document.form.c_pt.value == "") {
		var c_pt_ans = Math.pow(a_pt, 2) + Math.pow(b_pt, 2);

		c_pt_ans = Math.sqrt(c_pt_ans);
		c_pt_ans = Math.round(c_pt_ans/.0001)*.0001;

		document.getElementById("answer").innerHTML = "a = " + a_pt + "<br>b = " + b_pt + "<br>c = " + c_pt_ans;
	} else {
		document.getElementById("answer").innerHTML = "a = " + a_pt + "<br>b = " + b_pt + "<br>c = " + c_pt;
	}
}

//CIRCLE
//PETER HALL 4/7/2017
function circle_onClick() {
	var r = document.getElementById("r").value;
		//area
		area_circle = Math.pow(r, 2) * Math.PI;
		area_circle = Math.round(area_circle/.0001)*.0001;
		//volume
		volume_circle = Math.pow(r, 3) * Math.PI * (4/3);
		volume_circle = Math.round(volume_circle/.0001)*.0001;
		//surface area
		sa_circle = Math.pow(r, 2) * Math.PI * 4;
		sa_circle = Math.round(sa_circle/.0001)*.0001;
		//circumference
		c_circle = Math.PI * 2 * r;
		c_circle = Math.round(c_circle/.0001)*.0001;

	document.getElementById("answer").innerHTML = "area = " + area_circle + " units<sup>2</sup>";
}

//TRIANGLE
//PETER HALL 4/9/2017
function triangle_onClick() {
	var b = document.getElementById("b_t").value;
		h =	document.getElementById("h_t").value;
		//area
		area_triangle = (b * h * .5);
		area_triangle = Math.round(area_triangle/.0001)*.0001;

	document.getElementById("answer").innerHTML = "area = " + area_triangle + " units<sup>2</sup>";
}

//EXPONENTIAL GROWTH
//PETER HALL 5/3/2017
function exponential_onClick() {
	var a1_exp = document.getElementById("a1_exp").value;
		n_exp = document.getElementById("n_exp").value;
		r_exp = document.getElementById("r_exp").value;
		an_exp = document.getElementById("an_exp").value;

		if (document.form.an_exp.value == "") {
			var an_exp_ans = a1_exp * (Math.pow(r_exp, (n_exp - 1)));
		
			document.getElementById("answer").innerHTML = "a<sub>n</sub> = " + an_exp_ans;
	} else if (document.form.r_exp.value == "") {
		var	nth_root = 1 / (n_exp - 1);
			discriminant = an_exp / a1_exp
			r_exp_ans = Math.pow(discriminant, nth_root);
			r_exp_ans = Math.round(r_exp_ans/.0001)*.0001;

			document.getElementById("answer").innerHTML = "r = " + r_exp_ans;
	} else if (document.form.n_exp.value == "") {
		var log_an_a1 = Math.log(an_exp / a1_exp);
			log_r = Math.log(r_exp);
			n_exp_ans = log_an_a1 / log_r + 1;
			n_exp_ans = Math.round(n_exp_ans/.0001)*.0001;

			document.getElementById("answer").innerHTML = "n = " + n_exp_ans;
	} else if (document.form.a1_exp.value == "") {
		var a1_exp_ans = an_exp / (Math.pow(r_exp, (n_exp - 1)));

			document.getElementById("answer").innerHTML = "a<sub>1</sub> = " + a1_exp_ans;
	} else {
		
	}
}

//CANVAS
//PETER HALL 5/5/2017
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Axes
ctx.moveTo(250,0);
ctx.lineTo(250,500);
ctx.stroke();

ctx.moveTo(500,250);
ctx.lineTo(0,250);
ctx.stroke();

ctx.moveTo(500,250);
ctx.lineTo(0,250);
ctx.stroke();

//POP UP
//PETER HALL 4/21/2017 - 4/22/2017
function picker(query) {
	return document.querySelector(query)
}

let equationButtons = document.querySelectorAll("button.specificName")
var equationPopup = document.querySelector("section#equation")

// populated dynamically specific for equation
var content = {
	
}
// mustache.js template
var template = equationData.template

for(let buttonClick of equationButtons) {
	buttonClick.onclick = function(){
		generatePopup(buttonClick)
	}
}

function generatePopup(buttonClick) {
	var index = buttonClick.id

	console.log(index);
	content = equationData.equations[index]

	var html = Mustache.to_html(template, content)
	picker("div.equation-popup").innerHTML = html

	showEquation()
}

function showEquation () {
	equationPopup.style.visibility = "visible"
	equationPopup.style.opacity = 1
}