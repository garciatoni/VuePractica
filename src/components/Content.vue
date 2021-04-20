<template>
  <section id="reloj">
      <h1>HORA</h1>
      <h2 id="tiempo">{{temps}}</h2>
  </section>
</template>

<script>
export default {
    data() {
        return {
            temps: "",
            intervalo : null
        }
     },
    mounted()
    {
        this.intervalo = setInterval(
            () => { 
                var tiempo = new Date();
                var hora = tiempo.getHours();
                var minuto = tiempo.getMinutes()
                var segundo = tiempo.getSeconds()
                
            this.temps = hora + " : " + minuto + " : " + segundo  
            }
        , 1000);
    }
}

</script>

<style scoped>

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
                    background-image: url("https://store.steampowered.com/public/images/v6/icon_platform_win.png?v=3");
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

</style>