class Drop {
    constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
    }
    this.rain=Bodies.circle(x, y, 5, options);
    }
    
    push(){
       var maxDrops = 100;
       for(var i=0; i<maxDrops; i++){
           drops.push(new createDrop(random(0,400), random(0,400)));
       }
    }

    update(){
       if(this.rain.position.y > height){
           Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)});
       }
    }

}