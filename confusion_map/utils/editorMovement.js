window.onload = function(){
    var x_first=0;
    var y_first=0;
    var x_second=0;
    var y_second=0;

    var canvas = document.getElementById("editorpage");
    var ctx=canvas.getContext("2d");
    ctx.strokeRect(10,10,40,10);//(400,50)에 너비는 세번쨰 파라미터 높이는 네번쨰 파라미터
    //strokeRoundedRect(ctx,20,30,40,10);

    canvas.onclick=function(event){
        var x=event.offsetX;
        var y= event.offsetY;
        document.getElementById("monitor3").innerHTML="x:"+x+","+"y:"+y;
        if(x_first==0&y_first==0){
        
            x_first=x;
            y_first=y;
            
            document.getElementById("monitor1").innerHTML="x_first:"+x_first+","+"y_first:"+y_first;
        
        }else{
            if(x_second==0&y_second==0){
                x_second=x;
                y_second=y;
                document.getElementById("monitor2").innerHTML="x_second:"+x_second+","+"y_second:"+y_second;
            }
            
            var width=(x_second-x_first);
            var height=(y_second-y_first);
            // ctx.moveto(x_first,y_first);
            ctx.strokeRect(x_first,y_first,width,height);
            x_first=0
            y_first=0;
            x_second=0
            y_second=0;
        }
    
    }
}
//모서리가 둥근 사각형 그리기 도구, 위젯들을 캔버스로 만든 폰 시뮬레이터에 그릴 예정
function strokeRoundedRect(ctx,x_position,y_position,width,height,radius){
    ctx.beginPath();
    ctx.moveto(x+radius,y);
    ctx.arcTo(x+width,y        ,x+width,y+height,radius);
    ctx.arcTo(x+width,y+height ,x      ,y+height,radius);
    ctx.arcTo(x      ,y+height ,x      ,y       ,radius);
    ctx.arcTo(x      ,y        ,x+width,y       ,radius);
    ctx.stroke();
}