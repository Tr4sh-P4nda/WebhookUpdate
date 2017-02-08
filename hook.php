<?php
  //Hard reset and pull
  echo shell_exec( 'cd /path/to/local/repo && sudo git reset --hard HEAD && sudo git pull' );
  //Write current date to update file
  $myfile = fopen("lastupdate.txt", "w") or die("Unable to open file!");
  $txt = time ();
  fwrite($myfile, $txt);
  fclose($myfile);
?>