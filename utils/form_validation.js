// 独自バリデーション
/*
 * 文字数チェック
 * @type {String, Number}
 * return {Boolen}
 */
export function isLength(data, length) {
  if (data.lenght > length) return false;
  return true;
}

/*
 * メールアドレスチェック
 * @type {String}
 * return {Boolen}
 */
export function isMail(data) {
  const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return REGEX_EMAIL.test(data);
}
