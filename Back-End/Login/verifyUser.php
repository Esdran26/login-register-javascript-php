<?php
include_once '../Config/connection.php';

$sqlVerifyUser = 'SELECT us_email, us_password FROM users';
$sentenceVerifyUser = $pdo->prepare($sqlVerifyUser);
$sentenceVerifyUser->execute();

$resultSentenceVerifyUser = $sentenceVerifyUser->fetchAll(PDO::FETCH_OBJ);

echo json_encode($resultSentenceVerifyUser);