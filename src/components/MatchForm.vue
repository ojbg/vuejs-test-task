<template>
  <div>
    <b-row class="justify-content-center">
      <b-form class="text-center">
        <h5>Add Match</h5>
        <h5 v-show="error !== ''" class="text-danger">{{error}}</h5>

        <b-form-group id="input-group-1" label="Match name" label-for="match-name">
          <b-form-input id="match-name" v-model="form.name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="First competitor name" label-for="first-competitor">
          <b-form-input id="first-competitor" v-model="form.competitorOneName"></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Second competitor name"
          label-for="second-competitor"
        >
          <b-form-input id="second-competitor" v-model="form.competitorTwoName"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Tournament" label-for="tourn">
          <b-form-select
            id="tourn"
            v-model="form.tournament"
            :options="tournaments"
            text-field="name"
            value-field="id"
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-5" label="Position" label-for="position">
          <b-form-input
            v-model="form.position"
            id="position"
            type="number"
            min="0"
            class="text-center"
          ></b-form-input>
        </b-form-group>

        <b-form-group class="text-center">
          <b-button type="button" variant="primary" @click="addMatch()">Submit</b-button>
          <b-button type="button" variant="danger" @click="$emit('cancel')">Cancel</b-button>
        </b-form-group>
      </b-form>
    </b-row>
  </div>
</template>

<script>
import tournaments from "@/fixtures/tournaments";

export default {
  data() {
    return {
      form: {
        name: "",
        competitorOneName: "",
        competitorTwoName: "",
        tournament: {},
        position: ""
      },
      tournaments,
      error: ""
    };
  },
  methods: {
    addMatch() {
      if (this.validateForm() === false) {
        return;
      }

      const tournament = this.tournaments.find(
        tournament => tournament.id === this.form.tournament
      );

      const match = {
        competitors: [
          { name: this.form.competitorOneName },
          { name: this.form.competitorTwoName }
        ],
        name: `MATCH: ${this.form.name}`,
        position: this.form.position,
        tournament
      };
      this.$emit("addMatch", match);
      this.$emit("cancel");
    },
    validateForm() {
      if (
        this.form.name &&
        this.form.competitorOneName &&
        this.form.competitorTwoName &&
        this.form.tournament &&
        this.form.position
      ) {
        this.error = "";
        return true;
      } else {
        this.error = "All fields are required";
        return false;
      }
    }
  },
  computed: {}
};
</script>
