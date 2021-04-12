// 그룹/계열사 찾아오시는 길 옵션박스
$(function(){
    const $select = $('section>#location>.select');
    const $box = $('section>#location>.select>.box>a');
    const $boxFamily = $('section>#location>.select>.select-family.box>a');
    const $boxSite = $('section>#location>.select>.select-site.box>a');
    const $list = $('section>#location>.select>.list');
    const $listFamily = $('section>#location>.select>.select-family.list>li');
    const $listSite = $('section>#location>.select>.select-site.list>li');
    const $srch = $('section>#location>.select>.select-srch>a');

    // 콤보박스 내에 class="on" 인 항목 내용이 들어가게 하는 함수
    const boxChange = function(){
        $boxFamily.text($boxFamily.parents(".select").find("li.on>a").text());
        $boxSite.text($boxSite.parents(".select").find("li.on>a").text());
    };

    // 계열사 선택 시 부문 드롭박스 목록 소팅되는 함수
    const listSorting = function(){
        let $listFamilyOn = $boxFamily.parents(".select").find("li.on");

        $listSite.removeAttr("style");

        // 계열사 선택 결과에 따라 드롭박스 소팅
        for(let i=1;i<=22;i++){
            switch($listFamilyOn.attr("id")){
                case "sp" :
                    if(i>2){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "spi" : 
                    if(i<3 || i>5){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "sppnc" : 
                    if(i!=6){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "hm" : 
                    if(i!=7){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "nrc" : 
                    if(i!=8){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "ptr" : 
                    if(i!=9){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "nvnrec" : 
                    if(i!=10){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "scenc" : 
                    if(i!=11){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "spc" : 
                    if(i!=12){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "rmc" : 
                    if(i!=13){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "spn" : 
                    if(i<14 || i>20){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "spe" : 
                    if(i!=21){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
                case "spr" : 
                    if(i!=22){
                        $listSite.eq(i).attr({"style":"display:none"});
                    };
                    break;
            }
        } 
    }

    boxChange();
    listSorting();

    // 콤보박스 클릭 시 드롭다운 리스트 나타남/사라짐
    $box.on('click',function(evt){
        evt.preventDefault();

        const $boxList = $(this).parent().next();
        
        if($boxList.attr("style")=='visibility:visible'){
            $boxList.removeAttr("style");
        }else{
            $boxList.attr({style:'visibility:visible'});
        }
    });
    
    // 드롭다운 리스트에서 항목 선택 시 (계열사)
    $listFamily.find('a').on('click',function(evt){
        evt.preventDefault();

        // 드롭다운 사라짐
        $(this).parents(".list").removeAttr("style");
    
        // 선택한 항목에 class "on" 부여, 나머지 항목에서는 삭제
        $(this).parent().addClass("on").siblings().removeClass("on");
        
        // 부문 선택 콤보박스(2번째) 초기화
        $listSite.eq(0).addClass("on").siblings().removeClass("on");
 
        boxChange();

        listSorting();
        
    });

    // 드롭다운 리스트에서 항목 선택 시 (부문)
    $listSite.find('a').on('click',function(evt){
        evt.preventDefault();

        // 드롭다운 사라짐
        $(this).parents(".list").removeAttr("style");
    
        // 선택한 항목에 class "on" 부여, 나머지 항목에서는 삭제
        $(this).parent().addClass("on").siblings().removeClass("on");

        boxChange();

        listSorting();
    });

    // 마우스 커서가 콤보박스 및 드롭다운 리스트에서 나갈 경우 리스트 사라짐
    $select.on('mouseleave',function(){
        $list.removeAttr('style');
    });

    // 검색 버튼 클릭 시, 사업부문 선택 여부 유효성 검사
    $srch.on('click',function(){
        let $listSiteOn = $boxSite.parents(".select").find("li.on");

        if($listSiteOn.attr("id")==undefined){
            alert('사업부문을 선택하세요!');
            $boxSite.focus();
            return false;
        }
    });
});