<!DOCTYPE html>
<html lang="eng">
<body>
<label>Some Text </label><br>
<input type= text id="some_text" onchange="display_text()"><br>

<script>
    function display_text() {
        let a = "Привет, ";
        let h = document.getElementById("some_text").value;
        let j = a + h + "!";
        document.getElementById("tag").innerHTML = j;
        
    }

</script>

<p id="tag"></p>

</body>
</html>
