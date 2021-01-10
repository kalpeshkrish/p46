class Bowl {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.image=loadImage("bowl.png");
       
        
   }
   display(){
       var pos=this.body.position;
       var angle=this.body.angle;
    push();
    //translate(pos.x,pos.y);
    //rotate(angle);
    
    fill("red");
  //  ellipseMode(RADIUS);
   // ellipse(pos.x,pos.y, this.radius, this.radius);
   imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.radius, this.radius);
    
    pop();
   }
}
