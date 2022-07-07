<!-- <template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical"
        default-active="2"
        text-color="#fff"
        :collapse="collapse"
    >
        <el-menu-item index="1">
            <el-icon-document />
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon-document />
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon-document />
            <span>Navigator Three</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
defineProps<{
    collapse: boolean
}>()
</script>

<style scoped>

</style> -->

<template>
  <m-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></m-menu>
</template>

<script lang='ts' setup>
let props = defineProps<{collapse: boolean}>()
let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/city'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

<style lang='scss' scoped>
</style>