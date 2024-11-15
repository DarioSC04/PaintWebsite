import { drawable } from './Drawable.js';
export class Shape extends drawable {

    private startX: number;
    private startY: number;
    public endX: number;
    public endY: number;

    private fill: boolean;
    private shape: string;

    public constructor(startX: number, startY: number, endX: number, endY: number, color: string, lineWidth: number, fill: boolean, shape: string, drawMode: boolean) {
        super(color, lineWidth, drawMode);

        this.startX = startX;
        this.startY = startY;

        this.endX = endX;
        this.endY = endY;

        this.color = color;
        this.lineWidth = lineWidth;
        this.fill = fill;
        this.shape = shape;
    }


    draw(ctx: CanvasRenderingContext2D): void {

        if(this.seeOutline == true){
            this.drawoutline(ctx);
        }

        ctx.beginPath()
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;

        switch (this.shape) {
            case 'rec':
                ctx.rect(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY)
                break;
            case 'cir':
                ctx.arc(this.startX, this.startY, Math.sqrt((this.endX - this.startX) ** 2 + (this.endY - this.startY) ** 2), 0, Math.PI * 2)
                break;
            case 'lin':
                ctx.moveTo(this.startX, this.startY)
                ctx.lineTo(this.endX, this.endY)
                ctx.stroke();
                return;
        }


        if (this.fill) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }

    isInside(x: number, y: number): boolean {
        switch (this.shape) {
            case 'rec':
                return (x > this.startX && x < this.endX && y > this.startY && y < this.endY) || (x < this.startX && x > this.endX && y < this.startY && y > this.endY) || (x < this.startX && x > this.endX && y > this.startY && y < this.endY) || (x > this.startX && x < this.endX && y < this.startY && y > this.endY);
            case 'cir':
                return Math.sqrt((x - this.startX) ** 2 + (y - this.startY) ** 2) < Math.sqrt((this.endX - this.startX) ** 2 + (this.endY - this.startY) ** 2);
            case 'lin':
                const distance: number = Math.abs((this.endY - this.startY) * x - (this.endX - this.startX) * y + this.endX * this.startY - this.endY * this.startX) / Math.sqrt((this.endY - this.startY) ** 2 + (this.endX - this.startX) ** 2);

                const isBetweenPoints: boolean = x >= Math.min(this.startX, this.endX) && x <= Math.max(this.startX, this.endX) && y >= Math.min(this.startY, this.endY) && y <= Math.max(this.startY, this.endY);;
                
                return distance <= this.lineWidth *1.5 && isBetweenPoints; // 1,5 ist ein wer der der ausprobieren rausgefunden wurde
        }
        return false;
    }

    drawoutline(ctx: CanvasRenderingContext2D): void {

        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.setLineDash([5, 15]);

        const distance = 20;

        switch (this.shape) {
            case 'rec':
            case 'lin':
                if(this.startX<this.endX && this.startY<this.endY){
                    ctx.rect(this.startX -distance, this.startY -distance, this.endX - this.startX + distance* 2, this.endY - this.startY + distance*2)
                }else if (this.startX<this.endX && this.startY>this.endY){
                    ctx.rect(this.startX -distance, this.endY -distance, this.endX - this.startX + distance* 2, this.startY - this.endY + distance*2)
                }else if (this.startX>this.endX && this.startY<this.endY){
                    ctx.rect(this.endX -distance, this.startY -distance, this.startX - this.endX + distance* 2, this.endY - this.startY + distance*2)
                }else if (this.startX>this.endX && this.startY>this.endY){
                    ctx.rect(this.endX -distance, this.endY -distance, this.startX - this.endX + distance* 2, this.startY - this.endY + distance*2)
                }
                break;
            case 'cir':
                let radius = Math.sqrt((this.endX - this.startX) ** 2 + (this.endY - this.startY) ** 2);
                ctx.rect(this.startX - radius - distance, this.startY - radius - distance, radius * 2 + distance * 2, radius * 2 + distance * 2)
                break;
        }
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    move(x: number, y: number): void {
        this.startX+=x;
        this.endX+=x;

        this.startY+=y;
        this.endY+=y;

        this.setLastEditedNow();
    }

    maxoutPoints(): number[]|null {
        switch (this.shape) {
            case 'rec':
            case 'lin':
                if(this.startX<this.endX && this.startY<this.endY){
                    return [this.startX, this.startY, this.endX, this.endY];
                }else if (this.startX<this.endX && this.startY>this.endY){
                    return [this.endX, this.startY, this.startX, this.endY];
                }else if (this.startX>this.endX && this.startY<this.endY){
                    return [this.startX, this.endY, this.endX, this.startY];
                }else if (this.startX>this.endX && this.startY>this.endY){
                    return [this.endX, this.endY, this.startX, this.startY];
                }
                break;
            case 'cir':
                let radius = Math.sqrt((this.endX - this.startX) ** 2 + (this.endY - this.startY) ** 2);
                return [this.startX - radius, this.startY - radius, this.startX + radius, this.startY + radius];
                break;
        }
        return null;
    }


}