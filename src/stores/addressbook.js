import {defineStore} from "pinia";
import {uid} from "quasar";
import {LocalStorage} from 'quasar';

export default defineStore("addressbook", {
  state: () => ({
    tasks:[],
  }),

  getters: {

  },

  actions: {
    listData() {
      this.tasks = LocalStorage.getItem("addressbook");
    },

    insertData(name, num) {
      if(this.tasks) {
        this.tasks.unshift({
          id: uid(),
          name,
          num,
          done:'N'
        });
      } else {
        this.tasks=[];
        this.tasks.push({
          id: uid(),
          name,
          num,
          done:'N'
        })
      }
      LocalStorage.set("addressbook", this.tasks);
    },

    removeData(name) {
      const idx = this.tasks.findIndex(task => task.name == name);
      this.tasks.splice(idx, 1);
      LocalStorage.set("addressbook", this.tasks);
    },
  },
})
