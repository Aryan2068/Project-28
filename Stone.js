class Stone {
    constructor(x,y,width,height) {
      var options = {
        isStatic: true,
        'restitution':0,
        'friction':1.0,
        'density':1.2
      }
      this.body = Bodies.rectangle(x,y, width, height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Sprites/stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
  };
