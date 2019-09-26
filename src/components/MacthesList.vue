<template>
  <b-row>
    <b-col>
      <match-form v-if="formVisible" @cancel="formVisible = false" class="mb-5" />
      <b-button @click="formVisible = true" class="mb-5">Add match</b-button>
      <h5 class="text-center">Render matches list here</h5>

      <div v-for="(sport,index) in orderedData" v-bind:key="index">
        {{`${sport.position}.${sport.name}`}}
        <div v-for="(tournament,index) in sport.tournament" v-bind:key="index">
          {{`${tournament.position}.${tournament.name}`}}
          <div
            v-for="(match,index) in tournament.matches"
            v-bind:key="index"
          >{{`${match.position}.${match.name}`}}</div>
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
      matches
    };
  },
  computed: {
    orderedData() {
      const myData = [];

      for (let i = 0; i < this.matches.length; i++) {
        const sport = this.matches[i].tournament.sport;
        const tournament = this.matches[i].tournament;

        // Sports
        if (typeof myData[sport.position] === "undefined") {
          myData[sport.position] = {
            ...sport,
            tournament: []
          };
        }

        // Tournament
        if (
          typeof myData[sport.position].tournament[tournament.position] ===
          "undefined"
        ) {
          myData[sport.position].tournament[tournament.position] = {
            id: tournament.id,
            position: tournament.position,
            name: tournament.name,
            matches: []
          };
        }

        // Matches
        if (
          typeof myData[sport.position].tournament[tournament.position].matches[
            this.matches[i].position
          ] === "undefined"
        ) {
          myData[sport.position].tournament[tournament.position].matches[
            this.matches[i].position
          ] = {
            id: this.matches[i].id,
            position: this.matches[i].position,
            competitors: this.matches[i].competitors,
            name: this.matches[i].name
          };
        }
      }

      return myData;
    }
  }
};
</script>
