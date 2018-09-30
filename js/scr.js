var todo=[];
var kol=0;
 window.onload=function(){
var list,
 input,
 value,
 btn,
col,
click=0;
list=document.getElementById('list');
btn=document.getElementById('btn');
btn.onclick=function(){

value=document.getElementById("input").value;
console.log(value);
var li=document.createElement('li');

li.innerHTML=value;
list.appendChild(li);
li.classList.Name='li'
li.id+=click;


col=todo.push(value);
console.log(todo);
console.log(col);
click++;

}
}
if (list.hasChildNodes)
{

	li=document.getElementsByClassName('li');
	list.onclick=function(){

		var target=event.target;
		var t_id=target.id;
		if(target.classList.Name !='li') return;
		target.remove();
		console.log(t_id);
		todo.splice(t_id,1);
		kol++;
		console.log("kol");
		console.log(kol);
	}

	

}

	