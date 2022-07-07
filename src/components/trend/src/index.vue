<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import { toLine } from '../../../utils'

const props = defineProps({
  type: {
    type: String,
    default: 'up',
  },
  text: {
    type: String,
    default: '文字',
  },
  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  // 下降趋势显示的图标
  downIcon: {
    type: String,
    default: 'ArrowDown'
  },
  // 颜色翻转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false
  },
  upIconColor: {
    type: String,
    default: '#f5222d',
  },
  downIconColor: {
    type: String,
    default: '#52c41a',
  },
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: 'rgb(0,0,0)'
  },
  // 下降趋势的文字颜色
  downTextColor: {
    type: String,
    default: 'rgb(0,0,0)'
  }
})
let slots = useSlots()
// 文字颜色
let textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  margin-right: 10px;
  .text {
    margin-right: 8px;
  }
  .icon {
    margin-top: 6px;
  }
}
</style>
