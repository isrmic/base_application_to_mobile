
var appcontrol = new Vue({

    el:"#appcontrol",

    data:function(){

        return {

            TitlePage:"Lista De Produtos",
            isOk:false,
            Produtos:{},
            prod:''
        }
    },

    created:function(){
        this.__init__()
    },

    computed:{


    },

    methods:{

        __init__:function(){

            this.$http.get("http://localhost/stock_control/produtos/json?prod="+this.prod).then((response) => {

                this.$set(this, 'Produtos', JSON.parse(response.data))
                this.isOk = true

            })
        },

        gotoaddprod:function(){
            changepage('addprod')
        },

        viewProd:function(id){


        },

        Islacking:function(param1, param2){

            if (parseInt(param1) < parseInt(param2))
              return 'alert alert-danger'
            return ''
        }
    },

    filters:{

        dollarsign:function(param){

            return "R$ "+ param.split(".").join(",")
        }
    }

})
