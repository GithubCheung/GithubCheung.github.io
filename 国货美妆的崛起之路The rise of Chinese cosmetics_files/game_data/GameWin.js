ig.module(
  'game.GameWin'
)
.requires(
  'impact.game',
	'impact.font',
	'impact.sound',
	'impact.image',
	'impact.entity',
	'plugins.button',
	'plugins.tween',
	'plugins.bg'
)
.defines(function() {
  	GameWin = ig.Game.extend({
  		mBg:null,

      step:1,
      mixAlpha:0,
      
  		
  		font: new ig.Font( '', 30, null, null, '#ee6256','center', 2, true),

  		init:function() {

        ig.resources = [];
      ig.ready = false;
      this.delayCtr = 0;
      this.oldX = -999;
      this.oldY = -999;

        dummyImages = [
          new ig.Image( 'media/game1/bg.jpg' ),
          new ig.Image("media/game1/mangkok.png"),
          new ig.Image("media/game1/command1.png"),
          new ig.Image("media/game1/command2.png"),
          new ig.Image("media/game1/command3.png"),
          new ig.Image("media/game1/command4.png"),
          new ig.Image("media/game1/next.png"),
          new ig.Image("media/game1/colorname1.png"),
          new ig.Image("media/game1/colorname2.png"),
          new ig.Image("media/game1/colorname3.png"),
          new ig.Image("media/game1/colorname4.png"),
          new ig.Image("media/game1/colorname5.png"),
          new ig.Image("media/game1/coloropt1.png"),
          new ig.Image("media/game1/coloropt2.png"),
          new ig.Image("media/game1/coloropt3.png"),
          new ig.Image("media/game1/coloropt4.png"),
          new ig.Image("media/game1/coloropt5.png"),
          new ig.Image("media/game1/color1.png"),
          new ig.Image("media/game1/color2.png"),
          new ig.Image("media/game1/color3.png"),
          new ig.Image("media/game1/color4.png"),
          new ig.Image("media/game1/color5.png"),
          new ig.Image("media/game1/scentopt1.png"),
          new ig.Image("media/game1/scentopt2.png"),
          new ig.Image("media/game1/scentopt3.png"),
          new ig.Image("media/game1/scentopt4.png"),
          new ig.Image("media/game1/scentopt5.png"),
          new ig.Image("media/game1/scentname1.png"),
          new ig.Image("media/game1/scentname2.png"),
          new ig.Image("media/game1/scentname3.png"),
          new ig.Image("media/game1/scentname4.png"),
          new ig.Image("media/game1/scentname5.png"),
          new ig.Image("media/game1/scent1.png"),
          new ig.Image("media/game1/scent2.png"),
          new ig.Image("media/game1/scent3.png"),
          new ig.Image("media/game1/scent4.png"),
          new ig.Image("media/game1/scent5.png"),
          new ig.Image("media/game1/moistopt1.png"),
          new ig.Image("media/game1/moistopt2.png"),
          new ig.Image("media/game1/moistopt3.png"),
          new ig.Image("media/game1/moistopt4.png"),
          new ig.Image("media/game1/moistopt5.png"),
          new ig.Image("media/game1/glitteropt1.png"),
          new ig.Image("media/game1/glitteropt2.png"),
          new ig.Image("media/game1/glitteropt3.png"),
          new ig.Image("media/game1/glitteropt4.png"),
          new ig.Image("media/game1/glitteropt5.png"),
          new ig.Image("media/game1/glittername1.png"),
          new ig.Image("media/game1/glittername2.png"),
          new ig.Image("media/game1/glittername3.png"),
          new ig.Image("media/game1/glittername4.png"),
          new ig.Image("media/game1/glittername5.png"),
          new ig.Image("media/game1/glitter1.png"),
          new ig.Image("media/game1/glitter2.png"),
          new ig.Image("media/game1/glitter3.png"),
          new ig.Image("media/game1/glitter4.png"),
          new ig.Image("media/game1/glitter5.png"),
          new ig.Image("media/game1/arrow.png"),


      ];

      window.hideTaek();

      ig.input.initMouse();
        ig.input.bind( ig.KEY.MOUSE1, 'click');

        this.mBg =  this.spawnEntity(
          Bg, ig.getX(0), ig.getY(0), 
          {
            
            animSheet:new ig.AnimationSheet( 'media/game1/bg.jpg', 700, 525)
          }
        ); 
        this.mBg.zIndex=this.entities.length-1

        this.mangkok=this.spawnEntity
        (
          Obj,ig.getX(195),ig.getY(164),
          {
            animSheet:new ig.AnimationSheet("media/game1/mangkok.png",ig.getX(315),ig.getY(209))
          }
        )
        this.mangkok.zIndex=this.entities.length-1

        this.steptitle=this.spawnEntity
        (
          Obj,ig.getX(123),ig.getY(51),
          {
            animSheet:new ig.AnimationSheet("media/game1/command1.png",ig.getX(460),ig.getY(60))
          }
        )
        this.steptitle.zIndex=this.entities.length-1

        this.nextbtn=this.spawnEntity
        (
          Button,ig.getX(572),ig.getY(440),
          {
            size:{x:ig.getX(126),y:ig.getY(82)},
            animSheet:new ig.AnimationSheet("media/game1/next.png",ig.getX(126),ig.getY(82)),
            pressedUp:function()
            {
              //console.log("flag 1 " + window.fggCt)
              if (window.fggCt != undefined) {
                //console.log("flag 2 " + window.fggCt)
                if (window.fggCt <= 0) {
                  window.fggCt = 5;
                  this.setState("hidden")
                  ig.game.step++
                  ig.game.initStep();  
                }
              }
              
            }
          }
        )
        this.nextbtn.zIndex=this.entities.length-1
        this.nextbtn.setState("hidden")

        this.colorname1=this.spawnEntity
        (
          Obj,ig.getX(10),ig.getY(359),
          {
            animSheet:new ig.AnimationSheet("media/game1/colorname1.png",ig.getX(100),ig.getY(23))
          }
        )
        this.colorname1.zIndex=this.entities.length-1

        this.colorname2=this.spawnEntity
        (
          Obj,ig.getX(130),ig.getY(458),
          {
            animSheet:new ig.AnimationSheet("media/game1/colorname2.png",ig.getX(108),ig.getY(23))
          }
        )
        this.colorname2.zIndex=this.entities.length-1

        this.colorname3=this.spawnEntity
        (
          Obj,ig.getX(291),ig.getY(489),
          {
            animSheet:new ig.AnimationSheet("media/game1/colorname3.png",ig.getX(108),ig.getY(23))
          }
        )
        this.colorname3.zIndex=this.entities.length-1

        this.colorname4=this.spawnEntity
        (
          Obj,ig.getX(455),ig.getY(456),
          {
            animSheet:new ig.AnimationSheet("media/game1/colorname4.png",ig.getX(108),ig.getY(23))
          }
        )
        this.colorname4.zIndex=this.entities.length-1

        this.colorname5=this.spawnEntity
        (
          Obj,ig.getX(579),ig.getY(355),
          {
            animSheet:new ig.AnimationSheet("media/game1/colorname5.png",ig.getX(108),ig.getY(23))
          }
        )
        this.colorname5.zIndex=this.entities.length-1

        this.coloropt1=this.spawnEntity
        (
          Button,ig.getX(37),ig.getY(261),
          {
            size:{x:ig.getX(139),y:ig.getY(90)},
            animSheet:new ig.AnimationSheet("media/game1/coloropt1.png",ig.getX(139),ig.getY(90)),
            pressedUp:function()
            {
              ig.game.chooseColor(1)
            }
          }
        )
        this.coloropt1.zIndex=this.entities.length-1

        this.coloropt2=this.spawnEntity
        (
          Button,ig.getX(117),ig.getY(361),
          {
            size:{x:ig.getX(139),y:ig.getY(90)},
            animSheet:new ig.AnimationSheet("media/game1/coloropt2.png",ig.getX(139),ig.getY(90)),
            pressedUp:function()
            {
              ig.game.chooseColor(2)
            }
          }
        )
        this.coloropt2.zIndex=this.entities.length-1

        this.coloropt3=this.spawnEntity
        (
          Button,ig.getX(277),ig.getY(391),
          {
            size:{x:ig.getX(139),y:ig.getY(90)},
            animSheet:new ig.AnimationSheet("media/game1/coloropt3.png",ig.getX(139),ig.getY(90)),
            pressedUp:function()
            {
              ig.game.chooseColor(3)
            }
          }
        )
        this.coloropt3.zIndex=this.entities.length-1

        this.coloropt4=this.spawnEntity
        (
          Button,ig.getX(447),ig.getY(361),
          {
            size:{x:ig.getX(139),y:ig.getY(90)},
            animSheet:new ig.AnimationSheet("media/game1/coloropt4.png",ig.getX(139),ig.getY(90)),
            pressedUp:function()
            {
              ig.game.chooseColor(4)
            }
          }
        )
        this.coloropt4.zIndex=this.entities.length-1

        this.coloropt5=this.spawnEntity
        (
          Button,ig.getX(537),ig.getY(261),
          {
            size:{x:ig.getX(139),y:ig.getY(90)},
            animSheet:new ig.AnimationSheet("media/game1/coloropt5.png",ig.getX(139),ig.getY(90)),
            pressedUp:function()
            {
              ig.game.chooseColor(5)
            }
          }
        )
        this.coloropt5.zIndex=this.entities.length-1

        //if (window.isSharpMiniStock != true) {
        this.sound=this.spawnEntity(SoundButton,ig.getX(604),ig.getY(5))
      
        this.sound.zIndex=this.entities.length-1
     // }

        /*this.btnLogo = this.spawnEntity( GGGLogo.extend({
        zIndex: 8

      }), ig.getX(20), ig.getY(440));
      this.btnLogo.zIndex=this.entities.length-1*/

        // load the resources
        ig.ready = true;

        // Start the custom preloader with the captured resources
        this.loader = new IntermediateLoader( null, ig.resources );
        this.loader.load();

  		},

      initStep:function()
      {
        /*if (this.step == 5) 
          this.step = 6;*/
        //  this.step = 5;

        if (this.step==2)
         {
            this.steptitle.animSheet=new ig.AnimationSheet("media/game1/command2.png",ig.getX(460),ig.getY(60))
            this.steptitle.addAnim("idle",1,[0])
            this.steptitle.currentAnim=this.steptitle.anims.idle
            for (var i = 1; i <=5; i++)
            {
              this["colorname"+i].kill();
              this["coloropt"+i].kill();
              this["scentopt"+i]=this.spawnEntity
              (
                Button,ig.getX(0),ig.getY(0),
                {
                  size:{x:ig.getX(101),y:ig.getY(130)},
                  animSheet:new ig.AnimationSheet("media/game1/scentopt"+i+".png",ig.getX(101),ig.getY(130)),
                  pressedUp:function()
                  {
                    ig.game.chooseScent(this)
                  }
                }
              )
              this["scentopt"+i].zIndex=this.entities.length-1
            }
            this.scentopt1.pos.x=ig.getX(54)
            this.scentopt1.pos.y=ig.getY(189)
            this.scentopt2.pos.x=ig.getX(136)
            this.scentopt2.pos.y=ig.getY(292)
            this.scentopt3.pos.x=ig.getX(302)
            this.scentopt3.pos.y=ig.getY(341)
            this.scentopt4.pos.x=ig.getX(472)
            this.scentopt4.pos.y=ig.getY(297)
            this.scentopt5.pos.x=ig.getX(554)
            this.scentopt5.pos.y=ig.getY(199)

            this.scentname1=this.spawnEntity
            (
              Obj,ig.getX(37),ig.getY(321),
              {
                animSheet:new ig.AnimationSheet("media/game1/scentname1.png",ig.getX(91),ig.getY(31))
              }
            )
            this.scentname1.zIndex=this.entities.length-1

            this.scentname2=this.spawnEntity
            (
              Obj,ig.getX(136),ig.getY(431),
              {
                animSheet:new ig.AnimationSheet("media/game1/scentname2.png",ig.getX(91),ig.getY(31))
              }
            )
            this.scentname2.zIndex=this.entities.length-1

            this.scentname3=this.spawnEntity
            (
              Obj,ig.getX(292),ig.getY(477),
              {
                animSheet:new ig.AnimationSheet("media/game1/scentname3.png",ig.getX(124),ig.getY(31))
              }
            )
            this.scentname3.zIndex=this.entities.length-1

            this.scentname4=this.spawnEntity
            (
              Obj,ig.getX(448),ig.getY(433),
              {
                animSheet:new ig.AnimationSheet("media/game1/scentname4.png",ig.getX(124),ig.getY(31))
              }
            )
            this.scentname4.zIndex=this.entities.length-1

            this.scentname5=this.spawnEntity
            (
              Obj,ig.getX(598),ig.getY(337),
              {
                animSheet:new ig.AnimationSheet("media/game1/scentname5.png",ig.getX(86),ig.getY(31))
              }
            )
            this.scentname5.zIndex=this.entities.length-1

         }
         else if (this.step==3)
          {
            this.steptitle.animSheet=new ig.AnimationSheet("media/game1/command3.png",ig.getX(535),ig.getY(60))
            this.steptitle.addAnim("idle",1,[0])
            this.steptitle.currentAnim=this.steptitle.anims.idle
            this.steptitle.pos.x=ig.getX(83)
            for (var i = 1; i <=5; i++)
            {
              this["scentname"+i].kill();
              this["scentopt"+i].kill();
              this["moistopt"+i]=this.spawnEntity
              (
                Button,ig.getX(0),ig.getY(0),
                {
                  size:{x:ig.getX(98),y:ig.getY(135)},
                  animSheet:new ig.AnimationSheet("media/game1/moistopt"+i+".png",ig.getX(98),ig.getY(135)),
                  pressedUp:function()
                  {
                    ig.game.chooseMoist(this)
                  }
                }
              )
              this["moistopt"+i].zIndex=this.entities.length-1

              this["moistname"+i]=this.spawnEntity
              (
                Button,ig.getX(0),ig.getY(0),
                {
                  
                  animSheet:new ig.AnimationSheet("media/game1/moistname"+i+".png",ig.getX(124),ig.getY(31)),
                  
                }
              )
              this["moistname"+i].zIndex=this.entities.length-1
            }
            this.moistopt1.pos.x=ig.getX(35)
            this.moistopt1.pos.y=ig.getY(176)
            this.moistopt2.pos.x=ig.getX(126)
            this.moistopt2.pos.y=ig.getY(280)
            this.moistopt3.pos.x=ig.getX(302)
            this.moistopt3.pos.y=ig.getY(347)
            this.moistopt4.pos.x=ig.getX(477)
            this.moistopt4.pos.y=ig.getY(285)
            this.moistopt5.pos.x=ig.getX(560)
            this.moistopt5.pos.y=ig.getY(177)

            this.moistname1.pos.x=ig.getX(10)
            this.moistname1.pos.y=ig.getY(317)
            this.moistname2.pos.x=ig.getX(97)
            this.moistname2.pos.y=ig.getY(423)
            this.moistname3.pos.x=ig.getX(287)
            this.moistname3.pos.y=ig.getY(489)
            this.moistname4.pos.x=ig.getX(447)
            this.moistname4.pos.y=ig.getY(423)
            this.moistname5.pos.x=ig.getX(571)
            this.moistname5.pos.y=ig.getY(318)

          }
          else if (this.step==4)
          {
            this.nextbtn.setState("idle")
            this.steptitle.animSheet=new ig.AnimationSheet("media/game1/command4.png",ig.getX(468),ig.getY(60))
            this.steptitle.addAnim("idle",1,[0])
            this.steptitle.currentAnim=this.steptitle.anims.idle
            this.steptitle.pos.x=ig.getX(116)

            for (var i = 1; i <=5; i++)
            {
              this["moistname"+i].kill();
              this["moistopt"+i].kill();
              this["glitteropt"+i]=this.spawnEntity
              (
                Button,ig.getX(0),ig.getY(0),
                {
                  size:{x:ig.getX(54),y:ig.getY(113)},
                  animSheet:new ig.AnimationSheet("media/game1/glitteropt"+i+".png",ig.getX(54),ig.getY(113)),
                  pressedUp:function()
                  {
                    ig.game.chooseGlitter(this)
                  }
                }
              )
              this["glitteropt"+i].zIndex=this.entities.length-1

              this["glittername"+i]=this.spawnEntity
              (
                Button,ig.getX(0),ig.getY(0),
                {
                  
                  animSheet:new ig.AnimationSheet("media/game1/glittername"+i+".png",ig.getX(124),ig.getY(31)),
                  
                }
              )
              this["glittername"+i].zIndex=this.entities.length-1
            }

            this.glitteropt1.pos.x=ig.getX(72)
            this.glitteropt1.pos.y=ig.getY(197)
            this.glitteropt2.pos.x=ig.getX(142)
            this.glitteropt2.pos.y=ig.getY(305)
            this.glitteropt3.pos.x=ig.getX(327)
            this.glitteropt3.pos.y=ig.getY(376)
            this.glitteropt4.pos.x=ig.getX(512)
            this.glitteropt4.pos.y=ig.getY(305)
            this.glitteropt5.pos.x=ig.getX(582)
            this.glitteropt5.pos.y=ig.getY(197)

            this.glittername1.pos.x=ig.getX(10)
            this.glittername1.pos.y=ig.getY(317)
            this.glittername2.pos.x=ig.getX(97)
            this.glittername2.pos.y=ig.getY(423)
            this.glittername3.pos.x=ig.getX(287)
            this.glittername3.pos.y=ig.getY(489)
            this.glittername4.pos.x=ig.getX(447)
            this.glittername4.pos.y=ig.getY(423)
            this.glittername5.pos.x=ig.getX(571)
            this.glittername5.pos.y=ig.getY(318)
          }
          else if (this.step==5)
          {
            this.steptitle.kill();

            for (var i = 1; i <=5; i++)
            {
             /* this["glittername"+i].kill();
              this["glitteropt"+i].kill();*/
            }
            
            this.sensormouse=this.spawnEntity
            (
              Obj,ig.getX(ig.input.mouse.x),ig.getY(ig.input.mouse.y),
              {
                size:{x:ig.getX(10),y:ig.getY(10)},
                type:ig.Entity.TYPE.A,
                animSheet:new ig.AnimationSheet("media/game1/sensormouse.jpg",ig.getX(10),ig.getY(10))
              }
            )
            this.sensormouse.currentAnim.alpha=0

            this.sensorbesar=this.spawnEntity
            (
              Obj,ig.getX(229),ig.getY(180),
              {
                size:{x:ig.getX(230),y:ig.getY(150)},
                type:ig.Entity.TYPE.A,
                checkAgainst: ig.Entity.TYPE.A,
                animSheet:new ig.AnimationSheet("media/game1/sensorbesar.jpg",ig.getX(60),ig.getY(60)),
                /*check:function()
                {
                  if (ig.game.delayCtr > 0) {
                    return;
                  }

                  ig.game.delayCtr = 10;
                  this.counter<4? this.counter++ : this.counter=1
                  ig.game.adukan.pos.x=ig.getX(this.pos.x)
                  ig.game.adukan.pos.y=ig.getY(this.pos.y-220)
                  if (ig.game.mixture.currentAnim.alpha<1)
                   {
                      ig.game.mixture.currentAnim.alpha+=0.1
                      if (ig.game.mixture.currentAnim.alpha>=1)
                       {
                          ig.game.mixture.currentAnim.alpha=1
                          ig.game.nextbtn.setState("idle")
                          ig.game.arrows.kill();
                          ig.game.adukan.kill();
                       }
                   }
                }*/
              }
            )
            this.counter = 1;
            this.sensorbesar.counter=1
            this.sensorbesar.arrPos=[[229,222],[314,169],[414,226],[322,271]]
            this.sensorbesar.currentAnim.alpha=0

            this.mixture=this.spawnEntity
            (
              Obj,ig.getX(212),ig.getY(195),
              {
                animSheet:new ig.AnimationSheet("media/game1/mix"+ig.global.lipstickColor+ig.global.lipstickGlit+".png",ig.getX(276),ig.getY(133))
              }
            )
            this.mixture.zIndex=this.entities.length-1
            this.mixture.currentAnim.alpha=0

            this.arrows=this.spawnEntity
            (
              Obj,ig.getX(240),ig.getY(174),
              {
                animSheet:new ig.AnimationSheet("media/game1/arrow.png",ig.getX(232),ig.getY(140))
              }
            )
            this.arrows.zIndex=this.entities.length-1

             this.adukan=this.spawnEntity
            (
              Obj,ig.getX(this.sensorbesar.pos.x),ig.getY(this.sensorbesar.pos.y-220),
              {
                animSheet:new ig.AnimationSheet("media/game1/sendok.png",ig.getX(114),ig.getY(254))
              }
            )
            this.adukan.zIndex=this.entities.length-1
          }
          else if (this.step==6)
          {
            ///ke window berikut
            ig.system.setGame(Dressup)
          }
      },

      chooseGlitter:function(obj)
      {
        var idx=0
        if (obj==this.glitteropt1)
         {
            idx=1
         }
        else if (obj==this.glitteropt2)
         {
            idx=2
         }
        else if (obj==this.glitteropt3)
         {
            idx=3
         }
        else if (obj==this.glitteropt4)
         {
            idx=4
         }
        else if (obj==this.glitteropt5)
         {
            idx=5
         }
         if (ig.global.lipstickGlit==0)
        {
          this.glitterPicked=this.spawnEntity
            (
              Obj,ig.getX(265),ig.getY(204),
              {
                animSheet:new ig.AnimationSheet("media/game1/glitter"+idx+".png",ig.getX(162),ig.getY(89))
              }
            )
            this.glitterPicked.zIndex=this.entities.length-1
        }
        else
        {
          this.glitterPicked.animSheet=new ig.AnimationSheet("media/game1/glitter"+idx+".png",ig.getX(162),ig.getY(89))
            this.glitterPicked.addAnim("idle",1,[0])
            this.glitterPicked.currentAnim=this.glitterPicked.anims.idle
        }
        ig.global.lipstickGlit=idx
      },

      cekAdukan:function() {
        if (this.step != 5 || ig.game.mixture.currentAnim.alpha>=1) 
          return;

        var x1 = this.sensormouse.pos.x;
        var y1 = this.sensormouse.pos.y;
        var x2 = this.sensorbesar.pos.x + 115;
        var y2 = this.sensorbesar.pos.y + 75;
        var d = Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );

        var x3 = this.oldX;
        var y3 = this.oldY

        var d2 = Math.sqrt( (x3-=x1)*x3 + (y3-=y1)*y3 );

        if (d <= 110 && d2 >= 10) {
          this.oldX = x1;
          this.oldY = y1;
           ig.game.adukan.pos.x=ig.getX(this.sensorbesar.arrPos[this.counter-1][0])
           ig.game.adukan.pos.y=ig.getY(this.sensorbesar.arrPos[this.counter-1][1]) - 220
            this.counter<4? this.counter++ : this.counter=1
          if (ig.game.mixture.currentAnim.alpha<1)
           {
              ig.game.mixture.currentAnim.alpha+=0.1
              if (ig.game.mixture.currentAnim.alpha>=1)
               {
                  ig.game.mixture.currentAnim.alpha=1
                  ig.game.nextbtn.setState("idle")
                  ig.game.arrows.kill();
                  ig.game.adukan.kill();
               }
           }
        }
        
      },

      chooseMoist:function(obj)
      {
        var idx=0
        if (obj==this.moistopt1)
         {
            idx=1
         }
        else if (obj==this.moistopt2)
         {
            idx=2
         }
        else if (obj==this.moistopt3)
         {
            idx=3
         }
        else if (obj==this.moistopt4)
         {
            idx=4
         }
        else if (obj==this.moistopt5)
         {
            idx=5
         }

         if (ig.global.lipstickMoist==0)
        {
          this.moistPicked=this.spawnEntity
            (
              Obj,ig.getX(293),ig.getY(253),
              {
                animSheet:new ig.AnimationSheet("media/game1/moist"+idx+".png",ig.getX(127),ig.getY(69))
              }
            )
            this.moistPicked.zIndex=this.entities.length-1
        }
        else
        {
          this.moistPicked.animSheet=new ig.AnimationSheet("media/game1/moist"+idx+".png",ig.getX(127),ig.getY(69))
            this.moistPicked.addAnim("idle",1,[0])
            this.moistPicked.currentAnim=this.moistPicked.anims.idle
        }
        ig.global.lipstickMoist=idx
        this.nextbtn.setState("idle")

      },

      chooseScent:function(obj)
      {
        var idx=0
        if (obj==this.scentopt1)
         {
            idx=1
         }
        else if (obj==this.scentopt2)
         {
            idx=2
         }
        else if (obj==this.scentopt3)
         {
            idx=3
         }
        else if (obj==this.scentopt4)
         {
            idx=4
         }
        else if (obj==this.scentopt5)
         {
            idx=5
         }

        if (ig.global.lipstickScent==0)
        {
          this.scentPicked=this.spawnEntity
            (
              Obj,ig.getX(231),ig.getY(232),
              {
                animSheet:new ig.AnimationSheet("media/game1/scent"+idx+".png",ig.getX(100),ig.getY(60))
              }
            )
            this.scentPicked.zIndex=this.entities.length-1


        }
        else
         {
            this.scentPicked.animSheet=new ig.AnimationSheet("media/game1/scent"+idx+".png",ig.getX(100),ig.getY(60))
            this.scentPicked.addAnim("idle",1,[0])
            this.scentPicked.currentAnim=this.scentPicked.anims.idle
         }
        ig.global.lipstickScent=idx
        this.nextbtn.setState("idle")
        
      },

      chooseColor:function(idx)
      {
        if (ig.global.lipstickColor==0)
         {
            this.colorPicked=this.spawnEntity
            (
              Obj,ig.getX(350),ig.getY(218),
              {
                animSheet:new ig.AnimationSheet("media/game1/color"+idx+".png",ig.getX(129),ig.getY(87))
              }
            )
            this.colorPicked.zIndex=this.entities.length-1
         }
         else
         {
            this.colorPicked.animSheet=new ig.AnimationSheet("media/game1/color"+idx+".png",ig.getX(129),ig.getY(87))
            this.colorPicked.addAnim("idle",1,[0])
            this.colorPicked.currentAnim=this.colorPicked.anims.idle
         }
        ig.global.lipstickColor=idx
        this.nextbtn.setState("idle")


      },


      openLink:function(href) { 
            if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i))
            {
                var link = document.createElement('a');
                link.setAttribute('href', href);
                link.setAttribute('target','_blank');
                var clickevent = document.createEvent('Event');
                clickevent.initEvent('click', true, false);
                link.dispatchEvent(clickevent);
                return false;
            }
            else {
                window.open(href, '_blank');
            }
        },

        draw:function() {
          // this.mBg.draw();
        if (this.loader == null) {
          
          if( this.clearColor ) {
                ig.system.clear( this.clearColor );
              }
              
              // first draw normal entities
              var ctx = document.getElementById('canvas').getContext('2d');
              for( var i = 0; i < this.entities.length; i++ ) {
                
                if ((!this.entities[i].bringToFront || this.entities[i].bringToFront == 'undefined') && this.entities[i].zIndex >= 0) {
                  if (this.entities[i].skala) {
                    ctx.save();
                    ctx.scale(this.entities[i].skala,this.entities[i].skala);
                  }
                  this.entities[i].draw();
                  if (this.entities[i].skala) {
                    ctx.restore();
                  }
                }
              }
              
                    
              // second draw bringToFront entities
              for( var i = 0; i < this.entities.length; i++ ) {
                if (this.entities[i].bringToFront) {
                  if (this.entities[i].skala) {
                    ctx.save();
                    ctx.scale(this.entities[i].skala,this.entities[i].skala);
                  }
                  this.entities[i].draw();
                  if (this.entities[i].skala) {
                    ctx.restore();
                  }
                }
              }
          
        }
      },

      openLink:function(href) { 
            if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i))
            {
                var link = document.createElement('a');
                link.setAttribute('href', href);
                link.setAttribute('target','_blank');
                var clickevent = document.createEvent('Event');
                clickevent.initEvent('click', true, false);
                link.dispatchEvent(clickevent);
                return false;
            }
            else {
                window.open(href, '_blank');
            }
        },

      update:function() {
        this.parent();
        
        if (window.fggCt != undefined && window.fggCt > 0) 
          window.fggCt--;

        //console.log("lala " + this.delayCtr);
        if (this.delayCtr > 0) {
          this.delayCtr--;
         // console.log("lala " + this.delayCtr);
        } else {
          this.cekAdukan();
          this.delayCtr = 7;
        }

        // this.btnLogo.fireMouseDown();
        if (this.sensormouse)
         {
            this.sensormouse.pos.x=ig.getX(ig.input.mouse.x-5)
            this.sensormouse.pos.y=ig.getY(ig.input.mouse.y-5)
         };

        /*  //use this to detect your mouse coordinate
        if (ig.input.pressed("click"))
         {
          console.log("mouseX= "+ig.input.mouse.x+" mouseY= "+ig.input.mouse.y);
         }*/
      },

  	});
});