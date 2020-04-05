ig.module(
	'plugins.branding'
)

.requires(
	'impact.image'
)

.defines(function() {
	
	brandingPic = null;
	
	api = function() {
		   
			return SpilGames || window.parent.SpilGames || {
				Portal: {
					showScoreboard: function(){log("showed function() scoreboard");},
					gotoPage: Utils.log,
					showInviteFriends: Utils.log
				},
				Users: {
					getCurrentUser: function(obj){log("getCurrentUser");}
				},
				Highscores: {
					insert: function(obj) {log("Insert score: " + obj.score)},
					getGameScores: Utils.log,
					getFriendScores: Utils.log,
				},
				Events: {
					publish: Utils.log,
					subscribe: Utils.log
			   }    
			}
		};
		
	/*api().Events.publish("game.loading.start");
	
	api().Events.publish("portal.branding", function(data) {
            var pic = new Image();
            brandingUrl = data.url;
			
    });
   
    api().Events.subscribe('game.language.change', function(lang){
		ig.global.localize.changeLang(lang);
	});
	 
	api().Events.subscribe('gamecontainer.resize', function(container) {
		var gameContainer = document.getElementById('canvas');
		var width = container.width;
		var height = container.height;
		gameContainer.style.width = width+"px";
		gameContainer.style.height = height+"px";
	});*/
	
	showBranding = function(x,y) {
		//log("loading brands");
		api().Events.publish("game.loading.start");
		api().Events.publish("portal.branding", function(data) {
			//log("branding");
			var pic = new Image();
			pic.src = data.src;
			ig.game.mBrandingURL = data.url;
			pic.onload = function() {
				// logo button
				ig.game.mBrandingLogo = ig.game.spawnEntity( Button, x, y, {
					size: {x:this.width, y:this.height},
					zIndex: 99,
					animSheet: new ig.AnimationSheet( this.src, this.width, this.height ),
					pressedUp:function() {
						window.location.href = ig.game.mBrandingURL;
					}
				});
				ig.game.sortEntitiesDeferred();
			}
		});
	};
	
	// submit scores
	submitScore = function(skor) {
		api().Highscores.insert({
			score: skor,
			onsuccess: function(_score) {
				log("Score inserted:" + _score);
			}
		});
	};
	
	// api().Events.publish('game.link.moregames');
	
});