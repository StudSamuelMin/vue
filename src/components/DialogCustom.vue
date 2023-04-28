<template>
  <q-dialog v-model="dialog">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6">내용 수정</div>
        <div class="text-subtitle2">{{ editTask.id }}</div>
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="editTask.title"
          @keyup.enter="onOkClick"
        ></q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          color="primary"
          unelevated
          dense
          label="Ok"
          @click="onOkClick"/>

        <q-btn
        unelevated
        dense
        color="primary"
        label="Cancel"
        @Click="onCancelClick"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
  export default {
    name: "DialogCustom",
    props: ['editTask', 'origin'],
    emits: ['onInput'],
    data() {
      return {
        dialog: false,
      };
    },

    mounted() {

    },

    watch: {

    },

    methods: {
      onOkClick() {
        this.$emit('onInput', this.editTask);
        this.dialog = false;
      },

      onCancelClick() {
        this.editTask.title = this.origin,
        this.dialog = false;
      },
    },
  };
</script>

<style>
</style>
