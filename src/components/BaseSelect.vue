<template>
  <div class="select-wrapper" :class="selectValue.classObj">
    <label :for="selectValue.labelFor">{{ selectValue.label }}</label>
    <select 
      :name="selectValue.selectName" 
      :id="selectValue.selectId" 
      :required="selectValue.hasAttributeValue" 
      v-model="selectValue.selected"
    >
      <template v-for="option in selectValue.options">
        <option 
          v-if="option.value === 'default'"
          :key="option.id" :value="option.value" 
          disabled
          selected
        >
          {{ option.name }}
        </option>
        <option 
          v-else 
          :key="option.id" 
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    selectValue: {
      type: Object,
      required: true
    }
  },
  methods: {
    isDefaultOption(value) {
      return value === 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .select-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    // 三角形按鈕樣式
    &::after {
      position: absolute;
      top: 50%;
      right: 5%;
      content: "\25BE";
      z-index: -1;
      color: getMapColor('text-color');
    }
    > select {
      -webkit-appearance: none;
      padding: 0.8rem;
      border-radius: 5px;
      background-color: transparent;
      border: 1px solid getMapColor('input-border-color');
      // color: getMapColor('text-color');
      position: relative;
      z-index: 0;
      &:hover,
      &:focus {
        border: 2px solid getMapColor('text-color');
        cursor: pointer;
      }
      // invalid無法顯示
      &:invalid {
        color: getMapColor('input-placeholder-color');
      }
    }
  }
</style>