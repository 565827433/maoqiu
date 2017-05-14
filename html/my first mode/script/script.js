window.onload=function(){
    var container=document.getElementById('container');
    var list=document.getElementById('list');
    var buttons=document.getElementById('buttons').getElementsByTagName('span');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var index=1;
    var animated=false;
    var timer;
    next.onclick=function(){
        list.style.left=parseInt(list.style.left)-1200+'px';
    }
}