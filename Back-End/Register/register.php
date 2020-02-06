<?php
if(!isset($_POST['usName']) && !isset($_POST['usLastName'])) {
    die();
    if(!isset($_POST['usEmail']) && !isset($_POST['usPassword'])) {
        die();
    }
}
if($_POST) {
    $name = $_POST['usName'];
    $lastName = $_POST['usLastName'];
    $email = $_POST['usEmail'];
    $password = $_POST['usPassword'];
    $usVerifyPassword = $_POST['usVerifyPassword'];

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    if(password_verify($usVerifyPassword, $passwordHash)) {
        include_once '../Config/connection.php';
    }
    else {
        die();
    }

}