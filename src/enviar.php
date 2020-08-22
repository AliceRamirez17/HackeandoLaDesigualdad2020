<?php
    $destino= $_POST["alicemarcelaramirez@gmail.com"];
    $nombre= $_POST["name"];
    $correo= $_POST["email"];
    $contenido = "Nombre" . $nombre . "\nCorreo" . $correo;
    mail($destino, "Contacto", $contenido);
    header("Location:correo.html");
?>