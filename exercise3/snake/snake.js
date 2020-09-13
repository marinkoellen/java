function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale*1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = []; //store coordinates of where snake is

    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";

        for (let i=0; i<this.tail.length; i++){
            //go through snakes and tail and move it to the left
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale,scale);
        } 

        ctx.fillRect(this.x, this.y, scale, scale); // x,y, width, height this is drawing current position
        //The fillRect() method draws a filled rectangle whose starting point is at (x, y) and whose size is specified by width and height
    }
    this.update = function(){

        for (let i=0; i<this.tail.length -1; i++){
            //go through snakes and tail and move it to the left
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total -1] = { x: this.x, y: this.y } //adding the coordinates of the new tail


        this.x += this.xSpeed; //incrementing x cordinate by scale
        this.y += this.ySpeed; //incrementing y 

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }

    }

    this.changeDirection = function (direction) {
        switch(direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale*1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale*1;
                break;
            case 'Left':
                this.xSpeed = -scale*1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale*1;
                this.ySpeed = 0;
                break;


        }

    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total ++
            return true;
        }
        return false;
    }


    this.collision = function(){
        for (let i=0; i<this.tail.length; i++) {
            if (this.tail[i].x == this.x && this.tail[i].y == this.y) 
              return true;
          }
        return false;
    }

}