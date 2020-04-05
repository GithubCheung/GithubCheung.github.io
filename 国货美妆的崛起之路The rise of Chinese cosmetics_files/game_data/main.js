ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.MainMenuWin',
	"game.entities.objek",
	"game.entities.basicbutton",
	'game.GameWin',
	'game.Dressup',

	'plugins.button',
	'plugins.button2state',

	'plugins.myfont',
	'plugins.branding',
	'plugins.mysound',
	'plugins.preloader',
	'plugins.myentity',
	'plugins.mytogglebutton',
	'plugins.myinput',
	'plugins.splash',
	"plugins.ggglogo",
	"plugins.gggmore",

	'plugins.empika.game_utilities',
	'plugins.empika.entity_utilities',

	'game.entities.ButtonClick',
	'game.entities.interactiveObject'
)

.defines(function(){

	[
		{tipe:[1, 3], spasi:1, kolom:40, loop:3, star:0, heart:0},
		{tipe:[1, 3, 7, 2], spasi:2, kolom:70, loop:3, star:1, heart:0}
	]

	ig.global.ORI_WIDTH = 700;
	ig.global.ORI_HEIGHT = 525;
	
	ig.global.CUR_WIDTH = 700;
	ig.global.CUR_HEIGHT = 525;

	ig.global.sound_game = 1;
	ig.global.BGM = new MySound( 'media/sound/take-it-easy-sascha-giebel.mp3', 1, 22, 0);
	ig.global.SOUND = true;
	// ig.global.BGM.play();

	ig.global.lipstickColor=1;
	ig.global.lipstickScent=1;
	ig.global.lipstickMoist=1;
	ig.global.lipstickGlit=1;

	ig.global.packaging=1;
	ig.global.packagingColor=1;
	ig.global.reallipstick=1;

	MyGame = ig.Game.extend({
		
		// Load a font
		// font: new ig.Font( 'media/04b03.font.png' ),

		///img: new ig.Image( 'player.png' ),

		keple:5,
		gx:10,
		gy:10,

		namaFungsi:function(tx, ty) {
			//this.nama = "";

			// if (typeof tx != "undefined") {
			// 	this.gx = tx;
			// } else {
			// 	this.gx = this.gx;
			// }

			// this.gx = typeof tx != "undefined" ? tx : this.gx;
			// this.gx = tx;
			// this.gx = this.gx;
			//this.gy = ty;
		},
/*

		entut: function(x, y) {
			//var namaVarLokal = ;
			//for (var i = 0; i <= ) {

			//}
		},*/

		init: function() {
			// Initialize your game here; bind keys etc.
			//this.arrayku = [this.nama, 50, "adasda"];
			// var s = "a";
			// s = s + "bc"; // "abc"
			// console.log("");
			//this.img.draw(10, 10);
			// anims = [];
			this.addAnim( 'idle', 0.1, [0,1,2] ); // anims = [idle];
        	this.addAnim( 'jump', 0.1, [3,4,5] ); // anims = [idle, jump];
		},
		
		update: function() {
			// Update all entities and backgroundMaps
			this.parent();

			// Add your own, additional update code here
		},
		
		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();
			
			// Add your own drawing code here
			var x = ig.system.width/2,
				y = ig.system.height/2;a
			
			this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
			this.entut();
			font = null;
		},
	});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', SplashWin/*MainMenuWin*/, 60, 700, 525, 1, Preloader );

});
