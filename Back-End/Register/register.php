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

    /*  */
    if(password_verify($usVerifyPassword, $passwordHash)) {
        include_once '../Config/connection.php';
        $sqlInsertUser = 'INSERT INTO users (us_name,us_lastname,us_email,us_password) VALUES(?,?,?,?)';
        $sentenceInsertUser = $pdo->prepare($sqlInsertUser);
        $sentenceInsertUser->execute([$name,$lastName,$email,$passwordHash]);
        
        header('location:../../Front-End/Login/login.html');
    }
    else {
        die();
    }

}