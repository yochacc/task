<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient_email = "mrpanda2015@mail.ru"; // Адрес получателя
    $subject = "Данные и файл с веб-формы"; // Тема письма

    // Получение данных из формы
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $last_name = htmlspecialchars($_POST["last_name"]);
    $number = htmlspecialchars ($_POST["Number"]);

    // Загрузка файла
    $file_name = $_FILES["attachment"]["name"];
    $file_tmp_name = $_FILES["attachment"]["tmp_name"];
    $file_size = $_FILES["attachment"]["size"]; // Получаем размер файла
    // Формирование заголовков для письма
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

    // Формирование тела письма
    $message_body = "--boundary\r\n";
    $message_body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $message_body .= "Content-Transfer-Encoding: 8bit\r\n";
    $message_body .= "\r\n";
    $message_body .= "Имя пользователя: $name\r\n";
    $message_body .= "ОТ Email: $email\r\n";
    $message_body .= "Фамилия: $last_name\r\n";
    $message_body .= "--boundary\r\n";
    $message_body .= "Content-Type: application/octet-stream; name=\"$file_name\"\r\n";
    $message_body .= "Content-Transfer-Encoding: base64\r\n";
    $message_body .= "Content-Disposition: attachment\r\n";
    $message_body .= "\r\n";
    $message_body .= chunk_split(base64_encode(file_get_contents($file_tmp_name))) . "\r\n";
    $message_body .= "--boundary--";

    if ($file_size > 50 * 1024 * 1024) {
        echo '<script>alert( "Ошибка: Размер файла превышает 50 МБ.")</script>';
        exit(); // Прерываем выполнение скрипта
    }


    // Отправка письма
    if (mail($recipient_email, $subject, $message_body, $headers)) {
        echo '<script>alert("Письмо отправлено успешно!"); window.location.href = "/";</script>';
        exit();
    } else {
        echo '<script>alert("Произошла ошибка!"); window.location.href = "/";</script>';

    }
}


?>