<template>
  <div>
    <p>{{ getFullname(name) }}</p>
    <p>{{ fullname }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'WorkspaceListItem',
  props: {
    name: {
      type: String,
      default: 'NO NAME',
    },
    isRespected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fullname() {
      return this.getFullname(this.name)
    },
  },
  methods: {
    getFullname(name) {
      if (this.isRespected) {
        return `${name}-san`
      }
      return name
    },
  },
}
</script>
