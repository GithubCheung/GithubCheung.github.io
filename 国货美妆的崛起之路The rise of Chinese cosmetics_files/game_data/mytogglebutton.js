ig.module('plugins.mytogglebutton')
.requires(
  'impact.image',
  'plugins.myentity',
  'plugins.empika.entity_utilities',
  'plugins.empika.game_utilities'
)

.defines(function() {
    ig.Entity.inject({
        shadowOptions:{
        },
    });

	MyToggleButton = MyEntity.extend({
		activated:true,

        init:function(x, y, settings) {
            this.parent( x, y, settings );

            if (this.activated) {
                this.changeImage(1);
            } else {
                this.changeImage(0);
            }
        },

        toggleMe:function() {
        	this.activated = !this.activated;

        	if (this.activated) {
        		this.changeImage(1);
        	} else {
        		this.changeImage(0);
        	}
        },
    })
})