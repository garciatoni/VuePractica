<template>
    <section id="game">
        <div class="container">
            <div>
                <h1>{{game.title}}</h1>
            </div>
            <div>
                <img alt="Titulo" :src=game.cover>
            </div>
            <div>
                {{game.date}}, 
                {{game.price}},
                <div>
                    <span v-if="game.platforms.includes('win')" class="platform win"><img src="https://techgage.com/wp-content/uploads/2015/08/Windows-10-Small-Logo.png" alt="windows logo"></span>
                    <span v-if="game.platforms.includes('mac')" class="platform mac"> <img src="https://cdn.osxdaily.com/wp-content/uploads/2013/07/apple-logo.gif" alt="mac logo"></span>
                    <span v-if="game.platforms.includes('linux')" class="platform linux"><img src="http://pngimg.com/uploads/linux/linux_PNG1.png" alt="linux logo"></span>
                </div>
            </div>
        </div>
    
    </section>
</template>
    <!-- <p>{{ $route.params.id }}</p> -->
<script>

//import { onMounted, ref, computed }  from "vue";
import { useStore} from "vuex";
import { useRoute} from 'vue-router';

export default {
    
    setup(){

        let store = useStore();
        let ruta = useRoute();

        let id_game = ruta.params.id;
        let id = id_game -1;
        let games = store.state.games;

        let game = games[id];

        console.log(game);



        return{
            game

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
    .mac{
        color: white;
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
</style>