<template>
    <section>
        <div class="container py-5">
            <h1 class="text-center"> Buy and sell bitcoin using over 300 payment options.</h1>
            <p class="text-center">
                Trade directly with other people just like you!</p>
            <div class="row">
                <div class="col-12">
                    <img class="img-fluid" src="/assets/img/devices/laptop-and-iphone.png">
                </div>
            </div>
        </div>
        <div class="container" id="features">
            <h1 class="text-center text-primary">Features</h1>
            <div class="row">
                <div v-for="feature in features" class="col-md-4 py-3">
                    <div class="row">
                        <div class="col-2 px-2">
                            <img class="img-fluid shadow-sm rounded-circle" v-bind:src="feature.image"
                                 alt="...">
                        </div>
                        <div class="col-10">
                            <h3 class="text-capitalize">{{feature.heading}}</h3>
                            <p>{{feature.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<script>
    export default {

        data() {
            return {
                features: [
                    {
                        image: '/assets/img/icon/01-exchange.svg',
                        heading: 'Buy bitcoin online',
                        text: 'Buy bitcoin on Chainzxchange from other people in real time. Trading occurs online via live chat.'
                    },
                    {
                        image: '/assets/img/icon/02-exchange.svg',
                        heading: 'Sell bitcoin',
                        text: 'Vendors on Chainzxchange can sell bitcoin for numerous payment methods and have the freedom to set their own rates.'
                    },
                    {
                        image: '/assets/img/icon/03-bank.svg',
                        heading: 'Trade with secure escrow',
                        text: 'When you engage in a trade, bitcoin is held in our enterprise escrow system until the trade has successfully completed.'
                    },
                    {
                        image: '/assets/img/icon/04-trophy.svg',
                        heading: 'Build your reputation',
                        text: 'We\'ve built a feedback and reputation system that enables you to conduct business with trusted and experienced peers'
                    },
                    {
                        image: '/assets/img/icon/05-wallet.svg',
                        heading: 'Get a free wallet',
                        text: 'Our wallet is maintained by Blockchain, the leading provider of secure bitcoin wallets. It\'s secure and directly integrated onto our platform.'
                    },
                    {
                        image: '/assets/img/icon/06-global.svg',
                        heading: 'Local and Global',
                        text: 'Exchange assets with traders within you location, or Exchange assets with traders globally.\n' +
                            '\n'
                    },
                ]
            }
        },

    }
</script>

<style scoped>

</style>
