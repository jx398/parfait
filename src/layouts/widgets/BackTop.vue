<script setup lang="ts">
import { IconToTop } from '@arco-design/web-vue/es/icon'

const {
  targetContainer = '',
} = defineProps<{
  targetContainer: string
}>()
const { fixHeader } = storeToRefs(useAppStore())
// when the fixHeader change, the backTop target not update
// immediately, so change the key to force update
let key = $ref(0)
watch(fixHeader, () => {
  key++
})
</script>

<template>
  <a-back-top :key="key" :target-container="targetContainer">
    <a-button
      fixed shadow-md
      class="bottom-18% lt-lg:!bottom-15% right-3% lt-md:!right-5%"
      size="large" shape="circle"
    >
      <IconToTop :stroke-width="8" />
    </a-button>
  </a-back-top>
</template>
