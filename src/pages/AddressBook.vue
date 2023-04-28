<template>
  <q-page class="bg-grey-3 column">
    <q-card-section class="text-h4 text-center text-primary">
      {{ header }}
    </q-card-section>
    <div class="row q-pa-sm bg-white" >
      <q-input
        v-model="newName"
        class="col"
        bg-color="white"
        filled
        type="text"
        aria-placeholder="newName"
        label="Name"
        dense>
      </q-input>
      <q-input
        v-model="newNum"
        class="col"
        bg-color="white"
        filled
        aria-placeholder="newNum"
        label="PhoneNumber"
        type="number"
        spinner="invisible"
        dense>
      </q-input>
      <q-btn @click="addNew" round dense flat icon="add"></q-btn>
    </div>

    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="item in tasks"
        :key="item.name"
        @click="item.done = item.done == 'Y' ? 'N' : 'Y'"
        :class="{'done bg-blue-1': item.done == 'Y'}"
        v-ripple
        clickable>
        <q-item-section avatar>
          <q-checkbox
            v-model="item.done"
            color="primary"
            class="no-pointer-event"
            true-value="Y"
            false-value="N"
            dense></q-checkbox>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label>{{ item.num }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="item.done == 'Y'" side>
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="removeItem(item.name)"
          ></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import useAddressBook from "src/stores/addressbook";
import {mapActions, mapState} from "pinia";

  export default {
    name: "AddressBook",
    title: "Address list",
    data() {
      return {
        header: "주소록",
        NewName: "",
        NewNum: "",
        editTask : null,
        origin : null,
      };
    },

    computed: {
      ...mapState(useAddressBook, ["tasks"]),
    },

    mounted() {
      this.listData();
    },

    methods: {
      ...mapActions(useAddressBook, ["insertData", "removeData", "listData", "editData"]),

      async addNew() {
        if(this.newName && this.newNum) {
          this.insertData(this.newName, this.newNum);
          await this.$q.notify({
            message: `${this.newName} 추가하셨습니다`,
            icon: "home",
            color: "primary",
          });
          this.newName="";
          this.newNum="";
        } else {
          await this.$q.notify({
            message: '내용은 필수 입력입니다',
            icon: "warning",
            color: "red",
          });
        }
      },

      removeItem(name) {
        this.removeData(name);
        this.newName="";
        this.newNum="";
      },
    }
  }
</script>

<style lang="scss">
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
</style>
