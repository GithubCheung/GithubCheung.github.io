ig.module('plugins.bg')
.requires(
  'impact.entity'
)
.defines(function() {
	Bg = ig.Entity.extend({
		
	idx_i:null,
	idx_j:null,
	jenis: "bg",
    size: { x: 80, y: 40 },
    
    halo:"world",
    
    animSheet:null,
    
    init: function( x, y, settings ) {
      this.parent( x, y, settings );
      this.addAnim( 'idle', 1, [0] );
      //var t = ig.global.mTinggi + 50;
      //var idle:Animation = new Animation(1.5, [0, 1, 2, 3]);
      //this.anims.push(idle);
      //this.addAnim( 'walk', 0.5, [0, 1, 2] ); // [idle, walk]
      //this.anims[0].gotoFrame(3); 
      //this.currentAnim = this.anims[0].rewind();
      //this.currentAnim.rewind();
			//ig.game.spawnEntity(Button) ---> // mainmenuwin
			//CGame.GetInstance();
			//ig.game 
			//this.anims.idle.pivot.x = this.anims.idle
    },
	
	clicked: function() 
	{
		//log("CLICK b");
	},
    
    
    update:function() {
    	this.parent();
    },
    
    draw:function() {
    	this.parent();
    }
    

	})
	
})