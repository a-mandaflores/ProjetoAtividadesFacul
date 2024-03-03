<template>
    <div class="atividade">

        <div>
            <label  for="materia">Escolha uma opção:</label>
            <select v-model="materia" id="materia" class="materias" >
                <option value="Padroes de projeto">Padrões de projeto</option>
                <option value="Tecnologias para Back-End">Tecnologias para Back-End</option>
                <option value="Projeto extensionista">Projeto extensionista</option>
                <option value="Analise e projeto de sistemas">Analise e projeto de sistemas</option>
                <option value="Liderança e inteligencia emocional">Liderança e inteligencia emocional</option>
                <option value="Banco de dados avançado">Banco de dados avançado</option>
            </select>
        </div>
        <h1>Atividade:</h1>
        <input v-model="atividade" type="text">
        <h1>Descritivo:</h1>
        <input class="descritivo" v-model="descritivo" type="text">
        <h1>Como entregar:</h1>
        <input v-model="comoEntregar" type="text">
        
        <div>
            <label for="dataEscolhida">Data de entrega: </label>
            <input class="data" type="date" id="dataEscolhida" v-model="dataEntrega">
        </div>
        <div class="camposNaoPreenchidos" v-if="camposNaoPreenchidos">Campos não preenchidos</div>
        <button @click="adicionar()" class="adicionar">Add</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
   
    data(){
        return{
            id: '',
            materia: '',
            professor: '',
            atividade: '', 
            descritivo: '',
            comoEntregar: '',
            dataEntrega: '',
            dataQueFoiInserido: '',
            camposNaoPreenchidos: false
        }
    },
    methods: {
        adicionar(){
            let addId = Math.ceil(Math.random()*1000000)
            this.id = addId

            if(this.materia === '' || this.atividade === ''|| this.descritivo === ''|| this.comoEntregar === ''|| this.dataEntrega === ''){
                this.camposNaoPreenchidos = true
                setTimeout(() => {
                    this.camposNaoPreenchidos = false
                }, 5000)
                return;
            }

            if(this.materia === 'Padroes de projeto'){
                this.professor = 'Angelo'
            }else if(this.materia === 'Tecnologias para Back-End'){
                this.professor = 'Kelson'
            }else if(this.materia === 'Projeto extensionista'){
                this.professor = 'Demétrius'
            }else if(this.materia === 'Analise e projeto de sistemas'){
                this.professor = 'Glaucio'
            }else if(this.materia === 'Liderança e inteligencia emocional'){
                this.professor = 'Lucivânia'
            }else if(this.materia === 'Banco de dados avançado'){
                this.professor = 'Wuldson'
            }


            if (this.dataEntrega) {
                const dataEntregaFormatted = this.formatarData(this.dataEntrega);
                this.dataEntrega = dataEntregaFormatted;
            } 

                let hoje = new Date();
                const dia = hoje.getDate().toString().padStart(2, '0');
                const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
                const ano = hoje.getFullYear().toString();
                this.dataQueFoiInserido = `${ano}/${mes}/${dia}`;

        


            const url = '/api/macros/s/AKfycbwbXMmYX4BmDpdzRaPv0KDgXv48TnPl_K9b23tIqKeSq2l9fuF3K5li5o4QyCaIuH14/exec'
            const dados = {
                id: this.id,
                materia: this.materia,
                professor: this.professor,
                atividade: this.atividade,
                descritivo: this.descritivo,
                comoEntregar: this.comoEntregar,
                dataEntrega: this.dataEntrega,
                dataQueFoiInserido: this.dataQueFoiInserido
            }

            axios.post(url, dados)
                .then(response => {
                    //Se os dados salvarem certinho irá redirecionar para a HOME
                    if(response.status === 200) window.location = "/"
                })
                .catch(error => {
                console.error('Erro:', error);
            }); 
        },
        formatarData(data) {
            const partes = data.split('/');
            if (partes.length === 3) {
                const ano = partes[2];
                const mes = partes[1].padStart(2, '0');
                const dia = partes[0].padStart(2, '0');
                return `${ano}-${mes}-${dia}`;
            }
            return data;
            },

    }

}
</script>


<style lang="scss" scoped>
.atividade{
    .camposNaoPreenchidos{
        padding: 1rem 0;
        color: darkred;
        font-size: .8rem;
        font-weight: 600;
    }

    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    width: 80%;
    height: auto ;
    background-color: white ;

    .materias{
        margin-left: 1rem;
        border: 1px solid rgb(0, 0, 0, .2);

    }
    h1, label{
        font-weight: 600;
        font-size: 1rem;
        color: darkcyan;
    }
    input{
        width: 500px;
        border: 1px solid rgb(0, 0, 0, .2);
    }
    .descritivo{
        width: 500px;
    }
    .data{
        width: 100px;
        margin: 1.2rem 0;
    }
    button{
    letter-spacing: 1px;
    font-weight: 500;
    color: whitesmoke;
    font-size: .7rem;
    width: 120px;
    border: none;
    margin: 1rem 0 0 1rem;
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 1px 2px 5px rgb(0, 0, 0,.1);
    background-color: darkcyan;
    transition: .3s ease-in-out;

    &:hover{
      background-color: rgb(3, 110, 110);
    }
    }
}
</style>