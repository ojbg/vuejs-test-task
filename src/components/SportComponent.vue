<template>
  <div class="sport-layout">
    <!-- Sport -->
    <h5>{{ `${sport.position}.${sport.name}` }}</h5>
    <div v-for="tournament in tournamentsOrdered" v-bind:key="tournament.id">
      <!-- Tournament -->
      <tournament-component :tournament="tournament"></tournament-component>
    </div>
  </div>
</template>

<script>
import TournamentComponent from "./TournamentComponent";

export default {
  props: {
    sport: Object
  },
  components: {
    TournamentComponent
  },
  computed: {
    tournamentsOrdered() {
      const tournaments = this.sport.tournament;
      return tournaments.sort((a, b) => a.position - b.position);
    }
  }
};
</script>

<style scoped>
.sport-layout {
  display: grid;
  gap: 0.3rem;
  margin-top: 2rem;
}
</style>
