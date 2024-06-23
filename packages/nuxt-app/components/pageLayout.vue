<template>
  <div>
    <van-nav-bar :title="name" v-bind="$attrs" @click-left="onClickLeft"/>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
defineProps<{
    name: string
}>()

function onClickLeft() {
    router.back();
}
</script>

<style lang="scss" scoped></style>
