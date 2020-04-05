ig.module(
  'game.entities.objek'
)
.requires(
  	
	'impact.entity'
	
)

.defines(function(){

	Obj=ig.Entity.extend({

	animSheet:null,
	font:null,

	

	//text: [],
    //textPos: { x: 5, y: 5 },
    //textAlign: ig.Font.ALIGN.CENTER,

		init: function( x, y, settings ) {
	      this.parent( x, y, settings );
	      this.addAnim( 'idle', 1, [0] );


	      
	    },

	   

	    draw:function()
	    {
	    	this.parent();
	    	/*if (this.text && this.font)
	    	{console.log("dgdfgDFg")
	    		this.font.draw(
	            this.text,
	            this.pos.x + this.textPos.x - ig.game.screen.x,
	            this.pos.y + this.textPos.y - ig.game.screen.y,
	            this.textAlign
	          );
	    	}*/
	          
	    },

	    update:function()
	    {
	    	this.parent();
	    }

	})
})