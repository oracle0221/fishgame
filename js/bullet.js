class Bullet extends Sprite{
  constructor(type, x=0, y=0, rotation=0){
    const SIZES=[
      null,
      new DrawRect(_imgs.bullet, 86, 0, 24, 26),
      new DrawRect(_imgs.bullet, 61, 0, 25, 29),
      new DrawRect(_imgs.bullet, 32, 36, 29, 30),
      new DrawRect(_imgs.bullet, 30, 82, 29, 33),
      new DrawRect(_imgs.bullet, 0, 82, 30, 34),
      new DrawRect(_imgs.bullet, 30, 0, 31, 35),
      new DrawRect(_imgs.bullet, 0, 44, 32, 38),
    ];

    super(SIZES[type], x, y, rotation);

    this.type=type;
    this.speed=10;

    this.radius=14;
  }
}
