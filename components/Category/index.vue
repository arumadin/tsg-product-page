<template>
    <div class="container">
        <h3>Categories</h3>
        <div class="category">
            <CategoryItem v-for="(category, index) in categories" :key="index" :category="category"></CategoryItem>
        </div>
    </div>
</template>

<script setup lang="ts">
let categories = ref([
    {
        title: "Fruit",
        icon: "emojione:tangerine"
    },
    {
        title: "Baking",
        icon: "emojione:bread"
    },
    {
        title: "Biscuit",
        icon: "emojione:cookie"
    },
    {
        title: "Granola",
        icon: "emojione:honey-pot"
    },
    {
        title: "Show All",
        icon: "emojione:strawberry"
    },
    {
        title: "Snack",
        icon: "emojione:popcorn"
    },
    {
        title: "Tea",
        icon: "emojione:teacup-without-handle"
    },
    {
        title: "Yogurt",
        icon: "emojione:glass-of-milk"
    }
])

</script>

<style lang="scss" scoped>
.category {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    margin-bottom: 50px;
}
</style>