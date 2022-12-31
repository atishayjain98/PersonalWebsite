<?php
 
// Email address verification
function isEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
 
if($_POST) {
 
    // Enter the email where you want to receive the message
    $emailTo = 'atishayjain259@gmail.com';
 
    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['subject']));
    $message = addslashes(trim($_POST['message']));
    $antispam = addslashes(trim($_POST['antispam']));
 
    $array = array('emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '', 'antispamMessage' => '');
 
    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($subject == '') {
        $array['subjectMessage'] = 'Empty subject!';
    }
    if($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
    if($antispam != '12') {
        $array['antispamMessage'] = 'Wrong antispam answer!';
    }
    if(isEmail($clientEmail) && $subject != '' && $message != '' && $antispam == '12') {
        // Send email
        $headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
        mail($emailTo, $subject . " (bootstrap contact form tutorial)", $message, $headers);
    }
 
    echo json_encode($array);
 
}
 
?>

// ---------------------------------------------

<?php
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate the form data
  if (empty($name) || empty($email) || empty($message)) {
    // Return an error if any of the fields are empty
    echo "Error: All fields are required";
    exit;
  }

  // Send the email
  $to = "recipient@example.com";
  $subject = "Contact form submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  mail($to, $subject, $body);

  // Return a success message
  echo "Success: Your message has been sent";
?>


