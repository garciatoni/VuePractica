<template>
<!-- Header -->
    <section id="header">
        <div class="container">
            <div class="row">
                <!-- Logo -->
                <h1 id="logo" class="col-2">
                    <router-link to="/">
                        <span class="cercle">🎮</span> STIM
                    </router-link>
                </h1>
                <!-- Menu 1 -->
                <div class="col-6">
                    <nav id="nav1">
                        <router-link to="/Store">STORE</router-link>
                        <a href="#">COMMUNITY</a>
                        <a href="#">ABBOUT</a>
                        <a href="#">SUPPORT</a>
                    </nav>
                </div>
                <!-- Menu 2 -->
                <div class="col-4">
                    <nav id="nav2" class="right">
                        <a id="install" href="#" class="button">📁 Install Stim</a>
                        <router-link to="/loging">Loging</router-link>
                        <select id="language" v-model="idioma" name="idioma" @change="canvi">
                            <!-- V-MODEL= PARA SELECIONAR EL 'VALUE DEL IDIOMA' -->
                            <option selected disabled>Language</option>
                            <option value="ca">🇦🇩 CA</option>
                            <option value="es">🇪🇸 ES</option>
                            <option value="en">🇬🇧 EN</option>
                        </select>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script> 
//IMPORTAR SIEMPRE EL REF PARA HACER INTERACTIVA LA PAGINA
import { onMounted, ref }  from "vue";

export default {
    setup(){
        var idioma= ref("");
        //CUANDO LA PAGINA ESTA CARGADA, BUSCA SI HAY UN LOCAL STORGAE IDIOMA Y HACE QUE EL VALUE DE IDIOMA SEA ESE VALOR.
        onMounted(()=>{
            idioma.value = localStorage.getItem('idioma');
        })
        //FUNCION QUE RECOJE EL VALOR DE IDIOMA Y LO GUARDA EN EL LOCAL STORAGE
        const canvi = () => {
            console.log(idioma.value);
            localStorage.setItem('idioma', idioma.value);  
        };
        return {
            canvi,
            idioma
        }
    }
}
</script>

<style scoped>

#header {
    margin: 20px 0;
}

    #header .cercle {
        background-color: rgb(184, 182, 180);
        border-radius: 50%;
        padding: 5px;
    }

    #header a:hover .cercle {
        background-color: rgb(255, 255, 255);
    }

    #header #nav1 {
        margin-top: 24px;
    }

    #header #nav2 {
        margin-top: 10px;
        font-size: 0.9em;
    }

    #header #nav1 a,
    #header #nav2 a {
        margin-right: 5px;
    }
    
</style>