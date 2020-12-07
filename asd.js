    var Engine = Matter.Engine,
        Events = Matter.Events,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Common = Matter.Common,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Vector = Matter.Vector;


var engine = Engine.create();
var render = Render.create({
                element: document.body,
                engine: engine,
                options: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    wireframes: false
                }
             });
              
 
document.getElementsByTagName("canvas")[1].onclick=function(event){
 var box = Bodies.rectangle(event.clientX, event.clientY, 30, 30)
World.add(engine.world, box)
}

Engine.run(engine);
Render.run(render);
function createRect(x,y,w,h,ID) {
 var bx=Bodies.rectangle(x,y,w,h)
 World.add(engine.world, bx)
}
function createGround(x,y,w,h) {
if(x=="def"){x=window.innerWidth/2}
if(y=="def"){y=window.innerHeight}
if(w=="def"){w=window.innerWidth}
if(h=="def"){h=50}
setTimeout(function(){
 var ground = Bodies.rectangle(x, y, w, h, { isStatic: true })
 World.add(engine.world, [ground])
 },50)
}
function ts() {
 eval(test.value)
}