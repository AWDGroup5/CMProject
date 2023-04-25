export default {
  data() {
    return {
      sidePanelWidth: 0,
    };
  },
  methods: {
    openSidePanel() {
      this.sidePanelWidth = 250;
    },
    closeSidePanel() {
      this.sidePanelWidth = 0;
    },
  },
};
