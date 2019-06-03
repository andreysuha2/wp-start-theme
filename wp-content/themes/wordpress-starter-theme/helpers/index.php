<?php
    function VarToJS ($vars) {
        ;
        if(gettype($vars) !== "array") return;?>
        <script type="application/javascript">
        <?php foreach ($vars as $key => $value): ?>
            var <?php echo $key?> = "<?php echo $value?>";
        <?php endforeach; ?>
        </script>
        <?php
    }
?>
