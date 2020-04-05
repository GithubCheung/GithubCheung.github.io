ig.module(
	'plugins.myinput'
)

.requires(
	'impact.input'
)

.defines(function() {
	ig.Input.inject({
		mousemove: function( event ) {
			var el = ig.system.canvas;
			var pos = {left: 0, top: 0};
			var t1 = -7;
			while( el != null ) {
				pos.left += el.offsetLeft;
				pos.top += el.offsetTop;
				t1 = el.offsetTop
				el = el.offsetParent;
			}
			var tx = event.pageX;
			var ty = event.pageY;
			if( event.touches ) {
				tx = event.touches[0].clientX;
				ty = event.touches[0].clientY;
			}
			
			// HACK BUAT SCALING SUPAYA MOUSE X Y NYA BENAR KALAU DI SCALE
			this.mouse.x = (tx - pos.left+ document.body.scrollLeft) / ig.system.scale * ig.system.realWidth/parseFloat(ig.system.canvas.style.width);
			this.mouse.y = (ty - pos.top + document.body.scrollTop) / ig.system.scale * ig.system.realHeight/parseFloat(ig.system.canvas.style.height);

			var s = "mouse xy : " + this.mouse.x + ", " + this.mouse.y
						+ " - real wh : " + ig.system.realWidth + ", " + ig.system.realHeight
						+ " - canvas wh : " + ig.system.canvas.style.width + "," + ig.system.canvas.style.height
						+ " - pos : " + pos.left + ", " + pos.top
						+ " - offset top : " + document.body.scrollTop + " _ TAEK : " + t1;
			
			ig.global.s = s;
			//window.log(s);
		},
	
		
	});

});

