
var appcontrol = new Vue({

    el:"#appcontrol",

    data:function(){

        return {

            isOk:false,
            Produtos:[{

              ID:1,
              Name:'Teste Produto',
              Price:100.00,
              Description:'teste description',
              Count_P:'20',
              insertData:'2016-10-28 16:55:55',
              dataModified:'2016-10-28 16:55:55',
              Code_Produt:'98ENX8273NX823N8',
              Min_Count:'10',


            }]
        }
    },

    created:function(){
        this.__init__()
    },

    methods:{

        __init__:function(id){

          /*
            this.$http.get("http://localhost/stock_control/produtos/json/"+id).then((response) => {

                this.$set(this, 'Produtos', JSON.parse(response.data))
                this.isOk = true

            })*/
            this.isOk = true
        },

    }

})
