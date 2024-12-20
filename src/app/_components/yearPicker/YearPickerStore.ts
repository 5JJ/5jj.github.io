import { MIDDLE_INDEX } from "./constants";

class YearPickerStore {
  touchY = 0;
  translateY = 0;
  animating = false;
  currentIndex = MIDDLE_INDEX;
  years: number[] = [];
  isInit: boolean = false;
  moveToTimer: ReturnType<typeof setTimeout>;

  constructor({
    selectedYear,
    years,
  }: {
    selectedYear: number;
    years: number[];
  }) {
    this.update({ selectedYear, years });
    this.moveToTimer = 0 as unknown as NodeJS.Timeout;
    this.isInit = true;
  }

  get currentYear() {
    return this.years[this.currentIndex];
  }

  update({ selectedYear, years }: { selectedYear?: number; years?: number[] }) {
    const targetYear =
      typeof selectedYear === "number" ? selectedYear : this.currentYear;

    if (years) {
      this.years = years;
    }
    this.currentIndex = this.years.findIndex((year) => year === targetYear);
    if (this.currentIndex === -1) this.currentIndex = 0;
  }

  fixOver() {
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    } else if (this.currentIndex >= this.years.length) {
      this.currentIndex = this.years.length - 1;
    }
  }

  clear() {
    clearTimeout(this.moveToTimer);
  }

  isFirstIndex() {
    return this.currentIndex === 0;
  }
  isLastIndex() {
    return this.currentIndex === this.years.length - 1;
  }
}

export default YearPickerStore;
