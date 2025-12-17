<script setup lang="ts">
  /**
   * ArtDialog 通用对话框组件
   * 基于 el-dialog 封装，支持 i18n 国际化
   */

  defineOptions({ name: 'ArtDialog' })

  withDefaults(defineProps<Props>(), {
    width: '30%',
    clickModalClose: false,
    center: false,
    title: 'add',
    confirmButtonText: 'confirm',
    cancelButtonText: 'cancel',
    customClass: ''
  })

  const emit = defineEmits<{
    (e: 'confirm'): void
    (e: 'cancel'): void
    (e: 'close'): void
  }>()

  const { t } = useI18n()

  /** 对话框显示状态，双向绑定 */
  const visible = defineModel('visible', { required: true, default: false })

  /* ---------------- props ---------------- */

  interface Props {
    /** 对话框标题，对应 _common 下的 i18n key */
    title?: string
    /** 对话框内容 */
    content?: string
    /** 确认按钮文本，对应 _common 下的 i18n key */
    confirmButtonText?: string
    /** 取消按钮文本，对应 _common 下的 i18n key */
    cancelButtonText?: string
    /** 对话框宽度 */
    width?: string
    /** 点击遮罩层是否关闭 */
    clickModalClose?: boolean
    /** 是否居中显示 */
    center?: boolean
    /** 自定义类名 */
    customClass?: string
  }

  /* ---------------- methods ---------------- */

  /**
   * 处理按钮点击事件
   * @param type - 事件类型：confirm 或 cancel
   */
  function handleEvent(type: 'confirm' | 'cancel') {
    visible.value = false
    emit(type)
  }

  /** 关闭对话框 */
  function close() {
    visible.value = false
    emit('close')
  }
</script>

<template>
  <ElDialog
    v-model="visible"
    :class="customClass"
    :center="center"
    :append-to-body="true"
    :width="width"
    :close-on-click-modal="clickModalClose"
    @closed="close"
  >
    <!-- 对话框标题：使用 i18n 动态翻译，key 格式为 _common.{title} -->
    <template v-if="title" #header>
      {{ t(`_common.${title}`) }}
    </template>

    <!-- 对话框内容：支持插槽自定义，默认显示 content -->
    <slot>{{ content }}</slot>

    <!-- 对话框底部按钮 -->
    <template #footer>
      <div class="dialog-footer">
        <!-- 取消按钮：使用 i18n 动态翻译 -->
        <ElButton v-if="cancelButtonText" @click="handleEvent('cancel')">
          {{ t(`_common.${cancelButtonText}`) }}
        </ElButton>

        <!-- 确认按钮：使用 i18n 动态翻译 -->
        <ElButton v-if="confirmButtonText" type="primary" @click="handleEvent('confirm')">
          {{ t(`_common.${confirmButtonText}`) }}
        </ElButton>
      </div>
    </template>
  </ElDialog>
</template>
