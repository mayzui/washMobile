<template>
  <div class="comp_filed ly-flexc-sb">
    <label v-if="label" class="comp_filed-label">{{ label }}</label>
    <input v-model="resValue" :type="type" :placeholder="placeholder" class="ly-flex1 comp_filed-input">
  </div>
</template>

<script>
export default {
  name: 'LxFiled',
  props: {
    value: {
      type: [ String, Number ],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      resValue: ''
    }
  },
  watch: {
    value: {
      handler (newVal) {
        if (newVal === this.resValue) return
        this.resValue = newVal
      },
      immediate: true
    },
    resValue (newVal) {
      if (this.value === newVal) return
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
.comp_filed { height: 40px; margin-top: $divide;
  &-label { margin-right: $divide_s; }
  &-input { @include padding_lr($divide_s); border-bottom: 1px solid $border_color; }
  &:hover {
    .comp_filed-label { color: $color_primary; }
    .comp_filed-input { border-color: $color_primary; }
  }
}
</style>
