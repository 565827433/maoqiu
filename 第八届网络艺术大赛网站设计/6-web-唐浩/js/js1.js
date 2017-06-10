/**
 * Created by hasee on 2017/5/20.
 */
window.onload=function () {
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 0;
    var lastindex = 0;
    var timer;
    var fasion = false;

    function showbutton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        buttons[index].className = "on";
    }

    function animate(thepx) {
        fasion = true;
        if (thepx == 0) {
            return;
        }
        newleft = parseInt(list.style.left) + thepx;
        var time = 200;  //位移时间
        var interval = 5;   //位移间隔时间
        var speed = thepx / (time / interval);   //每次位移量
        function go() {
            if ((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            } else {
                list.style.left = newleft + 'px';
                if (newleft > -1200) {
                    list.style.left = -6000 + 'px';
                }
                if (newleft < -6000) {
                    list.style.left = -1200 + 'px';
                }
                fasion = false;
            }
        }

        go();
    }

    prev.onclick = function () {
        if (fasion == false) {
            animate(1200);
            index--;
            if (index < 0) {
                index = 4;
            }
            showbutton();
        }
    }
    next.onclick = function () {
        if (fasion == false) {
            animate(-1200);
            index++;
            if (index > 4) {
                index = 0;
            }
            showbutton();
        }
    }

    for (var i = 0; i < buttons.length; i++) {
        if (fasion == false) {
            buttons[i].onclick = function () {
                if (this.className == "on") {
                    return;
                }
                lastindex = index;
                var myindex = parseInt(this.getAttribute('index'));
                index = myindex;
                buttons[index].className = "on";
                animate(-1200 * (index - lastindex));
                showbutton();
            }
        }
    }
    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 2000);
    }

    function stop() {
        clearInterval(timer);
    }

    container.onmouseout = play;
    container.onmouseover = stop;
//
//
//        var denglu1=document.getElementById(denglu1);
//        var login1=document.getElementById(login1);
//
//
//        denglu1.onclick = function () {
//            self.location="../xiaoqing.html";
//        }
}