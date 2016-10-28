
var appcontrol = new Vue({

    el:"#appcontrol",

    data:function(){

        return {

            TitlePage:"Registrar Fornecedor",
            Provider:{

                Name:'',
                company:'',
                Office:'',
                "Location":'',
                Region:'',
                City:'',
                CEP:'',
                Country:'',
                Phone:'',
                Email:'',


            },
            Key:''
        }

    },

    methods:{

      registerprov:function(){

          var Provider = this.Provider

          var body = { "name_prov":Provider.Name, "company_prov":Provider.company, "office_prov":Provider.Office, "location_prov":Provider.Location, "city_prov":Provider.City, "region_prov":Provider.Region, "cep_prov":Provider.CEP, "country_prov":Provider.Country, "phone_prov":Provider.Phone, "email_prov":Provider.Email, key:this.Key }

          this.$http.post(WEBAPPCONFIG.AddProv, body).then(() => {

              backtolist()
          })
      },

      autoCompleteCEP:function(){


          this.$http.get("https://viacep.com.br/ws/"+this.Provider.CEP+"/json/").then((response) => {

              this.$set(this.Provider, "CEP", response.data.cep)
              this.$set(this.Provider, "Location", response.data.logradouro + " - " + response.data.bairro)
              this.$set(this.Provider, "City", response.data.localidade + " - " + response.data.uf)

          })
      },

      backtolist:()=>{}

    }


})
