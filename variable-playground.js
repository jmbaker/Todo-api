var _ = require("underscore");

var objs = [{
	"completed": true,
	"description": "Walk the dog"	
},{
	"completed": false,
	"description": "Build the fence"
}, {
	"completed": false,
	"description": "Feed the dog"
}, {
	"completed": true,
	"description": "Run the mill"
}];



var evens = _.filter(objs, function(obj){
	console.log(obj.description);
	return obj.description.indexOf("dog") > -1;
});

console.log(evens);