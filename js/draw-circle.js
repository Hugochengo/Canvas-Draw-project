class DrawCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;  
        console.log("from circle");          
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = colorCode;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.strokeStyle = colorCode;
        this.contextDraft.lineWidth=14;
        this.contextDraft.beginPath();

        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        
        
        
        
        this.contextDraft.arc(this.origX, this.origY,(coord[0]-this.origX),0,Math.PI*2,true);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.strokeStyle = colorCode;
        this.contextReal.beginPath();
       
        this.contextReal.lineWidth=14;
        this.contextReal.arc(this.origX, this.origY,(coord[0]-this.origX),0,Math.PI*2,true);
        this.contextReal.stroke();
        this.contextReal.closePath();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}