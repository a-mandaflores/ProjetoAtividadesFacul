<template>
  <div class="atividades">
  <router-link to="/AddAtividades">
  <button class="add-atividades">Add atividades</button>
  </router-link>
  <div  v-for="item in data" :key="item.id" class="container">
    <div class="container-atividades">

    <div class="container-dados">
    <div >
    <h1 class="titulo"> {{ item.atividades }}</h1>
    <h1 class="materia"> {{  item.materia }}</h1>
    </div>
    <div class="data">
    <h1> {{ item.dataInclusaoSistema }}</h1>
    <h1>Entregar até: {{ item.data }}</h1>
    </div>
    </div>

    <div v-show="item.id === descriacaoAtivado" class="descritivo ativado">
    <h1>Descritivo:</h1>
    <p> {{ item.descritivo }} </p>
  
    <h1>Entrega: <span class="entrega"> {{ item.comoEntregar }}</span> </h1>
    </div>
    </div>


    <span @click="toggleDescritivo(item.id)" class="material-symbols-outlined flecha">
    keyboard_arrow_{{ flecha }}
    </span>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

export default {


  data(){
        return{
            data: null,
            desativar: false,
            flecha: 'down',
            descriacaoAtivado: null
        }

    },
    deletar(atividadeId) {
      if (!confirm("Tem certeza que deseja excluir esta atividade?")) {
        return;
      }

      let id = atividadeId;
      const url = '/api/macros/s/AKfycbzmBNa2aVCI49Ev3ElSUbQabBnmal8--r-3K-UuOoO6HT7ZIsncxZPeKITw7ZZukiIA/exec';
      const data = {
        id: id,
        method: "DELETE"
      };

      axios.post(url, data)
        .then(response => {
          if (response.status === 200) {
            window.location = "/";
            alert("Atividade excluída com sucesso!");
          }
        })
        .catch(error => {
          console.error('Erro:', error);
          alert("Houve um erro ao tentar excluir a atividade.");
        });
    },
    methods: {
      toggleDescritivo(id){
        
        this.flecha = this.flecha == 'down' ? 'up' : 'down'
        
        this.descriacaoAtivado = this.descriacaoAtivado === id ? null : id
        
       
      },
      fetchData() {
        axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=Vy6EvGUuq0je_CczKpww2M5_VrB9QIDiAE5M5N3y-Ly_GUqykYAzzmhsW-EIj2uIWL7O0CulH7Xvg78_Fdg0Ug0Px4IpCOE4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDycup1rEZ_wYdZUO3j046BUZBtEqHfjMlbOIGu9KfhSqaiKJ70y8wF3pBMtP4p_9wXORJJU_IsdU1wxm5UFG4lOz1Kr4KjXmQ&lib=M1WAHNAaucDFJNC7pji_pzSZrDaw7s3jo')

        .then(response => {
          this.data = response.data.data
          console.log('chamada ok')
        })
        .catch(error => {
          console.error('Erro na chamada da API:', error);
        });
    },

    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },

}
</script>

<style lang="scss" scoped>
.atividades {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;

  .add-atividades {
    letter-spacing: 1px;
    font-weight: 500;
    color: whitesmoke;
    font-size: .7rem;
    width: 120px;
    border: none;
    margin: 1rem 0 0 1rem;
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 1px 2px 5px rgb(0, 0, 0, .1);
    background-color: darkcyan;
    transition: .3s ease-in-out;

    &:hover {
      background-color: rgb(3, 110, 110);
    }

  }
}

.container {
  overflow: hidden;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, .1);
  border-radius: 8px;
  margin: 1rem;
  background-color: white;

  .container-dados {
    align-items: center;
    display: flex;
    justify-content: space-between;


    .titulo {
      align-content: baseline;
      margin: 1rem 0 0 1rem;
      font-weight: 600;
      font-size: 1rem;
    }

    .materia {
      align-content: baseline;
      font-size: .7rem;
      margin: 0 0 0 1rem;
      font-weight: 300;

    }

    .data {
      display: flex;
      align-items: end;
      flex-direction: column;
      margin: 1rem 1rem 0 0;

      h1 {
        align-items: end;
        margin: 0;
        font-weight: 500;
        font-size: .6rem;
      }
    }

  }

  .descritivo.ativado {
    display: block;
    margin: 1rem;

    h1,
    p {
      margin: 0;
      font-size: .8rem;
    }

    p {
      margin-bottom: .5rem;
    }

    .entrega {
      font-weight: 400;
    }
  }


}

.flecha {
  font-size: 1rem;
  cursor: pointer;
  margin: 0 1rem .5rem 1rem;

  &:hover {
    color: darkcyan;
  }
}
</style>