<template>
  <div class="Shot">
    <el-checkbox v-model="selected"></el-checkbox>
    <img :src="shotUrl" alt="">
    <div class="Shot__middle">
      <div class="Shot__middle--caption">
        <el-input placeholder="Write a caption..." v-model="caption"></el-input>
      </div>
      <div class="Shot__middle--tags">
        <button type="button" v-if="!editTags">+smart tags</button>
      </div>
    </div>
    <div class="Shot__right">
      <div class="Shot__right--dateTime">
        <button type="button">Set Date & Time</button>
      </div>
      <div class="Shot__right--bestTime">
        <span>Best time</span>
        <el-switch
          v-model="bestTime"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shot',
  props: {
    shotSelected: {
      required: true,
      type: Boolean
    },
    shotUrl: {
      required: true,
      type: String
    },
    shotCaption: {
      required: true,
      type: String
    },
    shotTags: {
      required: true,
      type: Array
    },
    shotBestTime: {
      required: true,
      type: Boolean
    },
    shotDateTime: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      selected: false,
      caption: '',
      editTags: false,
      bestTime: false
    }
  },
  created () {
    this.selected = this.shotSelected
    this.caption = this.shotCaption
    this.bestTime = this.shotBestTime
  }
}
</script>
