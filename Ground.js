class Ground {
    constructor(x, y, width, height);
    var options = {
      isStatic : true
    }

    rect1 = Bodies.rectangle(400, 640, 200, 20, {isStatic:true});
    rect1.shapeColor = "red";
    World.add(world, rect1);

    rect2 = Bodies.rectangle(300, 640, 20, 100, {isStatic:true});
    rect2.shapeColor = "red";
    World.add(world, rect2);

    rect3 = Bodies.rectangle(500, 640, 20, 100, {isStatic:true});
    rect3.shapeColor = "red";
    World.add(world, rect3);
  
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
      }
}