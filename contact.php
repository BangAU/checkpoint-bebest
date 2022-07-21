<?php 

require("config.php");
//check for isset and post data here and create a selection array
$firstname = (isset($_POST['firstname']) && ($_POST['firstname'] != "NULL")) ? $_POST['firstname'] : "";
$lastname = (isset($_POST['lastname']) && ($_POST['lastname'] != "NULL")) ? $_POST['lastname'] : "";
$email = (isset($_POST['email']) && ($_POST['email'] != "NULL")) ? $_POST['email'] : "";
$businessname = (isset($_POST['businessname']) && ($_POST['businessname'] != "NULL")) ? $_POST['businessname'] : "";
$phone = (isset($_POST['phone']) && ($_POST['phone'] != "NULL")) ? $_POST['phone'] : "";
//insert date
$insert_date = date("Y-m-d H:i:s");

$form_check = $_POST['form_check'];


if(isset($form_check) && $form_check == 1) {

    // execute the query to write to database
    $query = "INSERT INTO contact (firstname,lastname, email, businessname, phone, insert_date) VALUES ('".$firstname."','".$lastname."','".$email."', '".$businessname."', '".$phone."','".$insert_date."')";
    $res= $conn->query($query);
    if($res){
        
        //sending email here
        // format the data to be sent
        $all_data_html = '<strong>The following person has just submitted the form on:  https://www.checkpoint-smbsecurity.com/dickerdata</strong><br/><br/>'.
        '<table border=1>
        <tr><td>First Name</td><td>'.$firstname.'</td></tr>
        <tr><td>Last Name</td><td>'.$lastname.'</td></tr>
        <tr><td>Email</td><td>'.$email.'</td></tr>
        <tr><td>Company</td><td>'.$businessname.'</td></tr>
        <tr><td>Phone</td><td>'.$phone.'</td></tr>
        <tr><td>Form Fill Date</td><td>'.$insert_date.'</td></tr>
        </table>';

        $headers = "Reply-To: No Reply <no-reply@checkpoint-bebest.com>\r\n";
        $headers .= "Return-Path: No Reply <no-reply@checkpoint-bebest.com>\r\n";
        $headers .= "From: No Reply <no-reply@checkpoint-bebest.com>\r\n";
        $headers .= "Organization: Qbit\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        $headers .= "X-Priority: 3\r\n";
        $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
        $to = 'dev@bang.com.au';
        $subject = 'Form Submit : Check Point';
        $subjectSender = "";
        $headers .= "X-Mailer: PHP". phpversion() ."\r\n"; 

        if(mail($to, $subject, $all_data_html, $headers)){
            echo "email sent";
        }
        else {
            echo"email failed";
        }
    }
    else{
        echo 0;
    }
}
else{
    print_r("You can't access this page directly, please go <a href=".$siteURL.">back</a>");
}

?>

