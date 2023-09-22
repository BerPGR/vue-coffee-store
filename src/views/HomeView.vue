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

    <div class="hero-carousel-container">
      <img :src="require('@/assets/background1.png')"/>
    </div> <!--This first part of the Hero won't have the carousel-->

    <div class="initial-info">
      <div class="initial-info-content">
        <img :src="require('@/assets/startup.png')" alt="">
        <p>Envio rápido e frete grátis<br>para todo o Brasil!</p>
      </div>

      <div class="initial-info-content">
        <img :src="require('@/assets/discount.png')" alt="">
        <p>Ofertas todos os dias para<br>esquentar seu coração!</p>
      </div>

      <div class="initial-info-content">
        <img :src="require('@/assets/credit-card.png')" alt="">
        <p>10% de desconto com<br>pagamento à vista!</p>
      </div>
    </div>
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

  .hero-carousel-container img {
    width: 100%;
  }

  .initial-info {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .initial-info-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .initial-info-content img {
    object-fit: contain;
    width: 60px;
  }
  .initial-info-content p {
    padding-top: 20px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-align: center;
  }

</style>