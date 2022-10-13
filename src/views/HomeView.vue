 
<template>
  <div class="poke" v-for="(pokemon,idx) in pokemons" :key="idx">
    {{pokemon.name}}
  </div>
  <div class="home">
    <!-- <h3>hello</h3> -->
    <!-- {{pokemons}} -->
    {{name}}
    
    <!-- {{image}} -->
     <!-- <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"> -->
     <img v-bind:src="image">
     <ul>
      <li v-for="element in types">
        {{element.type.name}}
      </li>
     </ul>
  </div>

  <!-- <p ref="state"></p> -->
</template>
  
<script>
import { reactive, toRefs , ref} from 'vue';
// @ is an alias to /src
export default {
  name: 'HomeView',
  setup() {
    const state = reactive({
      pokemons: [],
      urlIdLookup: {},

    })

  let name = ref();
  let image = ref();
  let types = ref([]);
    fetch("https://pokeapi.co/api/v2/pokemon/1")
    fetch("https://pokeapi.co/api/v2/pokemon/2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log(data.name)
        name.value = data.name
        image.value = data.sprites.back_default
        types.value = data.types
        name.value = data.name
        image.value = data.sprites.back_default
        types.value = data.types
        
        
      })
    
    // fetch("https://pokeapi.co/api/v2/pokemon/2")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     name.value = data.name
    //     image.value = data.sprites.back_default
    //     types.value = data.types
    //   })
    fetch("https://pokeapi.co/api/v2/pokemon/3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })

     return {...toRefs(state) ,name,image,types}
  }
  

}
</script>
<style>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  background-color: red;
}
.home{
  margin-top: 50px;
}

</style> 


