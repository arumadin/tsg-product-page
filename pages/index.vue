<template>
    <main>
        <div>Banner</div>
        <div>category</div>
        <div>product listing</div>
        <div class="product-list">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(minmax(1,3), 1fr);
    gap: 20px;
}

</style>