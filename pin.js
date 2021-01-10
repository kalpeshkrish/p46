class Pin {
    constructor(x, y, width, height){
      var options={
        isStatic:false
      }
     // this.Visibility=255;
     this.body = Bodies.rectangle(x,y,30,80,options);
      this.width = 30;
      this.height = 80;

      World.add(world, this.body);
      this.image=loadImage("pin.png");

    }
    display(){
        
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
       // rectMode(CENTER);
        //fill(255);
       // rect(0, 0, this.width, this.height);
        pop();
      }
    
  
  };
  