<script setup lang="ts">
  import { toggleTransition } from '@utils/ui/animation'
  import en from 'element-plus/es/locale/lang/en'
  import zh from 'element-plus/es/locale/lang/zh-cn'
  import { checkStorageCompatibility, systemUpgrade } from '@/utils'
  import { initializeTheme } from './hooks/core/useTheme'
  import { useUserStore } from './store/modules/user'

  const userStore = useUserStore()
  const { language } = storeToRefs(userStore)

  const locales = {
    zh,
    en
  }

  onBeforeMount(() => {
    toggleTransition(true)
    initializeTheme()
  })

  onMounted(() => {
    checkStorageCompatibility()
    toggleTransition(false)
    systemUpgrade()
  })
</script>

<template>
  <ElConfigProvider size="default" :locale="locales[language]" :z-index="3000">
    <RouterView />
  </ElConfigProvider>
</template>
