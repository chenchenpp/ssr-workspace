<template>
    <div>
        当前商品id: {{ id }}
    </div>
</template>

<script setup lang="ts">
    const { id } = useRoute().params
</script>

<style scoped>

</style>