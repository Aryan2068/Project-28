class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.body = Bodies.circle(x,y, radius,options);
      this.image = loadImage("Sprites/mango.png");
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image, this.body.position.x, this.body.position.y, 50, 40);
    }
  };
