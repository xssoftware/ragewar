<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

require('config.php');

function respond_with_error($message = '') {
  $response = array('error' => 1, $message);
  respond($response);
}

function respond_success($message = '') {
  $response = array('error' => 0, $message);
  respond($response);
}

function respond($output) {
  header('Content-Type: application/json');
  echo json_encode($output);
  exit(1);
}

if (isset($_POST['name']) && isset($_POST['email'])) {
  // Connect to mysql
  $link = mysql_connect('localhost', DB_USER, DB_PASS); // This is an open source project do not set username and password here
  if(!$link || mysql_error()) {
    respond_with_error();
  }

  mysql_select_db(DB_NAME);

  if(mysql_error()) {
    respond_with_error();
  }

  $name = mysql_real_escape_string($_POST['name']);
  $email = mysql_real_escape_string($_POST['email']);

  if ($name == '' || $email == '') {
    respond_with_error();
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond_with_error();
  }

  $query = 'INSERT INTO subscriptions (name, email, date)
            VALUES (\'' . $name . '\', \'' . $email . '\', NOW())';
  mysql_query($query);

  if(mysql_error()) {
    respond_with_error();
  }

  respond_success();
}

respond_with_error();
?>
