ig.module('plugins.myentity')
.requires(
  'impact.entity',
  'impact.image',
  'plugins.empika.entity_utilities',
  'plugins.empika.game_utilities'
)

.defines(function() {
    ig.Entity.inject({
        shadowOptions:{
        },
    });

	MyEntity = ig.Entity.extend({
        animSheet:null,
        autoFireMouseDown:false,
        autoFireMouseUp:true,
        images:[],
        curImgIdx:0,
        visible:true,
        dragnAndDropFlag:false,

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.changeImage(0);
            this.shadowOptions.shadowOffsetX = typeof(this.shadowOptions.shadowOffsetX) == "undefined" ? 3 : this.shadowOptions.shadowOffsetX;
            this.shadowOptions.shadowOffsetY = typeof(this.shadowOptions.shadowOffsetY) == "undefined" ? 3 : this.shadowOptions.shadowOffsetY;
            this.shadowOptions.shadowBlur = typeof(this.shadowOptions.shadowBlur) == "undefined" ? 0 : this.shadowOptions.shadowBlur;
            this.shadowOptions.shadowColor = typeof(this.shadowOptions.shadowColor) == "undefined" ? "#000000" : this.shadowOptions.shadowColor;
        },

        update:function() {
        	this.parent();
            if (this.autoFireMouseUp) {
                this.fireMouseUp();
            }

             if (this.autoFireMouseDown) {
                this.fireMouseDown();
            }

            if (this.dragnAndDropFlag) {
                this.dragAndDrop();
            }
        },

        draw:function() {
            if (this.visible == false)
                return;
            
            if (this.shadowOptions.shadowBlur != 0) {
                var ctx = ig.system.context;
                ctx.shadowOffsetX   = this.shadowOptions.shadowOffsetX;
                ctx.shadowOffsetY   = this.shadowOptions.shadowOffsetY;
                ctx.shadowBlur      = this.shadowOptions.shadowBlur;
                ctx.shadowColor     = this.shadowOptions.shadowColor;
            }

        	this.parent();
           

            if (this.images.length > 0 && 
                this.images[this.curImgIdx] != null
            ) 
            {
                this.images[this.curImgIdx].draw(this.pos.x, this.pos.y);
            }

            if (this.shadowOptions.shadowBlur != 0) {
                var ctx = ig.system.context;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            }
        },

        toggleDragAndDrop:function(flag) {
            this.dragnAndDropFlag = typeof(flag) !== 'undefined' ? flag : true;
        },

        addImage:function(img) {
            var m = new ig.Image(img);
            this.images.push(m);
        },

        changeImage:function(imgIdx) {
            this.curImgIdx = imgIdx;
            if (this.images.length > 0 && 
                this.images[this.curImgIdx] != null
            ) 
            {
                this.size.x = this.images[this.curImgIdx].width;
                this.size.y = this.images[this.curImgIdx].height;
               // console.log("myentity size x :" +this.size.x + " - y :" + this.size.y);
            }
        },
    })
})