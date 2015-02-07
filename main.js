use2D = true;

//Declare new function for snake body
function body(x,y)
{
	Sprite.call(this);
	this.image = Textures.load("image/body.png", true);
	this.width = "20";
	this.height = "20";
	this.x = x;
	this.y = y;

	this.direction = "";
}
body.prototype = new Sprite();

//A list to keep all the body parts
var bodyList = new List();

//initialize first body
var newbody = new body(260,260);
bodyList.push(body);
world.addChild(newbody);

//Food initialization
var food = new Sprite();
//The food spawns at a random location
food.width = '20';
food.height = '20';
food.x = 20*Math.round(20*Math.random());
food.y = 20*Math.round(20*Math.random());
food.image = Textures.load("image/food.png");

world.addChild(food);

//Constants for input
gInput.addBool(65, "left");
gInput.addBool(68, "right");
gInput.addBool(87, "up");
gInput.addBool(83, "down");

world.update = function(d)
{
	if(gInput.left && bodyList.length == 1)
	{
		var newBody = bodyList.pop_back;
		newBody.x -= 20;
		bodyList.push(newBody);
		this.addChild(newPart);
	}
	else if(gInput.left)
	{
		var newBody = bodyList.pop_back;
		var head = bodyList.getAt(0);
		newBody.x = head.x - 20;
		bodyList.push(newBody);
		this.addChild(newPart);
	}
}


