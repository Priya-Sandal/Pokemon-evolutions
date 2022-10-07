<template>
  <div class="home">
  <!-- <h3>hello HelloWorld</h3> -->
  {{pokemons}}
  </div>
</template>

<script>
// @ is an alias to /src
import {reactive} from "vue";

export default {
  name: 'Home',
  setup(){
   const state = reactive({
    pokemons: [],
    urlIdLookup: {}
   })




    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((res)=> res.json())
    .then((data)=>{
     console.log(data)
     state.pokemons = data.results;
     state.urlIdLookup = data.results.reduce((acc,curr, index) =>
     acc = { acc, [curr.name]: index+1},{})
    })
    return {...toRefs(state)}
  }
}
</script>
