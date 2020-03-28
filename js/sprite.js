class Sprite{
  //w,h,x,y,rotate
  //draw(),碰撞检测()

  constructor(drawRect, x=0, y=0, rotation=0){
    if(!(drawRect instanceof DrawRect)){
      throw new Error('img must be a DrawRect');
    }

    this.setDrawRect(drawRect);
    this.x=x;
    this.y=y;
    this.rotation=rotation;

    this.speed=0;

    //动画
    this.MAX_FRAME=0;
    this.curFrame=0;

    this.scaleX=1;
    this.scaleY=1;

    this.frameRate=1;
    this.frameRateNow=0;

    //碰撞检测
    this.radius=0;
  }

  setDrawRect(drawRect){
    this.drawRect=drawRect;
    this.width=drawRect.sw;
    this.height=drawRect.sh;
  }

  nextFrame(){
    this.frameRateNow++;

    if(this.frameRateNow==this.frameRate){
      this.frameRateNow=0;

      this.curFrame++;

      if(this.curFrame>=this.MAX_FRAME){
        this.curFrame=0;

        return true;
      }

      return false;
    }
  }

  draw(gd){
    gd.save();

    gd.translate(this.x, this.y);
    gd.rotate(d2a(this.rotation));
    gd.scale(this.scaleX, this.scaleY);

    gd.drawImage(
      this.drawRect.img,
      this.drawRect.sx, this.drawRect.sy+this.height*this.curFrame, this.width, this.height,
      -this.width/2, -this.height/2, this.width, this.height
    );

    gd.restore();
  }

  inRect(x, y){
    if(
      this.x-this.width/2<=x && x<=this.x+this.width/2 &&
      this.y-this.height/2<=y && y<=this.y+this.height/2
    ){
      return true;
    }else{
      return false;
    }
  }

  outOfRect(x, y, w, h){
    if(this.x<x || this.y<y || this.x>x+w || this.y>y+h){
      return true;
    }else{
      return false;
    }
  }

  move(x, y){
    if(arguments.length==0){
      let x_speed=this.speed*Math.sin(d2a(this.rotation));
      let y_speed=this.speed*Math.cos(d2a(this.rotation));

      this.x+=x_speed;
      this.y-=y_speed;
    }else{
      this.x+=(x-this.x)/10;
      this.y+=(y-this.y)/10;
    }
  }

  collTest(other){
    return Math.sqrt(Math.pow(this.x-other.x, 2)+Math.pow(this.y-other.y, 2))<this.radius+other.radius;
  }
}
