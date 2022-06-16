<?php
$_POST = json_decode(file_get_contents("php://input"), true); //php не умеет работать с данныеми json. всё что приходит от клиента декадируем от json и тогда можно рабоать
echo var_dump($_POST);