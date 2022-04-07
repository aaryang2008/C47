class Security2 {
    constructor(){
        this.access5 = createInput("Code5")
        this.access5.position(100,90);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(100,120);
        this.button5.style('background', 'lightgrey');  
        
        this.access6 = createInput("Code6")
        this.access6.position(700,190);
        this.access6.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(700,220);
        this.button6.style('background', 'lightgrey');    
        
        this.access7 = createInput("Code7")
        this.access7.position(100,290);
        this.access7.style('background', 'white');  

        this.button7 = createButton('Check');
        this.button7.position(100,320);
        this.button7.style('background', 'lightgrey');    





    }
    show(){
        this.button5.mousePressed(() => {
            if(puzzles.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });
        this.button6.mousePressed(() => {
            if(puzzles.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                score++;
            }
        });
        this.button7.mousePressed(() => {
            if(puzzles.authenticate(accessCode7,this.access7.value())){
                this.button7.hide();
                this.access7.hide();
                score++;
            }
        });
    }
}
