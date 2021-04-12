// 메인 슬라이드
$(function(){
    const $mainSlide = $('section>#mainslide');
    const $btnPrev = $('section>#mainslide>.btn_prev');
    const $btnNext = $('section>#mainslide>.btn_next');
    
    const $container = $('section>#mainslide>.container');
    let nowIdx = 0;
    
    const $btnPlay = $('section>#mainslide>.controller>.btn_play');
    let intervalKey = null;
    
    const slidePlay = function(){
        if(nowIdx>=2){
            $container.animate({left:-940*4},600,'easeOutCubic',function(){
                $container.css({left:-940*1});
            });
            
            nowIdx=0;
            
            $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
        }else{
            nowIdx++;
            
            $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
            
            $container.animate({left:-940*(nowIdx+1)},600,'easeOutCubic');
        }
    };
    
    const autoPlay = function(){
        $btnPlay.addClass('btn_pause');
        intervalKey = setInterval(function(){
            slidePlay();
        },5000);
    };
    
    const autoPlayPause = function(){
        $btnPlay.removeClass('btn_pause');
        clearInterval(intervalKey);
    };
    
    // mouseenter 시 이전/다음 버튼 출현, mouseleave 시 소멸
    $mainSlide.on({
        'mouseenter':function(){
            $btnPrev.animate({left:0},200,'easeOutSine');
            $btnNext.animate({right:0},200,'easeOutSine');
        }
        ,
        'mouseleave':function(){
            $btnPrev.animate({left:'-42px'},200,'easeInSine');
            $btnNext.animate({right:'-42px'},200,'easeInSine');
        }
    });

    // 이전/다음 버튼 클릭 시 슬라이드 이동
    $btnPrev.on('click',function(evt){
        evt.preventDefault();

        autoPlayPause();

        if(nowIdx<=0){
            $container.animate({left:-940*0},600,'easeOutCubic',function(){
                $container.css({left:-940*3});
            });

            nowIdx=2;

            $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
        }else{
            nowIdx--;

            $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');

            $container.animate({left:-940*(nowIdx+1)},600,'easeOutCubic');
        }
    });

    $btnNext.on('click',function(evt){
        evt.preventDefault();

        autoPlayPause();

        slidePlay();
    });

    // 페이지네이션 인디케이터 클릭 시 슬라이드 이동
    const $indicator = $('section>#mainslide>.controller>.pagination>li');

    $indicator.on('click',function(evt){
        evt.preventDefault();
        
        autoPlayPause();

        nowIdx = $indicator.index(this);

        $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on');

        $container.stop().animate({left:-940*(nowIdx+1)},600,'easeOutCubic');
    });

    // 재생/일시정지 버튼 클릭 시 자동재생 on/off
    $btnPlay.on('click',function(evt){
        evt.preventDefault();

        if(!$btnPlay.hasClass('btn_pause')){
            autoPlay();
        }else{
            autoPlayPause();
        }
    });

    // 페이지 로드 시 슬라이드 자동재생
    $(window).on('load',function(){
        autoPlay();
    });
});
   

// HR 슬라이드
$(function(){
    const $hrSlide = $('section>#hrslide>.container>li');
    const $altPage = $('section>#hrslide>.container>li>a');
    const $hrPlay = $('section>#hrslide>.controller>.hrPlay');
    const $hrPause = $('section>#hrslide>.controller>.hrPause');
    let hrIdx = 0;
    let oldIdx = null;
    let hrIntervalKey = null;

    const hrAutoPlay = function(){
        oldIdx = hrIdx;
        switch(hrIdx){
            case 0 : 
                hrIdx = 1;
                break;
            case 1 : 
                hrIdx = 0;
                break;
        }

        $hrSlide.eq(hrIdx).fadeIn(500,function(){
            $hrSlide.eq(hrIdx).addClass('on').siblings().removeClass('on');
        });
        $hrSlide.eq(oldIdx).fadeOut(500);
    };

    const hrPause = function(){
        $hrPause.addClass('on').prev().removeClass('on');
        clearInterval(hrIntervalKey);
    };

    $altPage.on('click',function(evt){
        evt.preventDefault();

        hrAutoPlay();

        hrPause();
    });

    $hrPlay.on('click',function(evt){
        evt.preventDefault();
        
        $hrPlay.addClass('on').next().removeClass('on');

        clearInterval(hrIntervalKey);
        hrIntervalKey = setInterval(function(){
            hrAutoPlay();
        },3000);
    });

    $hrPause.on('click',function(evt){
        evt.preventDefault();
        
        hrPause();
    });

    // 페이지 로드 시 슬라이드 자동재생
    $(window).on('load',function(){
        hrIntervalKey = setInterval(function(){
            hrAutoPlay();
        },3000);
    });
});