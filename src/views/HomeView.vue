<template>
  
  <div class="add" >
    v-for="(pokemon, idx) in pokemons" :key="idx">
       <router-link :to="`/about/${urlIdLookup[pokemon.name]}`">
       </router-link> 
      {{pokemon.name}}
    </div>

  <!-- <div class="home">
   <h3>hello </h3>
  {{pokemons}}
  </div> -->
  
</template>

<script>
// @ is an alias to /src
import {reactive, toRefs} from "vue";

export default {
  name: 'Home',
  setup(){
   const state = reactive({
    pokemons: [],
    urlIdLookup: {},
    text:""
   })




    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((res)=> res.json())
    .then((data)=>{
    //  console.log(data.name)
    console.log(data.results)
     state.pokemons = data.results;
    
     state.urlIdLookup = data.results.reduce((acc,cur,idx)=>
     
     acc = {...acc, [cur.name]:idx}
     ,{})
    })
    return {...toRefs(state)}
  }
}
</script>





