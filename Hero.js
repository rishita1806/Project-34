class Hero {
  constructor(x,y,r){

		var options = { 
			density: 1.5, 
			frictionAir: 0.009
		};

		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero2.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		Matter.Body.scale(this.body,0.9,0.9);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill("255,0,255");
			imageMode(CENTER);
//			ellipse(0,0,this.r,this.r);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
