class BaseDictEnum {
  constructor(key, code, value, label) {
    this.key = key;
    this.code = code;
    this.value = value;
    this.label = label;
  }

  toString() {
    return this.key;
  }
}

export default BaseDictEnum;
