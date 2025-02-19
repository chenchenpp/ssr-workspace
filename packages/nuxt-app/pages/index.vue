<template>
  <PageLayout name="首页">
    <HomeHeader></HomeHeader>
    <div class="mt-[16px]">
      <HomeModuleWrap>
        <van-cell-group>
          <van-cell title="单元格" value="内容" />
          <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
      </HomeModuleWrap>
    </div>
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
    <img class="w-full h-[200px]" src="/images/bg.png"></img>
    <text class="title">测试less</text>
    <van-button @click="onUpdate">更新</van-button>
  </PageLayout>
</template>

<script setup lang="ts">
import { useCommonStore } from "../store/common";
import { rsCode } from "../config/constants";
const commonStore = useCommonStore();
const { data, refresh } = await useFetch("/api/allEnums", {
    server: false,
    lazy: true,
    immediate: false
  });
  console.log(data,'data')
  // console.log(data.value, rsCode.success);
  // if (data.value?.rsCode == rsCode.success) {
  //   commonStore.setEnums(data.value?.body || {});
  //   console.log(data, commonStore.enums, 1111);
  // }

// getEnums();
onMounted(() => {
  refresh();
});
async function getEnums() {

}
function onUpdate() {
  refresh()
  console.log(data)
}
</script>

<style lang="less" scoped>
.title{
  color: @primary;
  display: flex;
}
</style>
