<template>
  <div class="about">
    <div v-if="pokemon">
    <h3 class="btn">{{pokemon.name}}</h3>//for pokemon name
    <div class="pic">
      <img :src="pokemon.sprites.other['official-artwork'].front_default">//for pokemon image
    </div>
    </div>
    </div>
    <h1>This is an about page</h1>
    <h3>{{$route.params.slug}}</h3>
    <h3 class="type">
      Types
    </h3>
    <div v-for="(type,idx) in pokemon.types" :key="idx">
      <h4 class="type1">{{type.type.name}}</h4>
    </div>

  
</template>
<script>
  import {useRoute} from "vue-router";
  import {reactive ,toRefs} from "vue";
  export default {
    setup(){
      const route = useRoute();
      const pokemon =reactive({
        pokemon: null
      })
      fetch('https://pokeapi.co/api/v2/pokemon/1/${route.params.slug}/')
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        state.pokemon = data;
      })
      return{...toRefs(state)}
    }
  }
</script>
