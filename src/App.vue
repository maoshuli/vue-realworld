<template>
    <div id="app" class="app">
        <TheHeader></TheHeader>
        <router-view/>
    </div>
</template>

<script>
    import TheHeader from "@/components/TheHeader";

    export default {
        name: "App",
        components: {
            TheHeader
        }
    }
</script>

<style lang="scss">
    html, body {
        margin: 0;
        height: 100%;
    }
    .content {
        margin: 0 auto;
        width: 1110px;
    }
</style>
