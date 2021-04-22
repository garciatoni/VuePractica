<template>
    <section id="content">
    <div class="container">
                <div class="row">
                    <!-- Main Content -->
                    <div id="main" class="col-9">
                        <section id="searchbar" class="row">
                            <div id="search" class="col-7">
                                <form  @submit.prevent="Buscar">
                                    <input v-model="busqueda" name="search">
                                    <button name="submit">Search</button>
                                </form>

                            </div>
                            <div id="sort" class="col-5">
                                <div class="right">
                                    <label for="criteria">Sort by</label>
                                    <select @change="Asc" name="criteria">
                                        <option selected disabled>---</option>
                                        <option class="asc" value="asc">Price asc</option>
                                        <option class="desc" value="desc">Price desc</option>
                                    </select>
                                </div>
                            </div>
                        </section>
                        <!-- <section id="messages">
                            JOCS STIM
                        </section> -->
                        <section id="results">
                            <ul>
                                <li v-for="game in juegos" :key="game.id" class="row">
                                    <div class="col-2 cover">
                                        <p><img alt="TITLE" :src=game.cover></p>                                    
                                    </div>
                                    <div class="col-3 title">
                                        <router-link :to="`/game/${game.id}`">{{game.title}}</router-link>
                                        <p>
                                            <span v-if="game.platforms.includes('win')" class="platform win"><img src="https://techgage.com/wp-content/uploads/2015/08/Windows-10-Small-Logo.png" alt="windows logo"></span>
                                            <span v-if="game.platforms.includes('mac')" class="platform mac"> <img src="https://cdn.osxdaily.com/wp-content/uploads/2013/07/apple-logo.gif" alt="mac logo"></span>
                                            <span v-if="game.platforms.includes('linux')" class="platform linux"><img src="http://pngimg.com/uploads/linux/linux_PNG1.png" alt="linux logo"></span>
                                        </p>
                                    </div>
                                    <div class="col-2 date">
                                        <p>{{game.date}}</p>
                                    </div>
                                    <div class="col-1 discount">
                                        <p v-if="game.discount != ''" ><span class="box">{{game.discount}}%</span></p>
                                    </div>
                                    <div class="col-3 price">
                                        <p v-if="game.discount != '' " class="old">{{game.price}}€</p>
                                        <p v-if="game.price.includes('Free')" class="current">{{game.price}}</p>
                                        <p v-else class="current">{{Descuento(game.discount, game.price)}}€</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section id="paginator" class="row">
                            <div id="page-items" class="col-6">
                                <p>Showing 1-20 of {{games.length}} results</p>
                            </div>
                            <div id="page-index" class="col-6">
                                <ul class="right">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li>...</li>
                                    <li><a href="#">10</a></li>
                                    <li><a href="#">></a></li>
                                </ul>
                            </div> 
                        </section>
                    </div>
                    <div id ="sidebar" class="col-3">
                        <!-- Sidebar -->
                        <section id="fprice" class="block">
                            <header class="block-title">
                                Filter by Price
                            </header>
                            <div class="block-content">
                                Filter config
                            </div>                
                        </section>
                        <section id="fos" class="block">
                            <header class="block-title">
                                Filter by OS
                            </header>
                            <div class="block-content">
                                Filter config
                            </div>
                        </section>
                        <section id="flang" class="block">
                            <header class="block-title">
                                Filter by Language
                            </header>
                            <div class="block-content">
                                Filter config
                            </div>
                        </section>
                    </div>
                </div>
    </div>
    </section>
</template>

<script>
//onMounted, ref, 
import { computed, ref }  from "vue";
import { useStore} from "vuex";

export default {
    
    setup(){

        let store = useStore();
        let games = computed(() => store.state.games);
        
        let juegos = computed(() => {
            return (games.value).filter( game => {
                // console.log(game.title.includes(buscar.value));
                return game.title.toLowerCase().includes(buscar.value.toLowerCase())
            });
        });

        let buscar = ref('');
        let busqueda = ref('');

        const Descuento = (a, b) => {
            let c = a * (-1);
            let d = b * c;
            let e =  b-d;
            return e.toFixed(2)
        }

        const Buscar = () => {
            buscar.value = busqueda.value;
        }

        const Asc = () =>{
            let ordenAsc = [];
            let ultimoJuego;
            (juegos.value).forEach(juego => {
                if (ordenAsc.length == 0){
                    // console.log(juego);
                    ordenAsc.push(juego);
                    ultimoJuego = juego;
                }else{
                    console.log(ultimoJuego);
                    console.log(juego);
                    let id = ordenAsc.indexOf(ultimoJuego.id);
                    
                    console.log(id);
                    if(ultimoJuego < juego){
                        ordenAsc.splice(id+1, 0, juego);
                    }else if (ultimoJuego > juego){
                        ordenAsc.splice(id-1, 0, juego);
                    }else{
                        ordenAsc.unshift(juego);
                    }
                    ultimoJuego = juego;
                }
            });
            // console.log('oko')
            // console.log(ordenAsc);
            juegos.value = ordenAsc;
            // console.log(juegos.value);
        }

        return{
            games,
            Descuento,
            Buscar,
            busqueda,
            juegos,
            Asc
        }
    }
}
</script>

<style>
#main {
    padding-right: 5px;
}

    #main section,
    #results li {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 6px;
        margin-bottom: 5px;
    }

    #searchbar {
        background-color: rgba(0, 0, 0, 0.4);
    }

    #messages {
        color: rgb(250, 250, 210);
        padding: 10px 6px !important;
    }

    #results {
        background: none !important;
        padding: 0 !important;
    }

        #results ul {
            margin: 0;
            padding: 0;
            font-size: 0.8em;
        }

            #results li {
                padding: 0;
            }
                .cover p {
                    height: 80px;
                    margin: 0;
                    overflow: hidden;
                }

                .title {
                    padding-left: 10px;
                }

                .platform {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background-repeat: no-repeat;
                    opacity: 0.3;
                }

                .platform.win {
                    background-image: url("https://techgage.com/wp-content/uploads/2015/08/Windows-10-Small-Logo.png");
                }
                .platform.mac {
                    background-image: url("https://store.steampowered.com/public/images/v6/icon_platform_mac.png");
                }
                .platform.linux {
                    background-image: url("https://store.steampowered.com/public/images/v6/icon_platform_linux.png");
                }

                .discount .box {
                    color: #8bc53f;
                    background-color: #4c6b22;            
                }

                .price .old {
                    text-decoration:line-through;
                }
    
    #paginator {
        font-size: 0.9em;
    }

        #page-index li {
            display: inline;
            margin-left: 5px;
        }
#sidebar {
    padding-left: 5px;
}

    .block {
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 20px;
    }
        .block .block-title {
            background-color: rgba(255, 255, 255, 0.1);
        }
        .block .block-title,
        .block .block-content {
            padding: 6px;
        }
.asc{
    color: black;
}
.desc{
    color: black;
}
</style>