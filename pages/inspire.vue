<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      {{ name }} Just start <b-icon icon="rocket" size="is-large" />
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira"> Antério Vieira </a>
    </h3>

    <div>
      <workspace-input-form v-model="formValue" @abcd="onAbcd" />
      <input v-on:click="onClickButton" type="button" value="Send" />
    </div>

    <!-- <div>
      <input v-model="inputName" type="text" />
      {{ inputName }}
      <input v-model="check" type="checkbox" />
      {{ check }}
    </div>

    <workspace-list-item name="Ushio Shugo" />
    <workspace-list-item name="Tanaka Satoshi" is-respected />
    <workspace-list-item :name="name" />
    <workspace-list-item name="name" />
    <workspace-list-item :name="inputName" :is-respected="check" />
    <workspace-list-item />
    <workspace-list-item />
    <workspace-list-item is-respected /> -->
  </section>
</template>

<script>
// import WorkspaceListItem from '~/components/workspace/ListItem'
import WorkspaceInputForm from '~/components/workspace/InputForm'

export default {
  name: 'InspirePage',
  components: {
    // WorkspaceListItem,
    WorkspaceInputForm,
  },
  data: () => {
    return {
      name: 'Ushio Shugo',
      inputName: '',
      check: false,
      formValue: {
        name: 'Please input here your name',
        job: 'example: Engineer',
      },
    }
  },
  methods: {
    // onInputInputForm(v) {
    //   this.formValue = v
    // },
    onClickButton(e) {
      this.$axios.$post('https://example.com', {
        value: this.formValue,
      })
    },
    onAbcd(e) {
      console.log(e)
    },
  },
}
</script>
