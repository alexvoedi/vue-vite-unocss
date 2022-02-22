import { defineStore } from "pinia";

export type BaseStore = any;

export const useBaseStore = defineStore("base", {
  state: (): BaseStore => ({}),

  actions: {},

  getters: {},
});
