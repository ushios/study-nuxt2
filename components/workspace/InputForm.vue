<template>
  <div>
    <p>
      name:<input
        type="text"
        :value="value.name"
        @input="onInputForm('name', $event.target.value)"
      />
    </p>
    <p>
      job:<input
        type="text"
        :value="value.job"
        @input="onInputForm('job', $event.target.value)"
      />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          name: '',
          job: '',
        }
      },
    },
  },
  methods: {
    onInputForm(name, value) {
      const newValue = {
        ...this.value,
        ...{ [name]: value },
      }
      console.log(newValue)
      this.$emit('input', newValue)
      // this.$emit('abcd', 'ただの適当なイベントです')
    },
  },
}
</script>
