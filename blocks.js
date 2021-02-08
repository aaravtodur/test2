class Blocks{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
           // isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = 30;
        this.height = 20;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("black")
        rotate(angle);
        pop();
      }
}