<template>
  <div class="badge-container">
    <p v-if="this.cartSize > 9" :style="{ fontSize: '10px'}">+9</p>
    <p v-else>{{ this.cartSize }}</p>
  </div>
</template>

<script>
export default {
    name: 'BadgeComponent',
    props: {
        cartSize: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
    .badge-container {
        position: absolute;
        border-radius: 10px;
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF5E1;
    }

    .badge-container p {
        font-size: 10px;
    }
</style>