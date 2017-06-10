<?php
/**
 * Created by PhpStorm.
 * User: 汤梓寅
 * Date: 2017/1/27
 * Time: 15:01
 */
if(!isset($_GET['aftw'])&&$_GET['aftw'])die('something error');
$aftw=$_GET['aftw'];
$conn=mysqli_connect('localhost','root','','office');
if($conn){
    mysqli_query($conn,"SELECT * FROM users");
    $result=mysqli_query($conn,"SELECT * FROM `users` WHERE `aftw` LIKE '$aftw'");
    if($result){
        $result_arr=mysqli_fetch_assoc($result);
        echo"留言成功";
    }
    else echo"留言失败";
}
else{echo '连接错误';}
header('Refresh:2,Url=index.html');
echo '<br>3s 后跳转';
die;