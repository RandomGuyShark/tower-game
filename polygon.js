class Polygon{
    constructor(x,y,height,width){
        this.body = Bodies.rectangle(x,y,height,width);
        World.add(world, this.body) 
        this.height = height
        this.width = width
        this.polygon_img=loadImage("polygon.png");
    }
    display(){
        imageMode(CENTER)
        image(this.polygon_img,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}