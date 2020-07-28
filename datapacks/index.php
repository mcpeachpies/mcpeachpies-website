<?php include("../include/start.php") ?>

<?php 
if (false !== strpos($_SERVER["REQUEST_URI"], "?")) {
	include("./single.php");
} else {
	include("./list.php");
}
?>

<?php include("../include/end.php") ?>