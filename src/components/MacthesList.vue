<template>
  <b-row>
    <b-col class="mb-5">
      <match-form v-if="formVisible" @cancel="formVisible = false" @addMatch="addMatch" class="mb-5" />
      <b-button @click="formVisible = true" class="mb-5">Add match</b-button>
      <h5 class="text-center">Matches</h5>

      <b-alert v-model="displayAlert" variant="success" dismissible>{{ alertMessage }}</b-alert>

      <!-- Matches -->
      <div v-for="sport in dataStructure" v-bind:key="sport.id">
        <!-- Sport -->
        <sport-component :sport="sport"></sport-component>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import matches from "@/fixtures/matches";
import MatchForm from "./MatchForm";
import SportComponent from "./SportComponent";

export default {
  components: {
    MatchForm,
    SportComponent
  },
  data() {
    return {
      formVisible: false,
      matches,
      displayAlert: false,
      alertMessage: ""
    };
  },
  methods: {
    addMatch(match) {
      try {
        const id = this.getId();
        match.id = id;
        this.matches.push(match);

        this.alertMessage = "New match added!";
        this.displayAlert = true;
      } catch (ex) {
        this.alertMessage = `Cannot add match. ${ex}`;
        this.displayAlert = true;
      }
    },
    getId() {
      return this.matches[this.matches.length - 1].id + 1;
    }
  },
  computed: {
    dataStructure() {
      const data = [];

      for (let match of this.matches) {
        // Get nodes with and without children
        const { tournament, ...matchNoTournament } = match;
        const { sport, ...tournamentNoSport } = tournament;

        // Sports
        // Add a new object if it doesn't exist, order by index/position
        if (!(sport.position in data)) {
          data[sport.position] = {
            ...sport,
            tournament: []
          };
        }

        // Tournament
        if (!(tournament.position in data[sport.position].tournament)) {
          data[sport.position].tournament[tournament.position] = {
            ...tournamentNoSport,
            matches: []
          };
        }

        // Matches
        data[sport.position].tournament[tournament.position].matches.push({ ...matchNoTournament });
      }

      return data;
    }
  }
};
</script>

<style scoped></style>
