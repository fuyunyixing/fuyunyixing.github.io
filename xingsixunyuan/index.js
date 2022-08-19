ml(true); //调用ml函数  注:传参是否需要左右指示  默认false
function ml(indicator) {
    var oMlBox = document.getElementById('mlBox'); //获取id:mlBox
    var oMlImg = document.getElementById('mlImg'); //获取id:mlImg
    var oMlSpan = document.getElementById('mlSpan'); //获取id:mlSpan
    var aSpan = oMlSpan.getElementsByTagName('span'); //获取id:mlSpan里面的span标签
    var aImg = oMlImg.getElementsByTagName('img'); //获取id:mlImg里面的img标签
    var oMlLeft = document.getElementById('mlLeft'); //获取id:mlLeft
    var oMlRight = document.getElementById('mlRight'); //获取id:mlRight
    var u = 0; //当前照片位置
    var shut = null; //定时器的名字
    function f1() {
        for (var i = 0; i < aSpan.length; i++) { //循环id:mlSpan里面的span标签
            aSpan[i].id = ''; //让span标签的id等于空
            aImg[i].id = ''; //让id:mlImg里面img标签id等空
        }
        aSpan[u].id = 'mlOn'; //当前位置的span标签id等于mlOn
        aImg[u].id = 'mlShow'; //当前位置的img标签id等于mlShow
    }
    for (var f = 0; f < aSpan.length; f++) { //循环id:mlSpan里面的span标签
        aSpan[f].index = f; //span标签第f个的index等于f
        aSpan[f].onclick = function() { //点击span标签  注:照片下面的三个点
            u = this.index; //当前位置等于当前span标签index的位置
            f1(); //调用f1函数
        }
    }
    oMlBox.onmousemove = function() { //鼠标悬浮id:mlBox
        clearInterval(shut); //关闭定时器
        if (indicator) { //是否显示左右指示  注:调用ml函数传参
            oMlLeft.style.display = 'block'; //显示左指示
            oMlRight.style.display = 'block'; //显示右指示
            oMlRight.onclick = function() { //点击右指示
                u++; //当前位置加一
                if (u >= aImg.length) { //当前位置大于照片的数量就等于0
                    u = 0;
                }
                f1(); //调用f1函数
            };
            oMlLeft.onclick = function() { //点击左指示
                u--; //当前位置减一
                if (u < 0) { //当前位置小于0时就让当前位置等于照片数量减一
                    u = aImg.length - 1; //注:因为计算机从零开始数所以要减一
                }
                f1(); //调用f1函数
            };
        } else {
            oMlLeft.style.display = 'none'; //左指示消失
            oMlRight.style.display = 'none'; //右指示消失
        }
    };
    oMlBox.onmouseout = function() { //当鼠标移出id:mlBox
        f2(); //调用f2函数
        oMlLeft.style.display = 'none'; //左指示消失
        oMlRight.style.display = 'none'; //右指示消失
    };

    function f2() {
        shut = setInterval(function() { //定时器
            u++; //每3秒当前位置加一
            if (u >= aImg.length) { //当前位置大于等于照片的数量当前位置等于0
                u = 0;
            }
            f1(); //调用f1函数
        }, 3000);
    }
    f2(); //调用f2函数
}