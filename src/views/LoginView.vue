<template>
    <div class="login-container">
        <div class="login-card-container">
            <div class="login-card-left">
                <img class="card-login-register-image" :src="require('@/assets/loginScreenPic.jpg')"/>
            </div>
            <div class="login-card-right">
                <h2>Bem-vindo ao</h2>
                <h1 class="login-title">Kofi</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView'

}
</script>

<style scoped>

.login-container {
    height: 100vh;
    background-color: #556B2F;
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
}

.card-login-register-image {
    object-fit: cover;
    height: 100%;
    width: 60%;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
}

.login-card-right {
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

</style>