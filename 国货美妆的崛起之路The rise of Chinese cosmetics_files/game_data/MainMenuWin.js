ig.module(
  'game.MainMenuWin'
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
  	MainMenuWin = ig.Game.extend({
  		mBg:null,
  		mBtn1:null,
  		mBtn2:null,

  		drawFlag:false,
  		showCredit:false,

  		font: new ig.Font( '', 30, null, null, '#6D0000','center', 4, true, true, "#FFF387"),

  		init:function() {
  			// analytics.menu();

  			ig.resources = [];
			ig.ready = false;

  			dummyImages = [
					new ig.Image( 'media/main/bg.jpg' ),
					new ig.Image("media/main/startgame.png"),
					new ig.Image("media/main/moregame.png"),
					new ig.Image("media/main/credits.png"),
					new ig.Image("media/main/credit.png"),


			];

			
			ig.input.initMouse();
  			ig.input.bind( ig.KEY.MOUSE1, 'click');

  			
  			// create the bg
			this.mBg =  this.spawnEntity(
	      	Bg, ig.getX(0), ig.getY(0), 
	  			{
	  				
	  				animSheet:new ig.AnimationSheet( 'media/main/bg.jpg', 700, 525)
			  	}
			); 
			this.mBg.zIndex=this.entities.length-1

			this.play=this.spawnEntity
			(
				Button,ig.getX(201),ig.getY(250),
				{
					size:{x:ig.getX(185),y:ig.getY(87)},
					animSheet:new ig.AnimationSheet("media/main/startgame.png",ig.getX(185),ig.getY(87)),
					pressedUp:function()
					{
						///masuk game
						if (!ig.game.showCredit)
						 {
						 	ig.global.lipstickColor=0
							ig.global.lipstickScent=0
							ig.global.lipstickMoist=0
							ig.global.lipstickGlit=0
						 	// ig.system.setGame(GameWin)
						 	GameAPI.GameBreak.request(ig.game.fnPause, ig.game.fnResume);
						 	//adSense.showAdvertising();

						 	//ig.system.setGame(GameWin);
						 };
					}
				}
			)
			this.play.zIndex=this.entities.length-1

			this.moregame=this.spawnEntity
			(
				GGGMore.extend(
				{
					/*size:{x:ig.getX(185),y:ig.getY(87)},
					animSheet:new ig.AnimationSheet("media/main/moregame.png",ig.getX(185),ig.getY(87)),
					pressedUp:function()
					{
						if (!ig.game.showCredit)
						 {
						 	// ig.game.openLink("http://www.girlsgogames.com")
						 };
						
					}*/
				}), ig.getX(240),ig.getY(343)
			)
			this.moregame.zIndex=this.entities.length-1

			this.credits=this.spawnEntity
			(
				Button,ig.getX(282),ig.getY(430),
				{
					size:{x:ig.getX(185),y:ig.getY(87)},
					animSheet:new ig.AnimationSheet("media/main/credits.png",ig.getX(185),ig.getY(87)),
					pressedUp:function()
					{
						if (!ig.game.showCredit)
						 {
						 	///kelarkan credit
						 	ig.game.showCredit=true
						 	ig.game.credit=ig.game.spawnEntity
						 	(
						 		Button,ig.getX(0),ig.getY(0),
						 		{
						 			size:{x:ig.getX(700),y:ig.getY(525)},
						 			animSheet:new ig.AnimationSheet("media/main/credit.png",ig.getX(700),ig.getY(525)),
						 			pressedUp:function()
						 			{
						 				ig.game.showCredit=false
						 				this.kill();
						 			}
						 		}
						 		
						 	)
						 	ig.game.credit.zIndex=ig.game.entities.length-1
						 };
						
					}
				}
			)
			this.credits.zIndex=this.entities.length-1

			//if (window.isSharpMiniStock != true) {

				// HIDE SOUND BUTTON HERE
				this.sound=this.spawnEntity(SoundButton,ig.getX(604),ig.getY(5))
			
				this.sound.zIndex=this.entities.length-1
			//}


			this.btnLogo = this.spawnEntity( GGGLogo.extend({
				zIndex: 8

			}), ig.getX(20), ig.getY(440));
			this.btnLogo.zIndex=this.entities.length-1

			//window.taek.onclick();

			/*this.lo=this.spawnEntity
			(	
				Button,ig.getX(240),ig.getY(340),
				{
				size:{x:ig.getX(185),y:ig.getY(87)},
				animSheet:new ig.AnimationSheet("media/main/moregame.png",ig.getX(185),ig.getY(87)),
				pressedUp:function()
				{
					moregames.redirect();
				}
			}

				)*/

			/*this.logo=this.spawnEntity
			(
				Button,ig.getX(20),ig.getY(440),
				{
					size:{x:ig.getX(115),y:ig.getY(71)},
					animSheet:new ig.AnimationSheet("media/logosmall.png",ig.getX(115),ig.getY(71)),
					pressedUp:function()
					{
						if (!ig.game.showCredit)
						{
							ig.game.openLink("http://www.girlsgogames.com")
						}
					}
				}
			)
			this.logo.zIndex=this.entities.length-1*/
			

			// load the resources
			ig.ready = true;

		    // Start the custom preloader with the captured resources
		    this.loader = new IntermediateLoader( null, ig.resources);
		    this.loader.load();
	  	},

	  	fnPause:function() {
			ig.global.pauseBGM();
			//.log("game paused for ads")
		},

		fnResume:function() {
			//console.log("game resumed after ads")
			 ig.global.resumeBGM()
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
	  		//window.moveTaek(this.btnLogo.pos.x, this.btnLogo.pos.y, this.btnLogo.size.x, this.btnLogo.size.y)
	  		//window.moveTaek(this.moregame.pos.x, this.moregame.pos.y, this.moregame.size.x, this.moregame.size.y)
	  		window.moveTaek(1, this.moregame)
	  		window.moveTaek(2, this.btnLogo)
	  		//window.moveTaek()
	  		//window.hideTaek();
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
