class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
        if(this.rope.bodyA){
            push();
            strokeWeight(4);
            stroke("black");
            line(this.rope.bodyA.position.x,
                this.rope.bodyA.position.y,
                this.rope.bodyB.position.x+this.offsetX,
                this.rope.bodyB.position.y+this.offsetY);
        }
    }

    fly(){
        this.rope.bodyA = null;
        console.log(this.rope);
    }

}

