<?php
// Redirect to the homepage using a relative path so it works on Heroku's router
header('Location: Homepage.html', true, 302);
exit;
?>