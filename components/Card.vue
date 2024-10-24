<template>
    <NuxtLink to="/product/sample-product" class="card">
        <div class="card__visual">
            <NuxtImg src="https://img.spoonacular.com/recipes/636732-556x370.jpg" alt="image" class="card__image"></NuxtImg>
            <div class="btn--addcart">add to cart</div>
        </div>
        <div class="card__desc">
            <div class="card__title">Title</div>
            <div class="card__price">price</div>
        </div>
        <div class="card__label"></div>
    </NuxtLink>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 400px;
    background-color: gray;
    text-decoration: none;

    &__image {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &__visual {
        height: 300px;
        width: 100%;
        overflow: hidden;
        position: relative;

        .btn--addcart {
            position: absolute;
            bottom: -40px;
            background-color: aqua;
            padding: 8px 20px;
            border-radius: 20px;
            transition: all 0.3s ease-in;
            width: calc(100% - 40px);
            margin: 0 20px;
            box-sizing: border-box;
        }

        &:hover {
            .btn--addcart {
                bottom: 10px;
            }

        }
    }

    &__desc {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        z-index: 2;
        padding: 10px;
    }

    &__title {
        flex: 0 1 75%;
    }

    &__price {
        flex-grow: 1;
        text-align: right;
    }
}

</style>