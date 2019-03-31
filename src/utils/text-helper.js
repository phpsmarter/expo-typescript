import emoji from "node-emoji";
import I18n from "locale";

import { t } from "utils";

export const emojifyText = text => {
  return emoji.emojify(text);
};

//NOTE   访问数和评论数的缩写方法
export const abbreviateNumber = count => {
  const thousandUnit = t("_thousandsAbbreviation", I18n.locale);

  if (count > 999) {
    return count % 1000 < 50
      ? (count / 1000).toFixed(0) + thousandUnit
      : (count / 1000).toFixed(1) + thousandUnit;
  }

  return count;
};
