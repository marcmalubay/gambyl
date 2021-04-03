<?php

  $player_name = filter_var ($_POST[player_name], FILTER_SANITIZE_STRING);
  $player_score = (int)$_POST[player_score];
 
  $player_array = array("name"=>$player_name, "score"=>$player_score);


  $highscoreJSON = file_get_contents("scores.json");
  $highscore_array = json_decode($highscoreJSON, true);


 
  $key = 0;
  $highscores = array();


  if ($player_score > $highscore_array[9][score]) {
    foreach($highscore_array as $k => $value) {
      $score = $value[score];

  
      if ($score >= $player_score) {
        $highscores[$k] = $value;
      }

      // The player has beat this score
      if ($score < $player_score) {

          $key = $k;  

          $highscores[$k] = $player_array;
  
          for ($i = $key; $i < 9; $i++) {
            $highscores[$i + 1] = $highscore_array[$i];
          }
          break; 
      } 
    }


    $jsonscores = json_encode($highscores);
    file_put_contents('scores.json', $jsonscores);

    echo "gang!";
  }

  else {
 
    echo "No high score";
  }
?>