<table cellpadding="20">
<tbody>

<tr>
<td>
<img src="./content/skin_viewer/assets/body.php?<?php if ($u == true) {echo '&u='.$u.'';} if ($t == true) {echo '&t='.$t.'';} if ($a == true) {echo '&a='.$a.'';} ?>" />
</td>

<td>
<span class="h1"><?php if ($u == true) { echo $u; } else { if ($a == true) { echo 'Alex'; } else { echo 'Steve'; } } ?></span>
</td>

<td>
<a href="<?php if ($u == true ) {echo 'https://minotar.net/skin/'.$u.'.png'; } else { if ($a == true) { echo './content/skin_viewer/assets/alex.png'; } elseif ($a == false) { echo './content/skin_viewer/assets/steve.png'; }} ?>" target="_blank">
<img src="./content/skin_viewer/assets/skin.php<?php if ($u == true) {echo '?u='.$u.'';} if ($u == true && $a == true) { echo '&'; } elseif ($u == false && $a == true) { echo '?';} if ($a == true) {echo 'a='.$a.'';} ?>" />
</a>
</td>

</tr>

<tr>
<td>
<img src="./content/skin_viewer/assets/head.php?s=200<?php if ($u == true) {echo '&u='.$u.'';} if ($t == true) {echo '&t='.$t.'';} if ($a == true) {echo '&a='.$a.'';} ?>" />
</td>

<td colspan="2">
<img src="./content/skin_viewer/assets/bodyFull.php?<?php if ($u == true) {echo '&u='.$u.'';} if ($t == true) {echo '&t='.$t.'';} if ($a == true) {echo '&a='.$a.'';} ?>" />
</td>

</tr>
</tbody>
</table>
