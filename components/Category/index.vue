<template>
    <div class="container">
        <h3>Categories</h3>
        <div class="category">
            <CategoryItem v-for="i in 10"></CategoryItem>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.category {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    margin-bottom: 50px;
}
</style>