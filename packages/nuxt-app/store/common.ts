import { defineStore } from "pinia";
export const useCommonStore = defineStore('commonStore', {
    state: () => ({
      enums: {},
    }),
    actions: {
      setEnums(enums: Record<string, any[]>) {
        this.enums = enums;
      }
    }
})