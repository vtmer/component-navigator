/*
 要求：1.使用导航插件时，需要先引用外部JQuery插件（1.10.2或以上）2.然后引用该插件
 使用方法:nav函数是插件的主函数，speed变量作为滑块的延伸速度，speed1作为滑块的移动速度，leftCtrl作为滑块由间隔园点的大小决定的相对于<li>
的向右偏移量，widthCtrl则作为滑块长度由间隔圆点大小决定相对于<li>长度的增加量
 */
// DOM Ready 
function nav(speed,speed1,leftCtrl,widthCtrl) {

    var $el, leftPos, newWidth;
       var i=0;
    $(".nav-wrap").mouseover(function(){
    	if(i==0)
    	i=1;
    	
    	
    });
   $(".nav-wrap").mouseleave(function(){
    	i=0;
    
   });
  
    $("#example").append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    
    $magicLine
        
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example li").find("a").hover(function() {
        $el = $(this);
        
        leftPos = (parseFloat($el.position().left)+leftCtrl)+"px";
        newWidth = (parseFloat($el.parent().width())+widthCtrl)+"px";
        midPos = (parseFloat(leftPos)+parseFloat(newWidth)/2)+"px";
       
        if(i!=1)
       { $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        },speed1);
      
       }
       else
       {
       	$magicLine.css("left",midPos);
       	$magicLine.css("width","0px");
       	
       	$magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        },speed);
       i++;
       
       }
       
    }, function() {
        $magicLine.stop().animate({
            left:midPos,
            width:"0px"
        },speed1);  
       
    });
     $("#example li").find("a").mousedown(function(){
     	
     	$("#magic-line").css("background-color","rgb(255,191,5)");
     	
     	
     });
      $("#example li").find("a").mouseup(function(){
     	
     	$("#magic-line").css("background-color","rgb(255,160,0)");
     	
     	
     });
    
    
    
};
$(function(){nav(100,150,5,-8)});
