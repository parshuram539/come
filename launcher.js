class launcher
{
	constructor(body,anchor)
	{
		var options={
			bodyA:body,
			pointB:anchor,
			stiffness:0.004,
			length:1,
			}
			this.bodyA=body
			this.pointB=anchor;
			this.stone = Constraint.create(options);
			World.add(world, this.stone);
		}
		fly(){
			this.stone.bodyA=null;
		}
		attach(body){
			this.stone.bodyA=body;
		}
	
		display(){
			if (this.stone.bodyA){
			var pointA = this.bodyA.position;
			var pointB = this.pointB;
			strokeWeight(4);
			line(pointA.x, pointA.y, pointB.x, pointB.y);
		}
	}
	}