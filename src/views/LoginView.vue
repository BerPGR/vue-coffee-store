<template>
    <div class="login-container">
        <div class="login-card-container">
            <div class="login-card-left">
                <img class="card-login-register-image" :src="require('@/assets/loginScreenPic.jpg')"/>
            </div>
            <div class="login-card-right">
                <h2>Bem-vindo ao</h2>
                <h1 class="login-title">Kofi</h1>
                <br>
                <p :style="{marginTop: '10px'}">Faça seu login</p>
                <form :style="{marginTop:'10px', width:'100%'}">
                    <input type="email" placeholder="E-mail" v-model="inputEmail">
                    <input type="password" placeholder="Senha" v-model="inputPassword">
                </form>
                <div class="login-types">
                    <button class="button-login" type="submit" @click.prevent="userLogin">Login</button>
                    <div class="login-types-images">
                        <img :src="require('@/assets/facebook.png')" alt="">
                        <img :src="require('@/assets/twitter.png')" alt="">
                        <img :src="require('@/assets/google.png')" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data: () => ({
        inputEmail: '',
        inputPassword: '',
    }),
    methods: {
        userLogin() {
            if (this.inputEmail != '' && this.inputPassword != '') {
                this.$router.push('/home')
            }
        }
    }
}
</script>

<style scoped>

.login-container {
    height: 100vh;
    background-color: #FFF5E1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
}
.login-card-container {
    height: 80%;
    width: 60%;
    background-color: #F5DEB3;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    box-shadow: 5px 10px 20px #A0522D;
}

.login-card-left {
    width: 50%;
}

.card-login-register-image {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
}

.login-card-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.login-title {
    color: #A0522D;
    font-family: 'Lobster', sans-serif;
    font-size: 60px;
}

::placeholder {
    color: #F5DEB3;
}

.login-types {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
}

.login-types-images{
    margin-right: 20px;
}
.login-types-images img{
    height: 35px;
    margin-left: 10px;
}

.button-login {
    padding: 10px 20px;
    background-color: #FFF5E1;
    color: #A0522D;
    border: 1px solid #A0522D;
    border-radius: 50px;
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
}

input {
    width: 90%;
    background-color: #A0522D;
    border: none;
    margin-top: 20px;
    padding: 15px 10px;
    color: #F5DEB3;
    border-radius: 30px;
}
</style>