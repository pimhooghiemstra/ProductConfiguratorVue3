<script setup>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'

import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n';
const i18nStore = useI18nStore()
const { lang } = storeToRefs(i18nStore)

defineProps({
    showModal: Boolean
})
</script>

<template>
    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
        <button class="close-button modal__close" @click="showModal = false">
            &times;
        </button>
        <div>
          <span class="modal__title">Afrekenen</span>
          <div class="modal__content">
              <p>{{ lang['checkoutMessage'] }}</p>
          </div>
        </div>
    </vue-final-modal>
</template>

<style scoped>
:deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.modal-content) {
  position: relative;
  display: grid;
  place-items: center;
  margin: 0 1rem;
  padding: 1rem 6rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  height: 250px;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff9900;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div:deep(.modal-content) {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>