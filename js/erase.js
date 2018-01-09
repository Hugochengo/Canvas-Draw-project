class Eraser extends PaintFunction {
    
    constructor(contextReal){
        super();
        this.context = contextReal;
     }
    
        
    onMouseDown(coord,event){
        this.context.beginPath();
        this.context.lineWidth = eraserSize;
        this.orgX = coord[0];
        this.orgY = coord[1];
        
        this.context.moveTo(this.orgX, this.orgY);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){    
        this.context.globalCompositeOperation="source-over";
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.globalCompositeOperation="destination-out";
        this.context.lineTo(x,y);
        this.context.stroke();     
    }
}