<?php
    $nume = $_POST['nume'];
    $prenume = $_POST['prenume'];
    $email = $_POST['email'];
    $mesaj = $_POST['mesaj'];
    // database connection

    $conn = new mysqli('localhost','root','','mysite');
    if($conn->connect_error){
        die('Connection Failed  : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(nume, prenume, email, mesaj),
        values(?,?,?,?)");
        $stmt->bind_param("ssss",$nume, $prenume, $email, $mesaj);
        $stmt->execute();
        echo "registration successfull";
        $stmt->close();
        $conn->close();
    }

?>