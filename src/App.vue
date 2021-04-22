<template>
  <router-view/>
</template>

<script>

// import { onMounted }  from "vue";
// import { useStore} from "vuex";

export default {
    
    setup(){
        // let store = useStore();
      

        // onMounted(async ()=>{
        //    let data = await fetch('https://script.google.com/macros/s/AKfycbzZ2N-8TdxAtDtOrWp9VyPdVJuOdCtMO9APLyOj1GnjTJzz_Er9TpVi6Cf6MF49elHn/exec?action=games.search')
        //     let response = await data.json();
        //     store.commit("SetGames", response.data);   
        //     console.log('entra')    
        // })

  

        return{
          

        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
