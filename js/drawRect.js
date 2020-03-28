class DrawRect{
  constructor(img, sx, sy, sw, sh){
    if(!img || !sw || !sh){
      throw new Error('img and sw and sh is required');
    }

    this.img=img;
    this.sx=sx;
    this.sy=sy;
    this.sw=sw;
    this.sh=sh;
  }
}
