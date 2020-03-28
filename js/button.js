class Button extends Sprite{
  constructor(drawRectNormal, drawRectActive, x=0, y=0, rotation=0){
    super(drawRectNormal, x, y, rotation);

    this.drawRectNormal=drawRectNormal;
    this.drawRectActive=drawRectActive;

    this.downAtMe=false;
  }

  down(x, y){
    if(this.inRect(x, y)){
      this.setDrawRect(this.drawRectActive);

      this.downAtMe=true;
    }else{
      this.downAtMe=false;
    }
  }
  up(x, y){
    this.setDrawRect(this.drawRectNormal);

    if(this.inRect(x, y) && this.downAtMe){
      //触发onclick
      this.onclick && this.onclick();
    }
  }
}
