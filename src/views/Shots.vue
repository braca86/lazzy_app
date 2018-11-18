<template>
  <div class="Shots">
    <div class="Shots__controls">

    </div>
    <div class="Shots__unpublishedShots">
      <shot
        v-for="shot in unpublishedShots"
        :key="shot"
        :shot-selected="false"
        :shot-url="shot"
        shot-caption=""
        :shot-tags="[]"
        :shot-best-time="false"
        shot-date-time=""
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Shot from '@/components/Shots/Shot.component'
export default {
  name: 'shots',
  components: {
    Shot
  },
  computed: {
    ...mapGetters({
      unpublishedShots: 'shots/unpublishedData'
    })
  }
}
</script>
