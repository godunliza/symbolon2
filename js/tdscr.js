 window.onload=function(){
 	var plan,btn,btn_cl,newLi;
 	var todo=['l'];
  btn_cl=0;
 	btn=document.getElementById('btn');
 	/*Запись*/
 	btn.onclick=function(){
    input=document.getElementById('input');
 		plan=input.value;
    if(plan!=""){
 		list=document.getElementById('list');
 		newLi = document.createElement('li');
 		del=document.createElement('i');
 		del.classList.add("fa","fa-trash-o");
 		del.ariahidden="true";
 		newLi.innerHTML= plan;
 		newLi.id=btn_cl;
 		newLi.classList.add('li');
    newLi.classList.add('cursor_p');
  	list.appendChild(newLi);
  	newLi.appendChild(del);
  	/*Запись в массив*/
  	todo[btn_cl]=plan;
  	console.log(todo);
  	del.addEventListener("click", delpl);
  	btn_cl++;
    input.value="";
    
  	}	}
  /*Удаление*/
  	function  delpl() {
  			
  		if (list.hasChildNodes){
  			var target=event.target;//где был клик
  			var t_id=target.parentElement.id;
  			target.parentElement.remove();
  			console.log(t_id);
  			/*Удаление из массива*/
  			todo.splice(t_id,1);

  			var relist=document.getElementsByClassName('li');
  			//relist[0].id='read';
  			console.log(relist);
  			
  			for (var i =t_id; i<relist.length-t_id; i++) {
  				(relist[i]).id=i;
  				console.log(relist[i].id);

  			}

  			btn_cl--;

		}

  }
}

  /*

var li=document.getElementsByClassName("li");

list=document.getElementById('list');
var  flag=0,t_d,t_o;
list.addEventListener("mousedown",down)
list.addEventListener("mouseover",over)
list.addEventListener("mouseout",out)
list.addEventListener("mouseup",up)

var next_n;

function delay()
{
  console.log("delay");
}
function down(){
flag=1;
t_d=event.target;
next_n=t_d.nextElementSibling;

}



function over()
{
if (flag) {

t_o=event.target;
//list.removeChild(t_d);
t_o.id=+t_o.id-1;
newLi = document.createElement('li');
newLi.classList.add('li');
newLi.classList.add('dot');
newLi.classList.add('cursor_p');
newLi.innerHTML = '...';
var ov=list.children[t_o.id];
  if(ov)
  {list.insertBefore(newLi,ov);}

}

   
   
}
function out()
{
 
   if (flag) {

  //  list.removeChild(newLi);
   }
}


function up(){
  flag=0;

}




}






/*OVER
t_o=event.target;
  if (flag && (t_o.id!=next_n.id)) {
   var timerId =  setTimeout(delay, 3000);
  
  newLi = document.createElement('li');
  newLi.classList.add('li');
  //newLi.id=+t_d.id+1;
  newLi.classList.add('dot');
  newLi.classList.add('cursor_p');
  newLi.innerHTML = '...';
  var ov=list.children[t_o.id];
  if(ov)
  {list.insertBefore(newLi,ov);}
 }*/


 	



/*OUT*/



































 

