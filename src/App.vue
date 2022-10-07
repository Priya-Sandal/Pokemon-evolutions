<template>
  <div >
    <router-link  class="head" to="/">Pokemon</router-link> 
  </div>
  
  <router-view/>
</template>

<style>
.head
{
  color: red;
  justify-content: center;
  display: flex;
  font-size: 50px;
  
}
</style>
