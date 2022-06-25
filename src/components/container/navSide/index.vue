<template>
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

</style>