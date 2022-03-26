<template>
  <div class="select-wrapper" :class="[selectValue.classObj, { 'dark-mode': darkMode }]">
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
import { mapState } from 'vuex'

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
  },
  computed: mapState(['darkMode'])
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
    top: 55%;
    right: 5%;
    content: "\25BE";
    z-index: -1;
    color: getMapColor($light-mode, 'text-color');
  }
  > select {
    -webkit-appearance: none;
    margin-top: 0.5rem;
    padding: 0.8rem;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid getMapColor($light-mode, 'input-border-color');
    position: relative;
    z-index: 0;
    &:hover,
    &:focus {
      border: 2px solid getMapColor($light-mode, 'text-color');
      cursor: pointer;
    }
    // invalid無法顯示
    &:invalid {
      color: getMapColor($light-mode, 'input-placeholder-color');
    }
  }
}

// 當轉換成dark-mode時的顏色設定
.dark-mode {
  > label {
    color: getMapColor($dark-mode, "form-label-color");
  }

  > select {
    border: 1px solid getMapColor($dark-mode, "select-input-border-color");
    color: getMapColor($dark-mode, "text-color");

    > option {
      background-color: getMapColor($dark-mode, "body-background-color");
      color: getMapColor($dark-mode, "text-color");
    }

    &:hover,
    &:focus {
      border: 2px solid getMapColor($dark-mode, 'text-color');
    }

    &:invalid {
      color: getMapColor($dark-mode, 'input-placeholder-color');
    }
  }

  &::after {
    color: getMapColor($dark-mode, "form-label-color");
    z-index: 0;
  }
}
</style>