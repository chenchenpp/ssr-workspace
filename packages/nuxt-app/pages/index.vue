<template>
  <PageLayout name="首页">
    <HomeHeader></HomeHeader>
    <h2>home</h2>
    <ul>
      <li class="w-[20px]">
        <NuxtLink to="/about">about</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">products</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products/1">商品1</NuxtLink>
      </li>
    </ul>
    <div class="btn w-3 h-10"></div>
    <a class="btn" href="/about">a标签about</a>
    <van-button type="primary">主要按钮</van-button>
  </PageLayout>
</template>

<script setup lang="ts">
import { useCommonStore } from "../store/common";
import { rsCode } from "../config/constants";
const commonStore = useCommonStore();

onMounted(() => {
  getEnums();
});
function getEnums() {
  const { data } = useFetch("/api/allEnums", {
    server: false,
  });
  if (data.value?.rsCode !== rsCode.success) {
    console.log("获取枚举失败");
    return;
  }
  commonStore.setEnums(data.value?.body || {});
  console.log(data, commonStore.enums, 1111);
}
</script>

<style scoped></style>
