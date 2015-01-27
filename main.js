use2D = true;

var body = new Sprite();

body.width = "20";
body.height = "20";
body.x = '260';
body.y = '260';
body.image = Textures.load("image/body.png");

world.addChild(body);

var food = new Sprite();
//The food spawns at a random location
food.width = '20';
food.height = '20';
food.x = 20*Math.round(20*Math.random());
food.y = 20*Math.round(20*Math.random());
food.image = Textures.load("image/food.png");

world.addChild(food);
