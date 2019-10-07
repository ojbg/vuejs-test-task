<template>
  <div class="match-layout">
    <span>{{ match.position }}</span>
    <span>{{ match.name }}</span>
    <span>{{ match.competitors[0].name }}</span>
    <strong>VS</strong>
    <span>{{ match.competitors[1].name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    match: Object
  }
};
</script>

<style scoped>
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
