<template>
  <div class="home">
    <jumboArea/>
    <featureArea/>
    <subArea/>

  </div>
</template>

<script>

  import jumboArea from './home/jumboArea'
  import featureArea from './home/featureArea';
  import subArea from './home/subArea';
  export default {
    components:{
      jumboArea,
      featureArea,
      subArea
    }
  }
</script>
