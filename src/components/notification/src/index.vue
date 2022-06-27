<template>
  <el-badge :value="value" :max="max" :is-dot="isDot">
  <component :is="`el-icon-${toLine(icon)}`"></component>

  </el-badge>
</template>

<script lang="ts" setup>
import {toLine} from '../../../utils';
const props = defineProps({
  icon: {
    type: String,
    default: 'Bell',
  },
  vaule: {
    type: [String,Number],
    default: '',
  },
  max: {
    type: Number,
    default: 0,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>

</style>
