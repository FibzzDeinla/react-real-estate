import '../styles/index.scss';
import 'slicknav/dist/slicknav.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import '../elitevideoplayer/css/elite.css';
// import '../elitevideoplayer/css/elite-font-awesome.css';
// import '../elitevideoplayer/css/jquery.mCustomScrollbar.css';

import 'owl.carousel';
// import 'core-js';
// import 'core-js/features/array/find'; // <- at the top of your entry point
// window.Player = require('../elitevideoplayer/js/Playlist.js');
require('webpack-jquery-ui/effects');
require('slicknav/dist/jquery.slicknav.min.js');
require('scrollit');
require('@fancyapps/fancybox');

// Elite Video Player
// require('../elitevideoplayer/js/froogaloop.js');
// require('../elitevideoplayer/jquery.mCustomScrollbar.js');
// require('../elitevideoplayer/js/THREEx.FullScreen.js');
// require('../elitevideoplayer/js/Playlist.js');
// require('../elitevideoplayer/js/videoPlayer.js');
// require('../elitevideoplayer/js/ZeroClipboard.js');

require('./app.js');

console.log('webpack starterkit');