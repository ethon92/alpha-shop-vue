<template>
  <div class="button-wrapper" :class="{ 'dark-mode': darkMode }">
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
import { mapState } from 'vuex'

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
  },
  computed: mapState(['darkMode']) 
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/shareColors.scss';

.steps__next-step {
  border: 1px solid getMapColor($light-mode, "white");
  border-radius: 5px;
  padding: 1rem;
  color: getMapColor($light-mode, "white");
  width: 100%;
  background-color: getMapColor($light-mode, "next-button-color");
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 5px getMapColor($light-mode, "light-gray");
  }
}

.steps__previous-step {
  padding: 1rem;
  background-color: getMapColor($light-mode, "body-background-color");
  border-style: none;
  cursor: pointer;
  color: getMapColor($light-mode, "text-color");
  width: 100%;
  &:hover {
    box-shadow: 1px 1px 5px getMapColor($light-mode, "light-gray");
  }
}

// 當轉換為dark-mode時的顏色設定
.dark-mode {
  > .steps__next-step {
    border: 1px solid getMapColor($dark-mode, "body-background-color");
  }

  > .steps__link{
    > .steps__next-step {
      border: 1px solid getMapColor($dark-mode, "body-background-color");
    }

    > .steps__previous-step {
      background-color: getMapColor($dark-mode, "body-background-color");
      color: getMapColor($dark-mode, "text-color");
    }
  }
}
</style>