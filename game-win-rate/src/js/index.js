import '../scss/index.scss'
import { createApp, ref, computed } from 'vue';

createApp({
  setup() {

    const all = ref("");
    const win = ref("");
    const wish = ref("");
    const year = new Date().getFullYear();

    const winPercent = computed(() => win.value / 100);
    const wishPercent = computed(() => wish.value / 100);
    const totalWin = computed(() => all.value * winPercent.value);
    const totalWinDisplay = computed(() => Math.round(totalWin.value));
    const gap = computed(() => wishPercent.value - winPercent.value);
    const a = computed(() => 1 - wishPercent.value);
    const more = computed(() => {
      const result = Math.ceil(all.value * gap.value / a.value);
      return result > 0 ? result : 0;
    });

    return {
      all,
      win,
      wish,
      year,
      totalWinDisplay,
      more
    };
  }
}).mount('#app');
