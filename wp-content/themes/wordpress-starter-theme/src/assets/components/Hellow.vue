<template>
    <span>Hello, world</span>
</template>

<script>
    export default {
        mounted() {
            console.log(process.env.NODE_ENV);
        }
    }
</script>
