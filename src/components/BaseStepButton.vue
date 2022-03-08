<template>
  <div class="button-wrapper">
    <!-- 因為address-form要使用submit事件，所以button外層不能被router link包住 -->
    <button
      v-if="stepButtonValue.isAddressFromButton" 
      :class="stepButtonValue.classObj" 
      @click="afterClick($event)"
      type="submit"
    >
      {{ stepButtonValue.text }}
    </button>
    <router-link
      v-else
      class="steps__link" 
      :to="stepButtonValue.link"
    >
      <button 
        :class="stepButtonValue.classObj" 
        @click="afterClick($event)"
        type="submit"
      >
        {{ stepButtonValue.text }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BaseStepButton',
  props: {
    stepButtonValue: {
      type: Object,
      required: true
    }
  },
  methods: {
    afterClick(e) {
      this.$emit('handle-click', e)
    }
  }  
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/shareColors.scss';

  .steps__next-step {
    border: 1px solid getMapColor('white');
    border-radius: 5px;
    padding: 1rem;
    color: getMapColor('white');
    width: 100%;
    background-color: getMapColor('next-button-color');
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 5px getMapColor('light-gray');
    }
  }

  .steps__previous-step {
    padding: 1rem;
    background-color: getMapColor('body-background-color');
    border-style: none;
    cursor: pointer;
    color: getMapColor('text-color');
    width: 100%;
    &:hover {
      box-shadow: 1px 1px 5px getMapColor('light-gray');
    }
  }
</style>