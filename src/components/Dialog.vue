<template>
  <div class="jackbox demo jackbox--show">
    <div class="jackbox__backdrop"></div>
    <div class="jb-dialog" :class="style">
      <div class="jb-dialog__body">
        <aside class="jb-dialog__icon" v-if="options.showIcon">
          <div class="jb-dialog__box__outline">
            <i class="jb-dialog__box__icon__image"> ! </i>
          </div>
        </aside>
        <section class="jb-dialog__content">
          <div class="jb-dialog__title">{{ options.title }}</div>
          <div class="jb-dialog__text">
            {{ options.message }}
            <div class="jb-dialog__input__wrapper">
              <template v-if="options.label.length > 0">
                <label class="jb-dialog__input__label"><span>{{ options.label }}</span>
                  <input class="jb-dialog__input" :placeholder="options.placeholder" />
                </label>
              </template>
              <template v-else>
                <input class="jb-dialog__input" :placeholder="options.placeholder" />
              </template>
            </div>
          </div>
          <div class="jb-dialog__question">{{ options.question }}</div>
        </section>
      </div>
      <div class="jb-dialog__footer">
        <button class="jb-dialog__button jb-dialog__button--cancel">
          {{ options.cancel }}</button><button class="jb-dialog__button jb-dialog__button--action">
          {{ options.ok }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    options: {
      type: Object,
      default: () => { },
    },
  },
  computed: {
    style() {
      return `jb-dialog--${this.options.state}`;
    },
  },
};
</script>

<style>
.demo {
  position: absolute !important;
}

.demo .jb-dialog {
  position: absolute !important;
  transition: none !important;
}
</style>
