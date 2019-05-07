<template>
  <b-row>
    <b-col>

      <match-form v-if="formVisible" @cancel="formVisible = false" class="mb-5"/>
      <b-button @click="formVisible = true" class="mb-5">Add match</b-button>
      <h5 class="text-center">Render matches list here</h5>

    </b-col>
  </b-row>
</template>

<script>
import matches from '@/fixtures/matches'
import MatchForm from './MatchForm'

export default {
  components: {
    MatchForm
  },
  data () {
    return {
      formVisible: false,
      matches
    }
  }
}
</script>
