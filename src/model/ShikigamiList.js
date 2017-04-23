import ShikigamiBean from "./ShikigamiBean";
import {log} from "../utils/common";

// 普通式神列表
const COMMON = "commonList";

// 依据首字母进行分类的式神列表
const SORTBYINITIAL = "sortByInitialList";

export default class ShikigamiList {

  initData;

  commonList = [];

  sortByInitialList = new Set();

  constructor(data) {
    this.initData = data;

    data.forEach((shikigami, index) => {
      try {
        this.commonList.push(new ShikigamiBean(shikigami));
      } catch (e) {
        log('第' + index + '位的式神初始化失败!');
      }
    });

    this.sortByInitial();
  }

  // 使用首字母对list中数据进行分类
  sortByInitial() {
    this.commonList.forEach((shikigami, index) => {
      let initial = shikigami.initial,
          sortByInitialList = this.sortByInitialList;

      if (!sortByInitialList[initial]) {
        sortByInitialList[initial] = [shikigami];
      } else {
        sortByInitialList[initial].push(shikigami);
      }
    });
  }

  filter(value) {
    if (!value) return this.sortByInitialList;

    if (/[A-Z]/i.test(value.charAt(0))) {
      const filterInitial = value.charAt(0).toUpperCase();
      const result = this.sortByInitialList[filterInitial];
      if (result) {
        return {[filterInitial]: result};
      }
    }

    for (let shikigami of this.commonList) {
      if (shikigami.name === value) {
        return {[shikigami.initial]: [shikigami]};
      }
    }

    return {};
  }

  get(key) {
    return this[key];
  }
}

export {
  COMMON,
  SORTBYINITIAL
}
