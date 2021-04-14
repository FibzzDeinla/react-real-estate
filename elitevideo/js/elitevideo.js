$(document).on("ready" ,() => {
    videoPlayer = $("#video_player").Video({           //ALL PLUGIN OPTIONS

        instanceName:"player1",		                      //name of the player instance
        
        instanceTheme:"dark",					//dark or light
        
        autohideControls:2,			                     //autohide HTML5 player controls
        
        hideControlsOnMouseOut:"No",		            //hide HTML5 player controls on mouse out of the player: "Yes","No"
        
        playerLayout: "fixedSize",		                   //Select player layout: "fitToContainer", "fixedSize", "fitToBrowser"
        
        videoPlayerWidth:746,			                  //fixed total player width
        
        videoPlayerHeight:420,			                  //fixed total player height
        
                lightBox:false,	                               //lightbox mode :true/false
                lightBoxAutoplay: true,                     //autoplay video when lightbox opens: true/false
                lightBoxThumbnailWidth: 400,                 //lightbox thumbnail image width
                lightBoxThumbnailHeight: 220,                //lightbox thumbnail image height
                lightBoxCloseOnOutsideClick: true,           //close lightbox when clicked outside of player area
        
            playlist:"Right playlist",              //choose playlist type: "Right playlist", "Off"
        
            playlistScrollType:"light",                  //choose scrollbar type: "light","minimal","light-2","light-3","light-thick","light-thin","inset","inset-2","inset-3","rounded","rounded-dots","3d"
        
            playlistBehaviourOnPageload:"opened (default)",		 //choose playlist behaviour when webpage loads: "closed", "opened (default)" (not apply to Vimeo player)
        
            autoplay:true,                         //autoplay when webpage loads: true/false
        
        //     colorAccent:"#a2a5a7",                  //plugin colors accent (hexadecimal value - http://www.colorpicker.com/)
        
        // youtubeControls:"custom controls",			 //choose youtube player controls: "custom controls", "default controls"
        
        //     youtubeSkin:"dark",                     //youtube theme: light,dark
        
        //             youtubeColor:"red",                     //youtube color: red, white
        
            youtubeQuality:"default",                    //choose youtube quality: "small", "medium", "large", "hd720", "hd1080", "highres", "default"
        
        videoPlayerShadow:"effect5",            //choose player shadow:  "effect1" , "effect2", "effect3", "effect4", "effect5", "effect6", "off"
        
        shuffle:"No",				            //choose to shuffle videos when playing one after another: "Yes", "No" (shuffle button enabled/disabled on start)

        onFinish:"Play next video",             //"Play next video","Restart video", "Stop video",
        
        nowPlayingText:"Yes",                   //enable disable now playing title: "Yes","No"
        
        fullscreen:"Fullscreen native",         //choose fullscreen type: "Fullscreen native","Fullscreen browser"
        
        rightClickMenu:true,                    //enable/disable right click over player: true/false
        
            hideVideoSource:false,					//option to hide self hosted video sources (to prevent users from download/steal your videos): true/false
        
            showAllControls:true,					//enable/disable all HTML5 player controls: true/false
        
            allowSkipAd:true,                            //enable/disable "Skip advertisement" option: true/false
        
        infoShow:"Yes",                         //enable/disable info option: "Yes","No"
        
            mailShow:"Yes",                         //enable/disable mail option individually: "Yes","No"
    
    
                embedCodeW:"746",                       //embed player code width
        
                embedCodeH:"420",                       //embed player code height
        
                //manual playlist
        
                videos:[
        
                    {
        
                        videoType:"youtube",                                     //choose video type: "HTML5", "youtube", "vimeo"
        
                        title:"Dubai's New Affordable Luxury",                                            //video title
        
                        youtubeID:"gqs6wGwgP40",                                          //https://www.youtube.com/watch?v=XMGoYNoMtOQ                                                         
    
                        description:"Video by InlifeThrill design.",                        //video description
        
                        info:"Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet ne qui nulla debitis sententiae."                                                                   //video info
        
                    },

                    {
        
                        videoType:"youtube",                                     //choose video type: "HTML5", "youtube", "vimeo"
        
                        title:"My Dubai House Tour",                                            //video title
        
                        youtubeID:"hs_3S9PgQhE",                                          //https://www.youtube.com/watch?v=XMGoYNoMtOQ                                                         
    
                        description:"Video by InlifeThrill design.",                        //video description
        
                        info:"Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet ne qui nulla debitis sententiae."                                                                   //video info
        
                    }
        
                ]
        
            });
});