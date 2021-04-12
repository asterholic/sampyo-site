$(function(){
    const $bar = $('header>nav .gnb>li>a>.bar');

    // gnb 메뉴에 mouseenter했을 떄 뜨는 bar의 width를 동적으로 계산
    // bar의 width : gnb 메뉴 내 글자의 너비
    const barW = [];
    for(i=0;i<5;i++){
        barW[i] = $('header>nav .gnb>li>a>span').eq(i).width();
        $bar.eq(i).css({width:barW[i]});
    }

    const $gnb = $('header>nav .gnb>li');
    const $sub = $('header>nav .gnb>li>.sub');

    $gnb.on({
        'mouseenter':function(){
            let gnbIndex = $gnb.index(this);

            $sub.eq(gnbIndex).fadeIn(200);
        },
        'mouseleave':function(){
            $sub.hide();
        }
    });
});