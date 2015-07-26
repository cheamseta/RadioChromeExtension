var bgp = chrome.extension.getBackgroundPage();

var linkRFA = "";
var linkVoa = "";
var linkVoaE = "";
var linkAbc = "";

//chrome.runtime.onMessage.addListener(
//        function (request, sender, sendResponse) {
//            if (request.func == "duration")
//                alert(bgp.getTimer());
//        });

document.addEventListener("DOMContentLoaded", function () {

    if (bgp.isPlaying() == true && bgp.getRadio() == 'rfa') {
        $('#btnPlayRFA').addClass('act');
        $('#btnPlayRFA').html('Stop');
    } else if (bgp.isPlaying() == true && bgp.getRadio() == 'voaM') {
        $('#btnPlayVOAm').html('Stop');
    } else if (bgp.isPlaying() == true && bgp.getRadio() == 'voaE') {
        $('#btnPlayVOAe').html('Stop');
    } else if (bgp.isPlaying() == true && bgp.getRadio() == 'Abc') {
        $('#btnPlayABC').html('Stop');
    }

    //-----------------------------------

    if (bgp.getTitle() == "") {
        loadRFA();
    } else {
        linkRFA = bgp.getLink();
        $('#lblTitle').html('Title: ' + bgp.getTitle());
    }
    $('#btnPlayRFA').click(function () {
        if ($(this).html() == 'loading...') {
            alert("សូមរង់ចាំបន្តិច");
            return;
        }


        if (bgp.isPlaying() == false || $(this).html() == 'Stop') {
            if ($(this).html() == 'Stop') {
                bgp.stop();
                $(this).html('ស្តាប់វិទ្យុ RFA');
                bgp.setRadio('');
            } else {
                bgp.start(linkRFA);
                $('#btnPlayRFA').addClass('act');
                $(this).html('Stop');
                bgp.setRadio('rfa');
            }
        } else {
            alert("សូមបិទវិទ្យុដ៏ទៃសិន!!");
        }
    });
    //---------------------------------
    if (bgp.getTitleVoa() == "") {
        loadVOAm();
    } else {
        linkVoa = bgp.getLinkVoa();
        $('#lblTitleVoaM').html('Title: ' + bgp.getTitleVoa());
    }
    $('#btnPlayVOAm').click(function () {
        if ($(this).html() == 'loading...') {
            alert("សូមរង់ចាំបន្តិច");
            return;
        }


        if (bgp.isPlaying() == false || $(this).html() == 'Stop') {
            if ($(this).html() == 'Stop') {
                bgp.stop();
                $(this).html('ស្តាប់វិទ្យុ VOA');
                bgp.setRadio('');
            } else {
                bgp.start(linkVoa);
                $(this).html('Stop');
                bgp.setRadio('voaM');
            }
        } else {
            alert("សូមបិទវិទ្យុដ៏ទៃសិន!!");
        }
    });
    //--------------------------------------
    if (bgp.getTitleVoaE() == "") {
        loadVOAe();
    } else {
        linkVoaE = bgp.getLinkVoaE();
        $('#lblTitleVoaE').html('Title: ' + bgp.getTitleVoaE());
    }
    $('#btnPlayVOAe').click(function () {
        if ($(this).html() == 'loading...') {
            alert("សូមរង់ចាំបន្តិច");
            return;
        }



        if (bgp.isPlaying() == false || $(this).html() == 'Stop') {
            if ($(this).html() == 'Stop') {
                bgp.stop();
                $(this).html('ស្តាប់វិទ្យុ VOA');
                bgp.setRadio('');
            } else {
                bgp.start(linkVoaE);
                $(this).html('Stop');
                bgp.setRadio('voaE');
            }
        } else {
            alert("សូមបិទវិទ្យុដ៏ទៃសិន!!");
        }
    });


    //--------------------------------------
    if (bgp.getTitleAbc() == "") {
        loadABC();
    } else {
        linkAbc = bgp.getLinkAbc();
        $('#lblTitleABC').html('Title: ' + bgp.getTitleAbc());
    }
    $('#btnPlayABC').click(function () {
        if ($(this).html() == 'loading...') {
            alert("សូមរង់ចាំបន្តិច");
            return;
        }



        if (bgp.isPlaying() == false || $(this).html() == 'Stop') {
            if ($(this).html() == 'Stop') {
                bgp.stop();
                $(this).html('ស្តាប់វិទ្យុ VOA');
                bgp.setRadio('');
            } else {
                bgp.start(linkAbc);
                $(this).html('Stop');
                bgp.setRadio('Abc');
            }
        } else {
            alert("សូមបិទវិទ្យុដ៏ទៃសិន!!");
        }
    });
});

function loadRFA() {
    var Body = $('#btnPlayRFA');
    Body.html('loading...');
    $.get("http://streamer1.rfa.org/archive/KHM/Khmer_podcast.php", function (data) {
        $(data).find("item:first").each(function () {

            bgp.setLink($(this).find("link").text());
            linkRFA = $(this).find("link").text();

            bgp.setTitle($(this).find("title").text());
            $('#lblTitle').html('Title: ' + $(this).find("title").text());


            Body.html('ស្តាប់វិទ្យុ RFA');
        });
    });
}

function loadVOAm() {
    var Body = $('#btnPlayVOAm');
    Body.html('loading...');
    $.get("http://khmer.voanews.com/podcast/?count=2", function (data) {
        $(data).find("item:last").each(function () {

            bgp.setLinkVoa($(this).find("enclosure").attr('url'));
            linkVoa = $(this).find("enclosure").attr('url');

            bgp.setTitleVoa($(this).find("title").text());
            $('#lblTitleVoaM').html('Title: ' + $(this).find("title").text());


            Body.html('ស្តាប់វិទ្យុ VOA');
        });
    });
}
function loadVOAe() {
    var Body = $('#btnPlayVOAe');
    Body.html('loading...');
    $.get("http://khmer.voanews.com/podcast/?count=1", function (data) {
        $(data).find("item").each(function () {

            bgp.setLinkVoaE($(this).find("enclosure").attr('url'));
            linkVoaE = $(this).find("enclosure").attr('url');

            bgp.setTitleVoaE($(this).find("title").text());
            $('#lblTitleVoaE').html('Title: ' + $(this).find("title").text());


            Body.html('ស្តាប់វិទ្យុ VOA');
        });
    });
}

function loadABC() {
    var Body = $('#btnPlayABC');
    Body.html('loading...');
    $.get("http://www.radioaustralia.net.au/khmer/podcast/feed/dailyonehourbroadcast-km", function (data) {
        $(data).find("item:first").each(function () {

            if (bgp.getLinkAbc() == "") {
                bgp.setLinkAbc($(this).find("link").text());
                linkAbc = $(this).find("link").text();
            } else {
                linkAbc = bgp.getLinkAbc();
            }

            if (bgp.getTitleAbc() == "") {
                bgp.setTitleAbc($(this).find("title").text());
                $('#lblTitleABC').html('Title: ' + $(this).find("title").text());
            } else {
                $('#lblTitleABC').html('Title: ' + bgp.getTitleAbc());
            }

            Body.html('ស្តាប់វិទ្យុ ABC');
        });
    });
}




