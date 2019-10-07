<template>
  <b-row>
    <b-col>
      <match-form
        v-if="formVisible"
        @cancel="formVisible = false"
        @addMatch="addMatch"
        class="mb-5"
      />
      <b-button @click="formVisible = true" class="mb-5">Add match</b-button>
      <h5 class="text-center">Matches</h5>

      <b-alert v-model="displayAlert" variant="success" dismissible>{{alertMessage}}</b-alert>

      <!-- Matches -->
      <div class="sport-layout" v-for="(sport,index) in orderedData" v-bind:key="index">
        <!-- Sport -->
        <h5>{{`${sport.position}.${sport.name}`}}</h5>
        <div
          class="tournament-layout"
          v-for="(tournament,index) in sport.tournament"
          v-bind:key="index"
        >
          <!-- Tournament -->
          <h6>{{`${tournament.position}.${tournament.name}`}}</h6>
          <div v-for="(match,index) in tournament.matches" v-bind:key="index">
            <!-- Match -->
            <div class="match-layout">
              <span>{{match.position}}</span>
              <span>{{match.name}}</span>
              <span>{{match.competitors[0].name}}</span>
              <strong>VS</strong>
              <span>{{match.competitors[1].name}}</span>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import matches from "@/fixtures/matches";
import MatchForm from "./MatchForm";

export default {
  components: {
    MatchForm
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
    orderedData() {
      const data = [];

      // Order data by using position in array
      for (let match of this.matches) {
        // Get nodes and filter duplicates
        const { tournament, ...noTournament } = match;
        const { sport, ...noSport } = tournament;

        // Sports
        // Add a new object if it doesn't exist
        if (!(sport.position in data)) {
          data[sport.position] = {
            ...sport,
            tournament: []
          };
        }

        // Tournament
        if (!(tournament.position in data[sport.position].tournament)) {
          data[sport.position].tournament[tournament.position] = {
            ...noSport,
            matches: []
          };
        }

        // Matches        
        const index =
          data[sport.position].tournament[tournament.position].matches.length;

        if (
          match.position > index ||
          match.position in
            data[sport.position].tournament[tournament.position].matches
        ) {
          // Update position and push
          noTournament.position = index;
          data[sport.position].tournament[tournament.position].matches.push({
            ...noTournament
          });
        } else {
          data[sport.position].tournament[tournament.position].matches[
            match.position
          ] = { ...noTournament };
        }
      }

      return data;
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

.tournament-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.2rem;
}

.match-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  border: 2px solid rgba(64, 64, 64, 0.1);
  border-radius: 0.5rem;
  gap: 0.1rem;
  justify-items: center;
  align-items: center;
  text-align: center;
  padding: 0.2rem;
  transition: 1s background-color ease-in-out;
}

.match-layout:hover {
  background-color: rgba(64, 64, 64, 0.1);
}
</style>
