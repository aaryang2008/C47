class Security{
    constructor(){
        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');  
        
        this.access2 = createInput("Code2")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');    
        
        this.access3 = createInput("Code3")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey');    

        this.button4 = createButton('Next Level');
        this.button4.position(400,420);
        this.button4.style('background', 'lightgrey');    
       
        




    }
    display(){
        this.button1.mousePressed(() => {
            if(puzzles.authenticate(accessCode1,this.access1.value())){
                clear()
                this.button1.hide();
                this.access1.hide();
                score++;
                console.log(score)
            }
        });
        this.button2.mousePressed(() => {
            if(puzzles.authenticate(accessCode2,this.access2.value())){
                clear()
                this.button2.hide();
                this.access2.hide();
                score++;
                console.log(score)
            }
        });
        this.button3.mousePressed(() => {
            if(puzzles.authenticate(accessCode3,this.access3.value())){
                clear()
                this.button3.hide();
                this.access3.hide();
                score++;
                console.log(score)
            }
        });
        this.button4.mousePressed(() => {
            if(score===3){
                this.button4.hide();
                puzzles2=new Puzzle2()
                security2=new Security2()
                security2.show();
                background(background2);
               fill("black")
       
       
        textSize(40);
        code2();
            }
        });
        
    }
}