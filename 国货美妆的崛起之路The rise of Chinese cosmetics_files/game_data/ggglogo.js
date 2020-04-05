ig.module(
	'plugins.ggglogo'
)
.requires(
	'game.entities.ButtonClick',
	'impact.entity'
)

.defines(function() {
	
	GGGLogo = ButtonClick.extend({
		ignorePause:true,
		checkAgainst: ig.Entity.TYPE.B,
		//size:{x:158, y:65},
		size:{x:1, y:1},
		flag:false,
		zIndex:300,
		logo:null,
		//logo:new ig.Image("media/credits/ggg_new.png"),
		//animSheet: new ig.AnimationSheet( 'media/credits/ggg_new.png', ig.getX(115), ig.getY(71)),

		init: function( x, y, settings ) {
			//this.addAnim( 'idle', 1, [0] );
			//ig.global.gggLogoURL = null;
			this.parent( x, y, settings );
		},

		isEmpty:function(a) {
            if (typeof a == undefined || a == null || a == "") 
                return true;

            return false;
        },

		pressedUp:function(){
			console.log('hehehe')
			if (this.isEmpty(ig.global.gggLogoAction) == false) {
				//ig.global.openLink(this.gggLink)
				console.log("PRESS UP LOGO");
				//ig.global.gggLogoAction();
			}
		},

		update:function() {
			this.parent();
			if( ig.global.APIready == true && !this.flag) {
			   if (this.isEmpty(ig.global.gggLogoURL) == false) {
	               this.logo = new ig.Image(ig.global.gggLogoURL);
	               this.size.x = ig.global.gggLogoWidth;
	               this.size.y = ig.global.gggLogoHeight;
	           }
               //console.log("width image : " + this.logo.width + " - " + this.logo.height)
               this.flag = true;
            }
		},

		draw:function() {
			//this.parent();
			if (this.logo) {
				this.logo.draw(this.pos.x, this.pos.y);
			}
		}
	});
});

