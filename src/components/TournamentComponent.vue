<template>
  <div class="tournament-layout">
    <h6>{{ `${tournament.position}.${tournament.name}` }}</h6>
    <div v-for="(match, index) in matchesOrdered" v-bind:key="index">
      <!-- Match -->
      <match-component :match="match"></match-component>
    </div>
  </div>
</template>

<script>
import MatchComponent from "./MatchComponent";

export default {
  props: {
    tournament: Object
  },
  computed: {
    matchesOrdered() {
      const matches = this.tournament.matches;
      return matches.sort((a, b) => a.position - b.position);     
    }
  },
  components: {
    MatchComponent
  }
};
</script>

<style scoped>
.tournament-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.2rem;
}
</style>
