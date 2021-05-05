class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.01,
            length:20
        }
        this.body = Constraint.create(options)
        World.add(world,this.body)
        this.pointB = pointB
    }
    display(){
        if(this.body.bodyA){
        strokeWeight(5)
        stroke("blue")
        var pointB = this.pointB
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
    fly(){
        this.body.bodyA = null
    }
}