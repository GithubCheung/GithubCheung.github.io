ig.module(
    'plugins.splash'
)

.requires(
    'impact.input',
    'impact.image',
    'impact.game',
    'plugins.button'
)

.defines(function() {
    SplashWin = ig.Game.extend({
        gggLink:"",
        gggAction:"",
        gggSplashAction:"",
        logo:null,
        //logoURL:"media/credits/ggg_new.png",
        logoURL:"media/bg_credit.png",
        timer: new ig.Timer(),
        flag:false,

        init: function(){
            this.timer.reset();
            ig.input.initMouse();
            ig.input.bind( ig.KEY.MOUSE1, 'click');
            ig.global.gggLogoURL = "";
            //console.log("flag a")
           // alert("ios version : " + this.iOSVersion() + " - appversion " + navigator.appVersion)
        },

        iOSVersion: function() {
            if (
             navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            ) {
              var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
                    version = [
                        parseInt(match[1], 10),
                        parseInt(match[2], 10),
                        parseInt(match[3] || 0, 10)
                    ];
             
                return parseFloat(version.join('.'));
            }
        },

        fillWithDefaultBranding:function() {
            ig.global.gggLogoWidth = 202;
            ig.global.gggLogoHeight = 50;
            //ig.global.gggLogoWidth = 115;
            //ig.global.gggLogoHeight = 71;
            //console.log("sapi e")
            ig.global.gggLogoAction = function(){
                //console.log("sapi d")
                ig.global.openLink("http://www.zibbo.com");
            };

            this.gggSplashAction = ig.global.gggLogoAction;
            ig.global.gggMoreAction = ig.global.gggLogoAction;
            //ig.global.gggLink = "http://www.girlsgogames.com";
            ig.global.gggLogoURL = this.logoURL;
            this.logo = new ig.Image(ig.global.gggLogoURL);
            this.logo.width = ig.global.gggLogoWidth;
            this.logo.height = ig.global.gggLogoHeight;
        },

        isEmpty:function(a) {
            if (typeof a == undefined || a == null || a == "") 
                return true;

            return false;
        },

        getGGGBranding:function() {
            ig.global.gggLogoWidth = 0;
            ig.global.gggLogoHeight = 0;
            ig.global.gggLogoAction = null;

            this.gggSplashAction = null;
            ig.global.gggMoreAction = null;
            ig.global.gggLogoURL = null;

            if (ig.global.useAPI == true) {

                //var linksData = ig.global.GameAPI.Branding.getLinks();
                //console.log('getLinks returned object content : ' + JSON.stringify(linksData));

                if(ig.global.useGGGLogo) {
                   this.fillWithDefaultBranding();
                } else {
                    var logoData = ig.global.gggLogoData;
                    if (this.isEmpty(logoData) == false) {
                        ig.global.gggLogoURL = this.isEmpty(logoData.image) ? null : logoData.image;
                        ig.global.gggLogoAction = this.isEmpty(logoData.action) ? null : logoData.action;

                        if (this.isEmpty(ig.global.gggLogoURL) == false) {
                            ig.global.gggLogoWidth = 202;
                            ig.global.gggLogoHeight = 50;
                        }
                    }

                    var moreData = ig.global.gggMoreData;
                    if (this.isEmpty(moreData) == false) {

                        ig.global.gggMoreAction = this.isEmpty(moreData.action) ? null : moreData.action;
                        //console.log("a " + ig.global.gggMoreAction)
                    }

                    var splashData = ig.global.gggSplashScreenData;

                    if (this.isEmpty(splashData) == false) {
                        this.gggSplashAction = this.isEmpty(splashData.action) ? null : splashData.action;

                        if (this.isEmpty( ig.global.gggLogoURL) == false) {
                            this.logo = new ig.Image(ig.global.gggLogoURL);
                            this.logo.width = ig.global.gggLogoWidth;
                            this.logo.height = ig.global.gggLogoHeight;
                        }

                        //if (true == false) 
                            if (this.isEmpty(splashData.show) || splashData.show == false) {
                                this.flag = false;
                                ig.system.setGame(MainMenuWin);
                            }
                    }


                    //alert("ccc " + splashData.action)
                    //console.log("Splash Action : " + splashData.action)

                    

                    /*
                    var t = GameAPI.Branding.getLogo();
                    logoWidth = t.width;
                    logoHeight = t.height;
                    ig.global.gggLink = t.url;
                    ig.global.gggLogoURL = t.image;
                    */
                }

            } else {
                this.fillWithDefaultBranding();
            }
            
            //this.logo = new ig.Image(this.logoURL);
            //this.logo.width = 700;
            //this.logo.height = 525;

            //this.gggLink = "http://freshgirlsgames.com";            
           // console.log("gggLink : " + t.link)
        },

        update: function(){
            if( ig.input.pressed('click') && ig.global.APIready == true && this.flag && this.isEmpty(this.gggSplashAction) == false) {
               //ig.global.openLink(this.gggLink)
               //this.gggSplashAction();
            }

            if (ig.global.APIready != undefined && ig.global.APIready == true && !this.flag) {
                this.timer.reset();
                this.flag = true;
                this.getGGGBranding();
                
            }
            //ig.system.setGame(mainmenuwin);
            //if(Math.round(this.timer.delta()) > 0 && ig.global.APIready == true && this.flag){
            if(Math.round(this.timer.delta()) > 0 && ig.global.APIready == true && ig.global.SplashScreenDone){
                ig.system.setGame(MainMenuWin);
            }
        },

        draw: function(){
            //this.background.draw(0,0);
            //this.icon.draw(ig.system.width/2-32, ig.system.height/3);
            //if (this.logo)
            //    this.logo.draw(ig.system.width/2-this.logo.width/2, ig.system.height/2 - this.logo.height/2);
        },

        // openLink:function(href) { 
        //     if( navigator.userAgent.match(/Android/i)
        //     || navigator.userAgent.match(/webOS/i)
        //     || navigator.userAgent.match(/iPhone/i)
        //     || navigator.userAgent.match(/iPad/i)
        //     || navigator.userAgent.match(/iPod/i))
        //     {
        //         var link = document.createElement('a');
        //         link.setAttribute('href', href);
        //         link.setAttribute('target','_blank');
        //         var clickevent = document.createEvent('Event');
        //         clickevent.initEvent('click', true, false);
        //         link.dispatchEvent(clickevent);
        //         return false;
        //     }
        //     else {
        //         window.open(href, '_blank');
        //     }
            
        // },
    });
})