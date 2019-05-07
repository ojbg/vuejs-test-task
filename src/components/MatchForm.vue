<template>
  <div>
    <b-form>

      Match creation form

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="button" variant="danger" @click="$emit('cancel')">Cancel</b-button>

    </b-form>
  </div>
</template>

<script>
  import tournaments from '@/fixtures/tournaments'

  export default {
    data () {
      return {
        form: {
          name: '',
          competitorOneName: '',
          competitorTwoName: '',
          tournament: {},
          position: 0
        },
        tournaments
      }
    }
  }
</script>
