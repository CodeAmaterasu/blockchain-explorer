<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <slot name="body" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  top: auto;
  left: auto;
  width: 50%;
  min-width: 300px;
  max-width: 1100px;
  height: auto;
  flex-direction: column;
  border-radius: 10px;
  padding: 30px;
  text-align: left;
  margin-top: 180px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>