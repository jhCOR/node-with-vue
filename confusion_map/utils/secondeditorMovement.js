			//묶음 상자는 여러 위젯들을 일렬로 정렬하도록 지원하는 도구. 이 안에 다른 위젯을 배치할 것임
			
			function setSizeOfWidget(){
				var newWidth=document.getElementById("newWidth").value;//추후 현재 크기를 미리 넣을 것
				var newHeigth=document.getElementById("newHeight").value;
				var resizeButton=document.getElementById(ButtonId);
				
				resizeButton.style.width=newWidth+"px";//단위는 변경 가능 안붙여도 됨
				resizeButton.style.height=newHeigth+"px";
			}
			function setContentWidget(){
				var newcontent=document.getElementById("newcontent").value;//추후 현재 크기를 미리 넣을 것
				var resetContentButton=document.getElementById(ButtonId);
				resetContentButton.innerText=newcontent;
			}

            
			// 이미지 움직이기
			function moveDrag(e){
				var e_obj = window.event? window.event : e;
				var dmvx = parseInt(e_obj.clientX + img_L);
				var dmvy = parseInt(e_obj.clientY + img_T);
				targetObj.style.left = dmvx +"px";
				targetObj.style.top = dmvy +"px";
				return false;
			}

			// 드래그 시작
			function startDrag(e, obj){
				targetObj = obj;
				var e_obj = window.event? window.event : e;
				img_L = getLeft(obj) - e_obj.clientX;
				img_T = getTop(obj) - e_obj.clientY;

				document.onmousemove = moveDrag;
				document.onmouseup = stopDrag;
				if(e_obj.preventDefault)e_obj.preventDefault();
			}

			// 드래그 멈추기
			function stopDrag(){
				document.onmousemove = null;
				document.onmouseup = null;
			}