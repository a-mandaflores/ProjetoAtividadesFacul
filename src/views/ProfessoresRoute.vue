<template>
  <div v-for="item in dados" :key="item.id" class="professores">
    <h1>{{ item.materia }}</h1>
    <h2>{{ item.professor }}</h2>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return{
      dados: []
    }
  },
  methods: {
    fechData(){ 
      axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=OWISsDRNdy3GRNe_8HO-Zsw0kjXCBSzivYFut5w8WSAp2YwzQ8rcPSRLOM2Pw8ZcLEV4z0hcefplAG3hoPsfWGTS8WphjwlSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNrmaBm7WPgKQL-pOMDTpH_py8n52CHLBbEQXeYllPb6NyuGLyr0BBbyFAPrvpnhYe0_R92WgcQ3hbu-0XWaiAjUM67mHUKvpA&lib=M1WAHNAaucDFJNC7pji_pzSZrDaw7s3jo')
        .then(res => {
          this.dados = res.data.data
          console.log('Dados carregaos')
        })
        .catch(error => console.log(error))
    }
  },
  mounted() {
    this.fechData()
  }
}
</script>

<style lang="scss" scoped>
.professores{
  background-color: white;
  width: 700px;
  max-height: 50px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, .1);

  h1{
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }
  h2{
    font-size: .8rem;
    font-weight: 300;
    margin: 0;
  }
}

</style>