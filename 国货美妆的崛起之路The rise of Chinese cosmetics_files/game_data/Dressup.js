ig.module(
  'game.Dressup'
)
.requires(
  	'impact.game',
	'impact.font',
	'impact.sound',
	'impact.image',
	'impact.entity',
	'plugins.button',
	'plugins.tween',
	'plugins.myentity',
	'plugins.bg'
)

.defines(function() {
  	Dressup = ig.Game.extend({
  		mBg:null,
  		mBtn1:null,
  		mBtn2:null,
      chosen:null,

      bajuidx:1,
      hairidx:1,
      accidx:1,
      blushonidx:1,
      shadowidx:1,
      eyeidx:1,

      arrSticker:[],

      
  		

  		font: new ig.Font( '', 30, null, null, '#6D0000','center', 4, true, true, "#FFF387"),

  		init:function() {
  			ig.resources = [];
			ig.ready = false;

  			dummyImages = [
					new ig.Image( 'media/game2/bg.png' ),
          new ig.Image("media/game3/bg.png"),
					new ig.Image("media/game2/package11.png"),
					new ig.Image("media/game2/package12.png"),
					new ig.Image("media/game2/package13.png"),
					new ig.Image("media/game2/package14.png"),
					new ig.Image("media/game2/package21.png"),
					new ig.Image("media/game2/package22.png"),
					new ig.Image("media/game2/package23.png"),
					new ig.Image("media/game2/package24.png"),
					new ig.Image("media/game2/package31.png"),
					new ig.Image("media/game2/package32.png"),
					new ig.Image("media/game2/package33.png"),
					new ig.Image("media/game2/package34.png"),
					new ig.Image("media/game2/package41.png"),
					new ig.Image("media/game2/package42.png"),
					new ig.Image("media/game2/package43.png"),
					new ig.Image("media/game2/package44.png"),
					new ig.Image("media/game2/package51.png"),
					new ig.Image("media/game2/package52.png"),
					new ig.Image("media/game2/package53.png"),
					new ig.Image("media/game2/package54.png"),

          new ig.Image("media/game2/lip10.png"),
          new ig.Image("media/game2/lip11.png"),
          new ig.Image("media/game2/lip12.png"),
          new ig.Image("media/game2/lip13.png"),
          new ig.Image("media/game2/lip14.png"),
          new ig.Image("media/game2/lip15.png"),
          new ig.Image("media/game2/lip20.png"),
          new ig.Image("media/game2/lip21.png"),
          new ig.Image("media/game2/lip22.png"),
          new ig.Image("media/game2/lip23.png"),
          new ig.Image("media/game2/lip24.png"),
          new ig.Image("media/game2/lip25.png"),
          new ig.Image("media/game2/lip30.png"),
          new ig.Image("media/game2/lip31.png"),
          new ig.Image("media/game2/lip32.png"),
          new ig.Image("media/game2/lip33.png"),
          new ig.Image("media/game2/lip34.png"),
          new ig.Image("media/game2/lip35.png"),
          new ig.Image("media/game2/lip40.png"),
          new ig.Image("media/game2/lip41.png"),
          new ig.Image("media/game2/lip42.png"),
          new ig.Image("media/game2/lip43.png"),
          new ig.Image("media/game2/lip44.png"),
          new ig.Image("media/game2/lip45.png"),
          new ig.Image("media/game2/lip50.png"),
          new ig.Image("media/game2/lip51.png"),
          new ig.Image("media/game2/lip52.png"),
          new ig.Image("media/game2/lip53.png"),
          new ig.Image("media/game2/lip54.png"),
          new ig.Image("media/game2/lip55.png"),
          new ig.Image("media/game2/real1.png"),
          new ig.Image("media/game2/real2.png"),
          new ig.Image("media/game2/real3.png"),
          new ig.Image("media/game2/real4.png"),
          new ig.Image("media/game2/real5.png"),
          new ig.Image("media/game2/real6.png"),
          new ig.Image("media/game2/color1.png"),
          new ig.Image("media/game2/color2.png"),
          new ig.Image("media/game2/color3.png"),
          new ig.Image("media/game2/color4.png"),
          new ig.Image("media/game2/pack1.png"),
          new ig.Image("media/game2/pack2.png"),
          new ig.Image("media/game2/pack3.png"),
          new ig.Image("media/game2/pack4.png"),
          new ig.Image("media/game2/pack5.png"),
          new ig.Image("media/game2/model1.png"),
          new ig.Image("media/game2/model2.png"),
          new ig.Image("media/game2/model3.png"),
          new ig.Image("media/game2/model4.png"),
          new ig.Image("media/game2/model5.png"),
          new ig.Image("media/game2/model6.png"),
          new ig.Image("media/game2/stiker1.png"),
          new ig.Image("media/game2/stiker2.png"),
          new ig.Image("media/game2/stiker3.png"),
          new ig.Image("media/game2/stiker4.png"),
          new ig.Image("media/game2/stiker5.png"),
          new ig.Image("media/game2/stiker6.png"),
          new ig.Image("media/game2/stiker7.png"),
          new ig.Image("media/game2/stiker8.png"),
          new ig.Image("media/game1/next.png"),

          new ig.Image("media/game3/rambutbtn.png"),
          new ig.Image("media/game3/jewelbtn.png"),
          new ig.Image("media/game3/blushbtn.png"),
          new ig.Image("media/game3/shadowbtn.png"),
          new ig.Image("media/game3/bajubtn.png"),
          new ig.Image("media/game3/eyebtn.png"),
          new ig.Image("media/game3/wanita.png"),
          new ig.Image("media/game3/blush1.png"),
          new ig.Image("media/game3/blush2.png"),
          new ig.Image("media/game3/blush3.png"),
          new ig.Image("media/game3/blush4.png"),
          new ig.Image("media/game3/blush5.png"),
          new ig.Image("media/game3/bibir10.png"),
          new ig.Image("media/game3/bibir11.png"),
          new ig.Image("media/game3/bibir12.png"),
          new ig.Image("media/game3/bibir13.png"),
          new ig.Image("media/game3/bibir14.png"),
          new ig.Image("media/game3/bibir15.png"),
          new ig.Image("media/game3/bibir20.png"),
          new ig.Image("media/game3/bibir21.png"),
          new ig.Image("media/game3/bibir22.png"),
          new ig.Image("media/game3/bibir23.png"),
          new ig.Image("media/game3/bibir24.png"),
          new ig.Image("media/game3/bibir25.png"),
          new ig.Image("media/game3/bibir30.png"),
          new ig.Image("media/game3/bibir31.png"),
          new ig.Image("media/game3/bibir32.png"),
          new ig.Image("media/game3/bibir33.png"),
          new ig.Image("media/game3/bibir34.png"),
          new ig.Image("media/game3/bibir35.png"),
          new ig.Image("media/game3/bibir40.png"),
          new ig.Image("media/game3/bibir41.png"),
          new ig.Image("media/game3/bibir42.png"),
          new ig.Image("media/game3/bibir43.png"),
          new ig.Image("media/game3/bibir44.png"),
          new ig.Image("media/game3/bibir45.png"),
          new ig.Image("media/game3/bibir51.png"),
          new ig.Image("media/game3/bibir52.png"),
          new ig.Image("media/game3/bibir53.png"),
          new ig.Image("media/game3/bibir54.png"),
          new ig.Image("media/game3/bibir55.png"),
          new ig.Image("media/game3/bibir50.png"),
          new ig.Image("media/game3/shadow1.png"),
          new ig.Image("media/game3/shadow2.png"),
          new ig.Image("media/game3/shadow3.png"),
          new ig.Image("media/game3/shadow4.png"),
          new ig.Image("media/game3/shadow5.png"),
          new ig.Image("media/game3/mata1.png"),
          new ig.Image("media/game3/mata2.png"),
          new ig.Image("media/game3/mata3.png"),
          new ig.Image("media/game3/mata4.png"),
          new ig.Image("media/game3/mata5.png"),
          new ig.Image("media/game3/baju1.png"),
          new ig.Image("media/game3/baju2.png"),
          new ig.Image("media/game3/baju3.png"),
          new ig.Image("media/game3/baju4.png"),
          new ig.Image("media/game3/baju5.png"),
          new ig.Image("media/game3/rambut1.png"),
          new ig.Image("media/game3/rambut2.png"),
          new ig.Image("media/game3/rambut3.png"),
          new ig.Image("media/game3/rambut4.png"),
          new ig.Image("media/game3/rambut5.png"),
          new ig.Image("media/game3/acc1.png"),
          new ig.Image("media/game3/acc2.png"),
          new ig.Image("media/game3/acc3.png"),
          new ig.Image("media/game3/acc4.png"),
          new ig.Image("media/game3/acc5.png"),
          new ig.Image("media/game3/done.png"),
          new ig.Image("media/ending/bg.png"),
          new ig.Image("media/ending/star.png"),
          new ig.Image("media/ending/makeagain.png"),
          new ig.Image("media/ending/mainmenu.png"),
          new ig.Image("media/ending/moregame.png"),


			];

			
			ig.input.initMouse();
  			ig.input.bind( ig.KEY.MOUSE1, 'click');



  			
  			// create the bg
			this.mBg =  this.spawnEntity(
	      	Bg, ig.getX(0), ig.getY(0), 
	  			{
	  				
	  				animSheet:new ig.AnimationSheet( 'media/game2/bg.png', 700, 525)
			  	}
			); 
			this.mBg.zIndex=this.entities.length-1

			this.packaging=this.spawnEntity
  			(
  				Obj,ig.getX(503),ig.getY(194),
  				{
  					animSheet:new ig.AnimationSheet("media/game2/package"+ig.global.packaging+ig.global.packagingColor+".png",ig.getX(147),ig.getY(246))
  				}
  			)
  			this.packaging.zIndex=this.entities.length-1

			
  			this.lipstick=this.spawnEntity
  			(
  				Obj,ig.getX(457),ig.getY(246),
  				{
  					animSheet:new ig.AnimationSheet("media/game2/lip"+ig.global.lipstickColor+ig.global.lipstickGlit+".png",ig.getX(32),ig.getY(71))
  				}
  			)
  			this.lipstick.zIndex=this.entities.length-1

        this.real=this.spawnEntity
        (
          Obj,ig.getX(383),ig.getY(306),
          {
            animSheet:new ig.AnimationSheet("media/game2/real1.png",ig.getX(122),ig.getY(156))

          }
        )
        this.real.zIndex=this.entities.length-1

        this.btncolor1=this.spawnEntity
        (
          Button,ig.getX(70),ig.getY(122),
          {
            size:{x:ig.getX(46),y:ig.getY(40)},
            animSheet:new ig.AnimationSheet("media/game2/color1.png",ig.getX(46),ig.getY(40)),
            pressedUp:function()
            {
              ig.game.changeColor(1)
            }
          }
        )
        this.btncolor1.zIndex=this.entities.length-1

        this.btncolor2=this.spawnEntity
        (
          Button,ig.getX(130),ig.getY(122),
          {
            size:{x:ig.getX(46),y:ig.getY(40)},
            animSheet:new ig.AnimationSheet("media/game2/color2.png",ig.getX(46),ig.getY(40)),
            pressedUp:function()
            {
              ig.game.changeColor(2)
            }
          }
        )
        this.btncolor2.zIndex=this.entities.length-1

        this.btncolor3=this.spawnEntity
        (
          Button,ig.getX(190),ig.getY(122),
          {
            size:{x:ig.getX(46),y:ig.getY(40)},
            animSheet:new ig.AnimationSheet("media/game2/color3.png",ig.getX(46),ig.getY(40)),
            pressedUp:function()
            {
              ig.game.changeColor(3)
            }
          }
        )
        this.btncolor3.zIndex=this.entities.length-1

        this.btncolor4=this.spawnEntity
        (
          Button,ig.getX(250),ig.getY(122),
          {
            size:{x:ig.getX(46),y:ig.getY(40)},
            animSheet:new ig.AnimationSheet("media/game2/color4.png",ig.getX(46),ig.getY(40)),
            pressedUp:function()
            {
              ig.game.changeColor(4)
            }
          }
        )
        this.btncolor4.zIndex=this.entities.length-1

        this.btnPack1=this.spawnEntity
        (
          Button,ig.getX(57),ig.getY(178),
          {
            size:{x:ig.getX(45),y:ig.getY(76)},
            animSheet:new ig.AnimationSheet("media/game2/pack1.png",ig.getX(45),ig.getY(76)),
            pressedUp:function()
            {
              ig.game.changePack(1)
            }
          }
        )
        this.btnPack1.zIndex=this.entities.length-1

        this.btnPack2=this.spawnEntity
        (
          Button,ig.getX(107),ig.getY(178),
          {
            size:{x:ig.getX(45),y:ig.getY(71)},
            animSheet:new ig.AnimationSheet("media/game2/pack2.png",ig.getX(45),ig.getY(71)),
            pressedUp:function()
            {
              ig.game.changePack(2)
            }
          }
        )
        this.btnPack2.zIndex=this.entities.length-1

        this.btnPack3=this.spawnEntity
        (
          Button,ig.getX(163),ig.getY(178),
          {
            size:{x:ig.getX(40),y:ig.getY(76)},
            animSheet:new ig.AnimationSheet("media/game2/pack3.png",ig.getX(40),ig.getY(76)),
            pressedUp:function()
            {
              ig.game.changePack(3)
            }
          }
        )
        this.btnPack3.zIndex=this.entities.length-1

        this.btnPack4=this.spawnEntity
        (
          Button,ig.getX(211),ig.getY(178),
          {
            size:{x:ig.getX(46),y:ig.getY(76)},
            animSheet:new ig.AnimationSheet("media/game2/pack4.png",ig.getX(46),ig.getY(76)),
            pressedUp:function()
            {
              ig.game.changePack(4)
            }
          }
        )
        this.btnPack4.zIndex=this.entities.length-1

        this.btnPack5=this.spawnEntity
        (
          Button,ig.getX(266),ig.getY(178),
          {
            size:{x:ig.getX(38),y:ig.getY(71)},
            animSheet:new ig.AnimationSheet("media/game2/pack5.png",ig.getX(38),ig.getY(71)),
            pressedUp:function()
            {
              ig.game.changePack(5)
            }
          }
        )
        this.btnPack5.zIndex=this.entities.length-1

        this.model1=this.spawnEntity
        (
          Button,ig.getX(75),ig.getY(304),
          {
            size:{x:ig.getX(21),y:ig.getY(76)},
            animSheet:new ig.AnimationSheet("media/game2/model1.png",ig.getX(21),ig.getY(76)),
            pressedUp:function()
            {
              ig.game.changeReal(1)
            }
          }
        )
        this.model1.zIndex=this.entities.length-1

        this.model2=this.spawnEntity
        (
          Button,ig.getX(116),ig.getY(304),
          {
            size:{x:ig.getX(18),y:ig.getY(73)},
            animSheet:new ig.AnimationSheet("media/game2/model2.png",ig.getX(18),ig.getY(73)),
            pressedUp:function()
            {
              ig.game.changeReal(2)
            }
          }
        )
        this.model2.zIndex=this.entities.length-1

        this.model3=this.spawnEntity
        (
          Button,ig.getX(155),ig.getY(304),
          {
            size:{x:ig.getX(15),y:ig.getY(73)},
            animSheet:new ig.AnimationSheet("media/game2/model3.png",ig.getX(15),ig.getY(73)),
            pressedUp:function()
            {
              ig.game.changeReal(3)
            }
          }
        )
        this.model3.zIndex=this.entities.length-1

        this.model4=this.spawnEntity
        (
          Button,ig.getX(184),ig.getY(304),
          {
            size:{x:ig.getX(26),y:ig.getY(77)},
            animSheet:new ig.AnimationSheet("media/game2/model4.png",ig.getX(26),ig.getY(77)),
            pressedUp:function()
            {
              ig.game.changeReal(4)
            }
          }
        )
        this.model4.zIndex=this.entities.length-1

        this.model5=this.spawnEntity
        (
          Button,ig.getX(226),ig.getY(304),
          {
            size:{x:ig.getX(22),y:ig.getY(75)},
            animSheet:new ig.AnimationSheet("media/game2/model5.png",ig.getX(22),ig.getY(73)),
            pressedUp:function()
            {
              ig.game.changeReal(5)
            }
          }
        )
        this.model5.zIndex=this.entities.length-1

        this.model6=this.spawnEntity
        (
          Button,ig.getX(273),ig.getY(304),
          {
            size:{x:ig.getX(23),y:ig.getY(76)},
            animSheet:new ig.AnimationSheet("media/game2/model6.png",ig.getX(23),ig.getY(76)),
            pressedUp:function()
            {
              ig.game.changeReal(6)
            }
          }
        )
        this.model6.zIndex=this.entities.length-1

        this.stiker1=this.spawnEntity
        (
          Button,ig.getX(53),ig.getY(411),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker1.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(1);
            }
          }
        )
        this.stiker1.zIndex=this.entities.length-1
        this.stiker1.exception=true
        this.stiker1.addAnim("chosen",0.25,[0,1])

        this.stiker2=this.spawnEntity
        (
          Button,ig.getX(125),ig.getY(401),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker2.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(2);
            }
          }
        )
        this.stiker2.zIndex=this.entities.length-1
        this.stiker2.exception=true
        this.stiker2.addAnim("chosen",0.25,[0,1])

        this.stiker3=this.spawnEntity
        (
          Button,ig.getX(182),ig.getY(401),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker3.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(3);
            }
          }
        )
        this.stiker3.zIndex=this.entities.length-1
        this.stiker3.exception=true
        this.stiker3.addAnim("chosen",0.25,[0,1])

        this.stiker4=this.spawnEntity
        (
          Button,ig.getX(243),ig.getY(401),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker4.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(4);
            }
          }
        )
        this.stiker4.zIndex=this.entities.length-1
        this.stiker4.exception=true
        this.stiker4.addAnim("chosen",0.25,[0,1])

        this.stiker5=this.spawnEntity
        (
          Button,ig.getX(93),ig.getY(449),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker5.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(5);
            }
          }
        )
        this.stiker5.zIndex=this.entities.length-1
        this.stiker5.exception=true
        this.stiker5.addAnim("chosen",0.25,[0,1])

        this.stiker6=this.spawnEntity
        (
          Button,ig.getX(149),ig.getY(444),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker6.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(6);
            }
          }
        )
        this.stiker6.zIndex=this.entities.length-1
        this.stiker6.exception=true
        this.stiker6.addAnim("chosen",0.25,[0,1])

        this.stiker7=this.spawnEntity
        (
          Button,ig.getX(213),ig.getY(449),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker7.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(7);
            }
          }
        )
        this.stiker7.zIndex=this.entities.length-1
        this.stiker7.exception=true
        this.stiker7.addAnim("chosen",0.25,[0,1])

        this.stiker8=this.spawnEntity
        (
          Button,ig.getX(277),ig.getY(449),
          {
            size:{x:ig.getX(47),y:ig.getY(50)},
            animSheet:new ig.AnimationSheet("media/game2/stiker8.png",ig.getX(47),ig.getY(50)),
            pressedUp:function()
            {
              ig.game.chooseStiker(8);
            }
          }
        )
        this.stiker8.zIndex=this.entities.length-1
        this.stiker8.exception=true
        this.stiker8.addAnim("chosen",0.25,[0,1])

        this.dummypack=this.spawnEntity
        (
          Button,ig.getX(503),ig.getY(194),
          {
            size:{x:ig.getX(147),y:ig.getY(246)},
            animSheet:new ig.AnimationSheet("media/game2/package41.png",ig.getX(147),ig.getY(246)),
            pressedUp:function()
            {
              ig.game.addSticker();
            }
          }
        )
        this.dummypack.zIndex=this.entities.length-1
        this.dummypack.currentAnim.alpha=0
        this.dummypack.exception=true
			
		//if (window.isSharpMiniStock == false) {
			this.sound=this.spawnEntity(SoundButton,ig.getX(604),ig.getY(5))
			
			this.sound.zIndex=this.entities.length-1
		//}

      this.nextbtn=this.spawnEntity
        (
          Button,ig.getX(572),ig.getY(440),
          {
            size:{x:ig.getX(126),y:ig.getY(82)},
            animSheet:new ig.AnimationSheet("media/game1/next.png",ig.getX(126),ig.getY(82)),
            pressedUp:function()
            {
              if (window.fggCt != undefined) {
                if (window.fggCt <= 0) {
                  window.fggCt = 60;
                  ig.game.initPage();
                  this.kill();
                }
              }
            }
          }
        )
        this.nextbtn.zIndex=this.entities.length-1
        
         /*this.btnLogo = this.spawnEntity( GGGLogo.extend({
        zIndex: 8

      }), ig.getX(10), ig.getY(10));
      this.btnLogo.zIndex=this.entities.length-1*/
			

			// load the resources
			ig.ready = true;

		    // Start the custom preloader with the captured resources
		    this.loader = new IntermediateLoader( null, ig.resources);
		    this.loader.load();
	  	},

      initPage:function()
      {
        this.mBg.animSheet=new ig.AnimationSheet("media/game3/bg.png",ig.getX(700),ig.getY(525))
        this.mBg.addAnim("idle",1,[0])
        this.mBg.currentAnim=this.mBg.anims.idle

        this.btncolor1.kill();
        this.btncolor2.kill();
        this.btncolor3.kill();
        this.btncolor4.kill();
        this.btnPack1.kill();
        this.btnPack2.kill();
        this.btnPack3.kill();
        this.btnPack4.kill();
        this.btnPack5.kill();
        this.model1.kill();
        this.model2.kill();
        this.model3.kill();
        this.model4.kill();
        this.model5.kill();
        this.model6.kill();
        this.stiker1.kill();
        this.stiker2.kill();
        this.stiker3.kill();
        this.stiker4.kill();
        this.stiker5.kill();
        this.stiker6.kill();
        this.stiker7.kill();
        this.stiker8.kill();

        this.packaging.pos.x=ig.getX(this.packaging.pos.x-293)
        this.packaging.pos.y=ig.getY(this.packaging.pos.y+14)
        this.lipstick.pos.x=ig.getX(this.lipstick.pos.x-293)
        this.lipstick.pos.y=ig.getY(this.lipstick.pos.y+14)
        this.real.pos.x=ig.getX(this.real.pos.x-293)
        this.real.pos.y=ig.getY(this.real.pos.y+14)

        // this.btnLogo.pos.y=ig.getY(440)

        for (var i = 0; i < this.arrSticker.length; i++)
        {
          this.arrSticker[i].pos.x=ig.getX(this.arrSticker[i].pos.x-293)
          this.arrSticker[i].pos.y=ig.getY(this.arrSticker[i].pos.y+14)
        };
		
		if (this.sound) {
			this.sound.pos.x=ig.getX(17)
			this.sound.pos.y=ig.getY(251)
		}

        this.rambutbtn=this.spawnEntity
        (
          Button,ig.getX(7),ig.getY(27),
          {
            size:{x:ig.getX(101),y:ig.getY(84)},
            animSheet:new ig.AnimationSheet("media/game3/rambutbtn.png",ig.getX(101),ig.getY(84)),
            pressedUp:function()
            {
              ig.game.changeHair();
            }
          }
        )
        this.rambutbtn.zIndex=this.entities.length-1

        this.jewelbtn=this.spawnEntity
        (
          Button,ig.getX(114),ig.getY(27),
          {
            size:{x:ig.getX(101),y:ig.getY(84)},
            animSheet:new ig.AnimationSheet("media/game3/jewelbtn.png",ig.getX(101),ig.getY(84)),
            pressedUp:function()
            {
              ig.game.changeAcc();
            }
          }
        )
        this.jewelbtn.zIndex=this.entities.length-1

        this.blushbtn=this.spawnEntity
        (
          Button,ig.getX(229),ig.getY(27),
          {
            size:{x:ig.getX(101),y:ig.getY(84)},
            animSheet:new ig.AnimationSheet("media/game3/blushbtn.png",ig.getX(101),ig.getY(84)),
            pressedUp:function()
            {
              ig.game.changeBlush();
            }
          }
        )
        this.blushbtn.zIndex=this.entities.length-1

        this.shadowbtn=this.spawnEntity
        (
          Button,ig.getX(340),ig.getY(27),
          {
            size:{x:ig.getX(101),y:ig.getY(84)},
            animSheet:new ig.AnimationSheet("media/game3/shadowbtn.png",ig.getX(101),ig.getY(84)),
            pressedUp:function()
            {
              ig.game.changeShadow();
            }
          }
        )
        this.shadowbtn.zIndex=this.entities.length-1

        this.bajubtn=this.spawnEntity
        (
          Button,ig.getX(7),ig.getY(124),
          {
            size:{x:ig.getX(101),y:ig.getY(84)},
            animSheet:new ig.AnimationSheet("media/game3/bajubtn.png",ig.getX(101),ig.getY(84)),
            pressedUp:function()
            {
              ig.game.changeBaju();
            }
          }
        )
        this.bajubtn.zIndex=this.entities.length-1

        this.eyebtn=this.spawnEntity
        (
          Button,ig.getX(114),ig.getY(124),
          {
            size:{x:ig.getX(101),y:ig.getY(84)},
            animSheet:new ig.AnimationSheet("media/game3/eyebtn.png",ig.getX(101),ig.getY(84)),
            pressedUp:function()
            {
              ig.game.changeEye();
            }
          }
        )
        this.eyebtn.zIndex=this.entities.length-1

        this.wanita=this.spawnEntity
        (
          Obj,ig.getX(484),ig.getY(62),
          {
            animSheet:new ig.AnimationSheet("media/game3/wanita.png",ig.getX(232),ig.getY(474))
          }
        )
        this.wanita.zIndex=this.entities.length-1

        this.blushon=this.spawnEntity
        (
          Obj,ig.getX(492),ig.getY(156),
          {
            animSheet:new ig.AnimationSheet("media/game3/blush1.png",ig.getX(106),ig.getY(50))
          }
        )
        this.blushon.zIndex=this.entities.length-1

        this.bibir=this.spawnEntity
        (
          Obj,ig.getX(517),ig.getY(191),
          {
            animSheet:new ig.AnimationSheet("media/game3/bibir"+ig.global.lipstickColor+ig.global.lipstickGlit+".png",ig.getX(38),ig.getY(17))
          }
        )
        this.bibir.zIndex=this.entities.length-1

        this.shadow=this.spawnEntity
        (
          Obj,ig.getX(487),ig.getY(130),
          {
            animSheet:new ig.AnimationSheet("media/game3/shadow1.png",ig.getX(93),ig.getY(26))
          }
        )
        this.shadow.zIndex=this.entities.length-1

        this.mata=this.spawnEntity
        (
          Obj,ig.getX(485),ig.getY(117),
          {
            animSheet:new ig.AnimationSheet("media/game3/mata1.png",ig.getX(100),ig.getY(43))
          }
        )
        this.mata.zIndex=this.entities.length-1

        this.baju=this.spawnEntity
        (
          Obj,ig.getX(467),ig.getY(251),
          {
            animSheet:new ig.AnimationSheet("media/game3/baju1.png",ig.getX(220),ig.getY(276))
          }
        )
        this.baju.zIndex=this.entities.length-1

        this.rambut=this.spawnEntity
        (
          Obj,ig.getX(472),ig.getY(24),
          {
            animSheet:new ig.AnimationSheet("media/game3/rambut1.png",ig.getX(206),ig.getY(289))
          }
        )
        this.rambut.zIndex=this.entities.length-1

        this.acc=this.spawnEntity
        (
          Obj,ig.getX(501),ig.getY(164),
          {
            animSheet:new ig.AnimationSheet("media/game3/acc1.png",ig.getX(139),ig.getY(183))
          }
        )
        this.acc.zIndex=this.entities.length-1

        this.finishbtn=this.spawnEntity
        (
          Button,ig.getX(319),ig.getY(431),
          {
            size:{x:ig.getX(185),y:ig.getY(87)},
            animSheet:new ig.AnimationSheet("media/game3/done.png",ig.getX(185),ig.getY(87)),
            pressedUp:function()
            {
              this.kill();
              ig.game.initEnding();
            }
          }
        )
        this.finishbtn.zIndex=this.entities.length-1

        this.makeagain=this.spawnEntity
        (
          Button,ig.getX(55),ig.getY(-430),
          {
            size:{x:ig.getX(185),y:ig.getY(87)},
            animSheet:new ig.AnimationSheet("media/ending/makeagain.png",ig.getX(185),ig.getY(87)),
            pressedUp:function()
            {
              ig.global.lipstickColor=0
              ig.global.lipstickScent=0
              ig.global.lipstickMoist=0
              ig.global.lipstickGlit=0
              ig.system.setGame(GameWin);
              // GameAPI.GameBreak.request(ig.game.fnPause, ig.game.fnResume);
            }
          }
        )
        this.makeagain.zIndex=this.entities.length-1

        this.mainmenu=this.spawnEntity
        (
          Button,ig.getX(245),ig.getY(-430),
          {
            size:{x:ig.getX(185),y:ig.getY(87)},
            animSheet:new ig.AnimationSheet("media/ending/mainmenu.png",ig.getX(185),ig.getY(87)),
            pressedUp:function()
            {
              ig.system.setGame(MainMenuWin)
            }
          }
        )
        this.mainmenu.zIndex=this.entities.length-1


      },

      initEnding:function()
      {
        this.mBg.animSheet=new ig.AnimationSheet("media/ending/bg.png",ig.getX(700),ig.getY(525))
        this.mBg.addAnim("idle",1,[0])
        this.mBg.currentAnim=this.mBg.anims.idle

        this.packaging.pos.x=ig.getX(this.packaging.pos.x+87)
        this.packaging.pos.y=ig.getY(this.packaging.pos.y-25)
        this.lipstick.pos.x=ig.getX(this.lipstick.pos.x+87)
        this.lipstick.pos.y=ig.getY(this.lipstick.pos.y-25)
        this.real.pos.x=ig.getX(this.real.pos.x+87)
        this.real.pos.y=ig.getY(this.real.pos.y-25)

        // this.btnLogo.pos.y=ig.getY(100)

        for (var i = 0; i < this.arrSticker.length; i++)
        {
          this.arrSticker[i].pos.x=ig.getX(this.arrSticker[i].pos.x+87)
          this.arrSticker[i].pos.y=ig.getY(this.arrSticker[i].pos.y-25)
        };

        this.rambutbtn.kill();
        this.jewelbtn.kill();
        this.blushbtn.kill();
        this.shadowbtn.kill();
        this.bajubtn.kill();
        this.eyebtn.kill();

        this.sound.pos.x=ig.getX(16)
        this.sound.pos.y=ig.getY(24)

        this.star=this.spawnEntity
        (
          Obj,ig.getX(200),ig.getY(124),
          {
            animSheet:new ig.AnimationSheet("media/ending/star.png",ig.getX(275),ig.getY(374))
          }
        )
        this.star.zIndex=this.entities.length-2

        this.makeagain.pos.y = 430;
        this.mainmenu.pos.y = 430;
        this.makeagain.zIndex=this.entities.length-1
        this.mainmenu.zIndex=this.entities.length-1
        ig.game.sortEntitiesDeferred();

        /*this.makeagain=this.spawnEntity
        (
          Button,ig.getX(55),ig.getY(430),
          {
            size:{x:ig.getX(185),y:ig.getY(87)},
            animSheet:new ig.AnimationSheet("media/ending/makeagain.png",ig.getX(185),ig.getY(87)),
            pressedUp:function()
            {
              ig.global.lipstickColor=0
              ig.global.lipstickScent=0
              ig.global.lipstickMoist=0
              ig.global.lipstickGlit=0
              ig.system.setGame(GameWin);
              // GameAPI.GameBreak.request(ig.game.fnPause, ig.game.fnResume);
            }
          }
        )
        this.makeagain.zIndex=this.entities.length-1

        this.mainmenu=this.spawnEntity
        (
          Button,ig.getX(245),ig.getY(430),
          {
            size:{x:ig.getX(185),y:ig.getY(87)},
            animSheet:new ig.AnimationSheet("media/ending/mainmenu.png",ig.getX(185),ig.getY(87)),
            pressedUp:function()
            {
              ig.system.setGame(MainMenuWin)
            }
          }
        )
        this.mainmenu.zIndex=this.entities.length-1*/

        /*this.moregame=this.spawnEntity
        (
          Button,ig.getX(435),ig.getY(430),
          {
            size:{x:ig.getX(185),y:ig.getY(87)},
            animSheet:new ig.AnimationSheet("media/ending/moregame.png",ig.getX(185),ig.getY(87)),
            pressedUp:function()
            {
              // ig.game.openLink("http://www.girlsgogames.com")
            }
          }
        )
        this.moregame.zIndex=this.entities.length-1*/

      },

      fnPause:function() {
      //.log("game paused for ads")
    },

    fnResume:function() {
      //console.log("game resumed after ads")
      ig.system.setGame(GameWin);
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

      changeEye:function()
      {
        this.eyeidx< 5 ? this.eyeidx++ : this.eyeidx=1
        this.mata.animSheet=new ig.AnimationSheet("media/game3/mata"+this.eyeidx+".png",ig.getX(100),ig.getY(43))
         this.mata.addAnim("idle",1,[0])
         this.mata.currentAnim=this.mata.anims.idle
      },

      changeBaju:function()
      {
        this.bajuidx< 5 ? this.bajuidx++ : this.bajuidx=1
        var posX=0
        var posY=0
        var sizeX=0
        var sizeY=0

        if (this.bajuidx==1)
         {
            sizeX=220
            sizeY=276
            posX=467
            posY=251
         }
        else if (this.bajuidx==2)
         {
            sizeX=204
            sizeY=291
            posX=484
            posY=259
         }
        else if (this.bajuidx==3)
         {
            sizeX=197
            sizeY=271
            posX=480
            posY=256
         }
        else if (this.bajuidx==4)
         {
            sizeX=194
            sizeY=273
            posX=483
            posY=255
         }
        else if (this.bajuidx==5)
         {
            sizeX=226
            sizeY=293
            posX=484
            posY=241
         }

         this.baju.animSheet=new ig.AnimationSheet("media/game3/baju"+this.bajuidx+".png",ig.getX(sizeX),ig.getY(sizeY))
         this.baju.addAnim("idle",1,[0])
         this.baju.currentAnim=this.baju.anims.idle

         this.baju.pos.x=ig.getX(posX)
         this.baju.pos.y=ig.getY(posY)
      },

      changeShadow:function()
      {
          this.shadowidx< 5 ? this.shadowidx++ : this.shadowidx=1
        this.shadow.animSheet=new ig.AnimationSheet("media/game3/shadow"+this.shadowidx+".png",ig.getX(93),ig.getY(26))
         this.shadow.addAnim("idle",1,[0])
         this.shadow.currentAnim=this.shadow.anims.idle
      },

      changeBlush:function()
      {
        this.blushonidx< 5 ? this.blushonidx++ : this.blushonidx=1
        this.blushon.animSheet=new ig.AnimationSheet("media/game3/blush"+this.blushonidx+".png",ig.getX(106),ig.getY(50))
         this.blushon.addAnim("idle",1,[0])
         this.blushon.currentAnim=this.blushon.anims.idle
      },

      changeAcc:function()
      {
        this.accidx< 5 ? this.accidx++ : this.accidx=1
        var posX=0
        var posY=0
        var sizeX=0
        var sizeY=0
        if (this.accidx==1)
         {
            sizeX=139
            sizeY=183
            posX=501
            posY=164
         }
        else if (this.accidx==2)
         {
            sizeX=147
            sizeY=169
            posX=498
            posY=163
         }
        else if (this.accidx==3)
         {
            sizeX=132
            sizeY=222
            posX=507
            posY=162
         }
        else if (this.accidx==4)
         {
            sizeX=139
            sizeY=163
            posX=506
            posY=164
         }
        else if (this.accidx==5)
         {
            sizeX=131
            sizeY=252
            posX=504
            posY=165
         }

         this.acc.animSheet=new ig.AnimationSheet("media/game3/acc"+this.accidx+".png",ig.getX(sizeX),ig.getY(sizeY))
         this.acc.addAnim("idle",1,[0])
         this.acc.currentAnim=this.acc.anims.idle

         this.acc.pos.x=ig.getX(posX)
         this.acc.pos.y=ig.getY(posY)
      },

      changeHair:function()
      {
        this.hairidx< 5 ? this.hairidx++ : this.hairidx=1
        var posX=0
        var posY=0
        var sizeX=0
        var sizeY=0
        if (this.hairidx==1)
         {
            sizeX=206
            sizeY=289
            posX=472
            posY=24
         }
        else if (this.hairidx==2)
         {
            sizeX=186
            sizeY=240
            posX=470
            posY=22
         }
        else if (this.hairidx==3)
         {
            sizeX=190
            sizeY=365
            posX=474
            posY=15.6
         }
        else if (this.hairidx==4)
         {
            sizeX=202
            sizeY=310
            posX=466
            posY=26.6
         }
        else if (this.hairidx==5)
         {
            sizeX=209
            sizeY=239
            posX=475
            posY=2
         }

         this.rambut.animSheet=new ig.AnimationSheet("media/game3/rambut"+this.hairidx+".png",ig.getX(sizeX),ig.getY(sizeY))
         this.rambut.addAnim("idle",1,[0])
         this.rambut.currentAnim=this.rambut.anims.idle

         this.rambut.pos.x=ig.getX(posX)
         this.rambut.pos.y=ig.getY(posY)
      },

      addSticker:function()
      {
        if (this.chosen!=null)
         {
            this.sticker=this.spawnEntity
            (
              Obj,ig.getX(ig.input.mouse.x-23.5),ig.getY(ig.input.mouse.y-25),
              {
                animSheet:new ig.AnimationSheet(this.chosen.animSheet.image.path,ig.getX(47),ig.getY(50))
              }
            )
            this.sticker.zIndex=this.entities.length-1
            this.arrSticker.push(this.sticker)
            this.chosen=null
            for (var i = 1; i <=8; i++)
             {
                this["stiker"+i].currentAnim=this["stiker"+i].anims.idle
            }
         };
        
      },

      chooseStiker:function(idx)
      {
        for (var i = 1; i <=8; i++)
         {
            this["stiker"+i].currentAnim=this["stiker"+i].anims.idle
        }
        this["stiker"+idx].currentAnim=this["stiker"+idx].anims.chosen
        this.chosen=this["stiker"+idx]
      },

      changeColor:function(idx)
      {
        
            ig.global.packagingColor=idx
            this.packaging.animSheet=new ig.AnimationSheet("media/game2/package"+ig.global.packaging+ig.global.packagingColor+".png",ig.getX(147),ig.getY(246))
            this.packaging.addAnim("idle",1,[0])
            this.packaging.currentAnim=this.packaging.anims.idle
         
      },

      changePack:function(idx)
      {
        ig.global.packaging=idx
        this.packaging.animSheet=new ig.AnimationSheet("media/game2/package"+ig.global.packaging+ig.global.packagingColor+".png",ig.getX(147),ig.getY(246))
        this.packaging.addAnim("idle",1,[0])
        this.packaging.currentAnim=this.packaging.anims.idle
      },

      changeReal:function(idx)
      {
        var posX=0
        var posY=0
        var sizeX=0
        var sizeY=0
        if (idx==1)
         {
            posX=383
            posY=306
            sizeX=122
            sizeY=156
         }
         else if (idx==2)
         {
            posX=395
            posY=306
            sizeX=102
            sizeY=138
         }
         else if (idx==3)
         {
            posX=418
            posY=305
            sizeX=74
            sizeY=148
         }
         else if (idx==4)
         {
            posX=368
            posY=281
            sizeX=141
            sizeY=179
         }
         else if (idx==5)
         {
            posX=394
            posY=306
            sizeX=109
            sizeY=150
         }
         else if (idx==6)
         {
            posX=378
            posY=303
            sizeX=126
            sizeY=148
         }
        ig.global.reallipstick=idx
        this.real.animSheet=new ig.AnimationSheet("media/game2/real"+idx+".png",ig.getX(sizeX),ig.getY(sizeY))
        this.real.addAnim("idle",1,[0])
        this.real.currentAnim=this.real.anims.idle
        this.real.pos.x=ig.getX(posX)
        this.real.pos.y=ig.getX(posY)
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

	  	update:function() {
	  		this.parent();
         if (window.fggCt != undefined && window.fggCt > 0) 
          window.fggCt--;
         ig.game.sortEntitiesDeferred();
        // this.btnLogo.fireMouseDown();
	  		/*	//use this to detect your mouse coordinate
	  		if (ig.input.pressed("click"))
	  		 {
	  		 	console.log("mouseX= "+ig.input.mouse.x+" mouseY= "+ig.input.mouse.y);
	  		 }*/
	  	},

	  	onPreloaded:function() {
	  		//console.log("preloaded ");
	  	},
  });
});
