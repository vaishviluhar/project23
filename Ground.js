class Ground {
    constructor(x, y, width, height){
    var options = {
      isStatic : true
    }
  
    this.body = Bodies.rectangle(400, 640, 200, 20, {isStatic:true});
    this.body.shapeColor = "red";
    World.add(world, rect1);

   this.body = Bodies.rectangle(300, 640, 20, 100, {isStatic:true});
    this.body.shapeColor = "red";
    World.add(world, rect2);

    this.body = Bodies.rectangle(500, 640, 20, 100, {isStatic:true});
    this.body.shapeColor = "red";
    World.add(world, rect3);
  }
  
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
      }
}