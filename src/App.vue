<template>
    <div id="app">
        <NavBar/>
        <router-view/>
        <footerArea/>
    </div>
</template>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

    html, body {
        font-family: 'Nunito', sans-serif;

        /*remove horizontal scroll bar*/
        max-width: 100%;
        overflow-x: hidden;

    }

    #app {
        font-family: 'Nunito', sans-serif;

    }

</style>




