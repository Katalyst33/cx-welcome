<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/index.php">
                <img src="/assets/img/logo.png" style="height: 40px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item">
                        <a class="nav-link disabled"  href="#">Buy Bitcoin <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Sell Bitcoin <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Post a Trade <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle disabled" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Help
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">About us</a>
                            <a class="dropdown-item" href="#"> How to buy Bitcoins</a>

                        </div>
                    </li>


                </ul>

            </div>
        </div>
    </nav>

</template>




<style scoped>

    #app{

        border-bottom: #21c0f7 solid 5px;


    }




    .dropdown-menu{
        border: #121d33 solid thick;
    }

    .dropdown-item:hover {
        background-color: #152039;
    }

    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        color: #0794c4;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: #ffffff;
    }
</style>


<script>
    // import buttonBac from  './buttons/buttonBac'
    // import siteInfo from '../../db/siteInfo'

    export default {
        name: 'app',

        components:{
        },
        data() {

            return {
                myJson: siteInfo
            }
        }
    }

</script>



