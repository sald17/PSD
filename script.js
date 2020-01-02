var adjustVolume = function (value) {
    let volumeBar = document.getElementById('volume-bar');
    volumeBar.setAttribute('aria-valuenow', value);
    volumeBar.setAttribute('style', `height: ${Number(value)}%`);
}


var hideMediaPlayer = function () {
    $('.lg-media-controller').removeClass('d-flex');
}

function changeWidthRoot() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let root = document.getElementById('root');
    if (width > 700) {
        root.setAttribute('style', 'width:' + (window.innerWidth - 250) + 'px;');
    }
    else {
        let menuHeight = $('#sm-side-menu').height();
        let playerHeight = $('#media-player').height();
        let h = height - menuHeight - playerHeight;
        root.setAttribute('style', 'width: 100%; height = ' + h + 'px; position: absolute;');

        $('#recentPlaylist').removeClass('justify-content-start').addClass('justify-content-around');
        $('#rotationPlaylist').removeClass('justify-content-start').addClass('justify-content-around');
        $('#artistList').removeClass('justify-content-between').addClass('justify-content-around');
        hideMediaPlayer();
    }

}

changeWidthRoot();

var isHoverVolumeBar = false;

document.getElementById('volume').addEventListener('mouseover', function () {
    if(!isHoverVolumeBar){
        $('#volume-area').css('display', 'flex');
        isHoverVolumeBar = true;
    }    
});

document.getElementById('volume').addEventListener('mouseout', function () {
    if(isHoverVolumeBar){
        $('#volume-area').css('display', 'none');
        isHoverVolumeBar = false;
    }
});

document.getElementById('volume-area').addEventListener('mouseover', function () {
    

    if(!isHoverVolumeBar){
        $('#volume-area').css('display', 'flex');
    }
    console.log($('#volume-area').css('display'));
    
});

document.getElementById('volume-area').addEventListener('mouseout', function () {
    document.getElementById('volume-area').setAttribute('style', 'display: none;');

});

window.onresize = changeWidthRoot;