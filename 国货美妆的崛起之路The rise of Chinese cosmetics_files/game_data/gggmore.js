ig.module(
	'plugins.gggmore'
)
.requires(
	'impact.entity',
	'plugins.button'
)

.defines(function() {
	
	GGGMore = Button.extend({
		zIndex: 3,
		text:[''],
		size: {x:162, y:49},
		textPos: {x:81,y:32},

		ignorePause:true,
		checkAgainst: ig.Entity.TYPE.B,

		init: function( x, y, settings ) {
			this.animSheet = new ig.AnimationSheet(  'media/main/moregame.png', 185, 87);
			this.addAnim( 'idle', 1, [0] );
			this.parent( x, y, settings );
		},

		isEmpty:function(a) {
            if (typeof a == undefined || a == null || a == "") 
                return true;
            return false;
        },

		pressedDown:function(){
			//alert("entut " + ig.global.gggMoreAction)
			if (this.isEmpty(ig.global.gggMoreAction) == false) {
				//alert("fuk")
				//ig.global.openLink(this.gggLink)
				//ig.global.gggMoreAction();
			}
		},

		draw:function() {
			this.parent();
			if (this.logo) {
				this.logo.draw(this.pos.x, this.pos.y);
			}
		}
	});
});

