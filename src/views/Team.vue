<template>
  <b-container>
    <navbar></navbar>
    <b-container id="team" class="mx-auto">
      <b-row align-v="baseline">
        <member-card
          :name="member.name"
          :id="member.id"
          :experience="member.experience"
          :position="member.position"
          :img_path="member.img_path"
          v-for="member in members"
          :key="member.id"
        ></member-card>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Member from "@/components/Member.vue";
export default {
  name: "team",
  components: { navbar: Navbar, "member-card": Member },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      members: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("members.json");
      const val = await res.json();
      this.members = val;
      console.log(val);
    },
  },
};
</script>

<style scoped>
#team {
  margin-top: 96px;
}

.row {
  justify-content: center;
}
</style>

<style>
body {
  background: linear-gradient(-45deg, #00a984, #65c5b3, #a9dbd2);
  /* #a9dbd2 */
  background-size: 300% 300%;
  animation: gradient 3s ease-in-out infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
