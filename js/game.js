/*
	IF YOU ARE LOOKING AT THIS YOU ARE 100% CHEATING DUMMY LOL
	DON'T LOOK AT THIS!
	PLEASE
	LOL
	STOP
	BRUH
*/


/*

	FOR THE LAST TIME STOP! YOU CAN DO IT DON"T GIVE UP :>

*/

/*

	Developer's Game
	Developed by Code Jabo
	Last Modified Feb 20, 2020

*/


let data = ["t_35_dga", "a_0594_dg", "syv_5_dga"];

let _843_tipper_sad = ["You might want to go to StackOverflow :P", 
"This is taking longer than usual tbh", 
"IDK", 
"btw I'm the one who give tips lmao i hope I helped u :>", 
"BRUH", 
"ALT + F4 to die", 
"data hidden?", 
"rEmOvEAttributE(\"hidden?\")", 
"I bet you are wondering who i am",
"StackOverflow #1",
"I AM DISTRACTING U :>",
"Don't quit you can do it!",
":> :>",
"Don't be sad you can do it",
"Follow @CodeJabo on Twitter",
"More of this coming soon watch out"];

let _546_last_tip = "";
let _54_tickk = 0;

let _954_tipper_happy = setInterval(function() {
	if(_54_tickk < 3) {
		_54_tickk++;
		return;
	}
	let to_say = _843_tipper_sad[Math.floor(Math.random() * _843_tipper_sad.length)];
	if(_546_last_tip == to_say) {
		return;
	}
	console.log("%c" + to_say, "color: yellow");
	_546_last_tip = to_say;
}, 10000)

console.log("%cooo you found the developers favorite panel", "color: green")
console.log("%cclueless? type help()", "color: yellow; font-weight bold;")

let help = function() {
	console.table({help_001: "lmao", help_abcd: "show_data()", help_002: "this doesn't help lol", help_SAFBDJF: "run_data()", helppy_lol: "data_select()"})
	console.log("%c546865206f6e6c7920776179206f75742069732066696e44696e6720796f757220774179206f7554206c6f6c2077687920636f6e766572742074686973206e6f742068656c7066756c2074657874206c6d416f205b315d", "color: yellow")
}

let show_data = function() {
	console.table(data);
}

let data_select = function(class_to_find) {
	if(class_to_find == null) {
		console.log("%cdata_select(data[index])", "color:red");
		return "data_select() FAILED";
	}
	return document.querySelector("." + class_to_find);
}

let run_data = function(class_to_run) {
	if(class_to_run == null) {
		console.log("%crun_data(data[index])", "color:red");
		return "run_data() FAILED";
	}
	if(class_to_run == "t_35_dga") {
		data_select("t_35_dga").innerHTML = "data[1] is hidden make it visible :P";
		console.log("%cidk how to show that hidden data find your way out!", "color: yellow");
	} else {
		console.log("%cInvalid data!", "color: orange");
		return "run_data() FAILED";
	}
	return "run_data RUNNED SUCCESSFULLY"
}