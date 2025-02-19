<template>
    <div class="bg-white">
        <div class="px-[32px] h-[112px] flex items-center">
            <div class="w-[40px] h-[40px] rounded-[8px] bg-gradient-to-br from-[#F89F35] to-[#F46D27] mr-[20px]"></div>
            <span class=" font-[500] text-[34px]">任职用功信息</span>
        </div>
        <slot></slot>
        <div v-if="type === 'multi'">查看更多</div>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    /** 模版类型 1:单条记录 2:多条记录 */
    type?: 'single' | 'multi'
}>(), {
    type: 'single'
})
</script>

<style scoped>

</style>