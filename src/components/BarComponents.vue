<template>
    <div class="container">
    <router-link to="/" class="atividades">
    <span class="material-symbols-outlined">edit_note</span>
    <div >Atividades</div>
    </router-link>
    
    <router-link to="/professores" class="atividades">
    <span class="material-symbols-outlined">groups</span>
    <div >Professores</div>
    </router-link>
    </div>
</template>

<script>

export default {
    

}
</script>

<style lang="scss" scoped>
.container{
    color: whitesmoke;
    padding: 1rem;
    min-height: 100vh;
    background-color: darkcyan;
}

.atividades{
    font-weight: 300;
    display: flex;
    letter-spacing: .1rem;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: .3s ease-in;
    cursor: pointer;
    span{
        padding-right: .5rem;
    }

    &:hover{
        font-weight: 500;
        color: darkslategrey;
    }
}
</style>