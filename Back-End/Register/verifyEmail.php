<?php

//Call Function
verifyEmail();

//Functions
function verifyEmail() {
    include_once '../Config/connection.php';//Add connection.php

    $sqlverifyEmail = 'SELECT us_id, us_email FROM users';
    $gVerifyEmail = $pdo->prepare($sqlverifyEmail);
    $gVerifyEmail->execute();

    $resultVerifyEmail = $gVerifyEmail->fetchAll(PDO::FETCH_OBJ);
    
    echo json_encode($resultVerifyEmail);
}
