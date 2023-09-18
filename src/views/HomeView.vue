<template>
  <div class="home-container">
    <header class="header-container">
      <nav class="navbar">
        <div class="left-navbar">
          <img :src="backgroundImage" class="navbar-img">
        </div>
        <div class="right-navbar">
          <div class="bag-container">
            <img :src="require('@/assets/bag.svg')" alt="">
          </div>
          <p>Produtos</p>
          <p>Ofertas</p>
          <p>Minha conta</p>
          <p>Sair</p>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data: () => ({
    backgroundImage: require('@/assets/logo.png')
  })
}
</script>

<style scoped>
  .home-container {
    min-height: 100vh;
    background-color: #FFF5E1
  }

  .header-container {
    height: 80px;
    background-color: #A0522D;
    width: 100%;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .right-navbar {
    display: flex;
    flex-direction: row;
  }

  .bag-container {
    margin-right: 30px;
    position: relative;
    cursor: pointer;
  }

  
  .navbar-img {
    object-fit: contain;
    height: 80px;
    margin-left: 30px;
  }

  .right-navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .right-navbar p {
    margin-right: 30px;
    color: #FFF5E1;
  }

</style>