import { defineStore } from "pinia";

export type BaseStore = any;

export const useBaseStore = defineStore("base-store", {
  state: (): BaseStore => ({}),

  actions: {},

  getters: {},
});
