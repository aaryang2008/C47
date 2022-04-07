var background, background2,form,code,security,puzzles, code2, puzzles2,security2;
var score=0;

function preload(){
background1=loadImage("background.jpeg");
background2=loadImage("background2.jpeg");
background3=loadImage("background3.jpeg");
}

function setup(){
    createCanvas(1000,500);
    puzzles=new Puzzle()
    security=new Security()
   
    
    
}

function draw(){
    background(background1);

    fill("white");
    text("Score:"+score,450,50);
    
    if (score===0){
        code();
        security.display();
        console.log(score);
    }
  
   
    if(score===7){
        clear()
        background(background3);
        fill("black")
        textSize(40);
        
    }
    drawSprites()

}