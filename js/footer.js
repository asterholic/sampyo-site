// footer 영역
$(function(){
    const $sitemap = $('#sitemap');
    const $top = $('footer .options>.top>a');
    const $familysite = $('footer .options>.familysite');
    const $familyList = $('footer .options>.familysite-list');
    const $sitemapBtn = $('footer .options>.sitemap');

    // 패밀리사이트 버튼 클릭 시 계열사 리스트 팝업 Up/Down
    $familysite.on('click',function(evt){
        evt.preventDefault();
        
        if($familysite.hasClass('on')){
            $familyList.animate({
                height: 0
            },200,function(){
                $familyList.hide();
            });
            $familysite.removeClass('on');    
        }else{
            $familysite.addClass('on');
            $familyList.show().animate({
                height: '102px'
            },200);
        }
    });

    // 메뉴전체보기 버튼 클릭 시 사이트맵 나타남/사라짐
    $sitemapBtn.on('click',function(evt){
        evt.preventDefault();

        let scrollEnd = $(document).height();

        if($sitemapBtn.hasClass('on')){
            $sitemap.animate({
                height: 0
            },500,'easeOutCubic');
            
            $sitemapBtn.removeClass('on');
            
            $('html,body').animate({
                scrollTop: scrollEnd
            });
        }else{
            $sitemapBtn.addClass('on');
            
            $sitemap.animate({
                height: '430px'
            },500,'easeOutCubic');
            
            $('html,body').animate({
                scrollTop: scrollEnd
            });
        }

        
    });

    // TOP 버튼 클릭 시 페이지 상단 이동
    $top.on('click',function(evt){
        evt.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        },800,'easeInOutExpo');
    });
});