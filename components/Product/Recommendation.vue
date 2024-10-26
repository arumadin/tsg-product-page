<template>
    <div class="container">
        <div class="product__recommendations">
            <h3>You might also like...</h3>
            <div class="product__recommendations-wrap">
                <template v-for="(item, index) in products">
                    <Card v-if="index < 3" :key="index" :product="item"></Card>
                </template>
                <div class="discover-more">
                    <NuxtLink to="/" class="link--text">
                        Discover more..
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["products"])
</script>

<style lang="scss" scoped>
.product {

    &__recommendations {
        margin-top: 60px;

        &-wrap {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;

            @include nonDesktop {
                grid-template-columns: repeat(3, 1fr);

                div:nth-child(n+4) {
                    display: none;
                }

            }

            @include mobile {
                grid-template-columns: repeat(2, 1fr);

                div:nth-child(n+3) {
                    display: none;

                }
            }
        }
    }
}

.discover-more {
    font-family: 'Bodoni Moda';
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    a {
        padding-bottom: 100px;
    }
}
</style>