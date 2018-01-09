class DrawStraightLine extends PaintFunction {
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = colorCode;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineCap = "square";
        this.contextReal.lineWidth = straightlineSize; //need to make dynamic
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);    
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.lineWidth = straightlineSize; // make dynamic
        this.contextDraft.beginPath();
        this.contextDraft.strokeStyle = colorCode;
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();    
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextReal.lineWidth = straightlineSize;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}

    
}