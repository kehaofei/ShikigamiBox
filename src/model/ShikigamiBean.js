import {log} from "../utils/common";

const baseParams = ['name', 'icon'];

export default class ShikigamiBean {

  constructor(shikigami) {

    for (let i = 0, l = baseParams.length; i < l; i++) {
      let bp = baseParams[i];
      if (!shikigami[bp]) {
        log('式神属性缺失，初始化失败，缺失属性为："' + bp + '"');
        throw new Error("10000");
      }
    }

    this.name = shikigami.name;
    this.level = shikigami.level;
    this.icon = shikigami.icon;
    this.initial = shikigami.initial;
    this.clue = shikigami.clue;
  }

}
