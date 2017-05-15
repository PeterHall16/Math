var equationData =  {
	"equations": {
		"Quadratic": {
			"id": "Quadratic",
			"title": "Quadratic Equation",
			"input_a": "A",
			"input_b": "B",
			"input_c": "C",
			"inputID_a": "a",
			"inputID_b": "b",
			"inputID_c": "c",
			"visibility3": "hidden",
			"onclick": "quadratic_onClick()"
		},
		"Midpoint": {
			"id": "Midpoint",
			"title": "Midpoint Formula",
			"input_a": "X",
			"input_b": "X",
			"input_c": "Y",
			"input_d": "Y",
			"inputID_a": "x1",
			"inputID_b": "x2",
			"inputID_c": "y1",
			"inputID_d": "y2",
			"sub_1": "1",
			"sub_2": "2",
			"sub_3": "1",
			"sub_4": "2",
			"visibility3": "visible",
			"onclick": "midpoint_onClick()"
		},
		"Distance": {
			"id": "Distance",
			"title": "Distance Formula",
			"input_a": "X",
			"input_b": "X",
			"input_c": "Y",
			"input_d": "Y",
			"inputID_a": "x1-d",
			"inputID_b": "x2-d",
			"inputID_c": "y1-d",
			"inputID_d": "y2-d",
			"sub_1": "1",
			"sub_2": "2",
			"sub_3": "1",
			"sub_4": "2",
			"visibility3": "visible",
			"onclick": "distance_onClick()"
		},
		"Pythagorean": {
			"id": "Pythagorean",
			"title": "Pythagorean Theorem",
			"input_a": "A",
			"input_b": "B",
			"input_c": "C",
			"inputID_a": "a-pt",
			"inputID_b": "b-pt",
			"inputID_c": "c-pt",
			"input_name_a": "a_pt",
			"input_name_b": "b_pt",
			"input_name_c": "c_pt",
			"visibility3": "hidden",
			"onclick": "pythagorean_onClick()"
		},
		"Circle": {
			"id": "Circle",
			"title": "Circle",
			"input_a": "R",
			"inputID_a": "r",
			"visibility1": "hidden",
			"visibility2": "hidden",
			"visibility3": "hidden",
			"onclick": "circle_onClick()"
		},
		"Triangle": {
			"id": "Triangle",
			"title": "Triangle",
			"input_a": "B",
			"input_b": "H",
			"inputID_a": "b_t",
			"inputID_b": "h_t",
			"visibility1": "visible",
			"visibility2": "hidden",
			"visibility3": "hidden",
			"onclick": "triangle_onClick()"
		},
		"Exponential": {
			"id": "Exponential",
			"title": "Exponential",
			"input_a": "a",
			"input_b": "r",
			"input_c": "n",
			"input_d": "a",
			"inputID_a": "a1_exp",
			"inputID_b": "r_exp",
			"inputID_c": "n_exp",
			"inputID_d": "an_exp",
			"sub_1": "1",
			"sub_4": "n",
			"visibility1": "visible",
			"visibility2": "visible",
			"visibility3": "visible",
			"onclick": "exponential_onClick()"
		}
	},
	"template": `
		<div class="card template">
			<h2>{{title}}</h2>
			<form name="form">
				<div class="row">
					<h4>{{input_a}}<sub>{{sub_1}}</sub></h4><input id="{{inputID_a}}" name="{{input_name_a}}">
				</div>
				<div class="row {{visibility1}}">
					<h4>{{input_b}}<sub>{{sub_2}}</sub></h4><input id="{{inputID_b}}" name="{{input_name_b}}">
				</div>
				<div class="row {{visibility2}}">
					<h4>{{input_c}}<sub>{{sub_3}}</sub></h4><input id="{{inputID_c}}" name="{{input_name_c}}">
				</div>
				<div class="row {{visibility3}}">
					<h4>{{input_d}}<sub>{{sub_4}}</sub></h4><input id="{{inputID_d}}" name="{{input_name_d}}">
				</div>
			</form>
			<button id="submit" onclick="{{onclick}}">Submit</button>
			<div class="answer" id="answer">	
			</div>
		</div>
	`
}

		
