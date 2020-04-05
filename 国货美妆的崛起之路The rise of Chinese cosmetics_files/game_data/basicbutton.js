ig.module(
	'game.entities.basicbutton'
)
.requires(
	'plugins.button'
)

.defines(function() {

	
	//-------- BUTTON SOUND -------------
	SoundButton = Button.extend({
		size: {x: 81, y:49},
		zIndex: 50,//ig.game.entities.length-1,				
		init: function( x, y, settings ) {
			this.animSheet = new ig.AnimationSheet( 'media/soundon.png', 81, 49),
			this.addAnim( 'on', 1, [0] );
			this.animSheet = new ig.AnimationSheet( 'media/soundoff.png', 81, 49),
			this.addAnim( 'off', 1, [0] );
			this.parent( x, y, settings );
			if (!ig.global.SOUND) this.currentAnim = this.anims.off;
		},
		pressedUp:function(){
			console.log("SAPI A");
			if (!ig.game._pause ){
				//console.log("SAPI B g.sound :);
				if (ig.global.SOUND && ig.global.switcher==true) {
					ig.global.switcher=false
					ig.global.BGM.pause();
					ig.global.SOUND = false;
					this.currentAnim = this.anims.off;
					// ig.game.drawFlag=false
				}
				else if(ig.global.SOUND == false && ig.global.switcher==true) {
					ig.global.switcher=false
					ig.global.BGM.play();
					ig.global.SOUND = true;
					this.currentAnim = this.anims.on;
					// ig.game.drawFlag=false
				}
			}
		}
	});

	//--------- BUTTON PAUSE ----------
	PauseButton = Button.extend({
		size: {x: 34, y:30},
		zIndex: 50,				
		init: function( x, y, settings ) {
			this.animSheet = new ig.AnimationSheet( 'media/game/pausebtn.png',34, 30),
			this.addAnim( 'idle', 1, [0] );
			this.parent( x, y, settings );
		},
		pressedUp:function(){
			if (!ig.game.pauseState){
				//ig.game._tekanPause = true;
				ig.game.pauseState = true;
				ig.game.initPause();
			}
		}
	});

	LogoButton = Button.extend({
		size: {x: 192, y:27},
		zIndex: 100,				
		init: function( x, y, settings ) {
			this.animSheet = new ig.AnimationSheet( 'media/logo.png',192, 27),
			this.addAnim( 'idle', 1, [0] );
			this.parent( x, y, settings );
		},
		pressedUp:function(){
			clickLogo("http://www.girlsgogames.com")			
		}
	});
	

});

