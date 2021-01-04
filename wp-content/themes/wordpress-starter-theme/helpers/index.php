<?php
    function VarToJS ($vars) {
        if(gettype($vars) !== "array") return; ?>
        <script type="application/javascript">
        <?php foreach ($vars as $key => $value): ?>
            <?php
                if (gettype($value) === "resource" || gettype($value) === "unknown type") continue;
                elseif (gettype($value) === "array" || gettype($value) === "object") {
                $str = json_encode($value);
            ?>
                var <?php echo $key?> = <?php echo $str;?>;
            <?php } elseif(gettype($value) === "boolean" ||
                           gettype($value) === "integer" ||
                           gettype($value) === "double" ||
                           gettype($value) === "NULL" ) {?>
                var <?php echo $key?> = <?php echo $value;?>;
            <?php } elseif(gettype($value) === "string") {?>
                var <?php echo $key;?> = "<?php echo $value;?>";
            <?php } ?>
        <?php endforeach; ?>
        </script>
        <?php
    }
?>
