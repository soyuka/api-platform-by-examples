<?php 

chdir('/src/api-platform-light');
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('log_errors', 1);

require './vendor/autoload.php';
require './index.php';

// //Get a list of file paths using the glob function.
// $fileList = glob('/src/*');
//  
// //Loop through the array that glob returned.
// foreach($fileList as $filename){
//    //Simply print them out onto the screen.
//    echo $filename, '<br>'; 
// }
