import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for poplin.ps.Intent.
 */
class Intent {

  /**
   * Get the value (aliases code).
   * @returns {code} The code
   */
  get value() {
    return this._code;
  }

  /**
   * Set the value (aliases code).
   * This field/value is required.
   * @param {code} value - The code
   */
  set value(value) {
    this._code = value;
  }

  /**
   * Set the value (aliases code) and return 'this' for chaining.
   * This field/value is required.
   * @param {code} value - The code
   * @returns {Intent} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the code.
   * @returns {code} The code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code.
   * This field/value is required.
   * @param {code} code - The code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the code and return 'this' for chaining.
   * This field/value is required.
   * @param {code} code - The code
   * @returns {Intent} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Intent class.
   * The JSON must be valid against the Intent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Intent} An instance of Intent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Intent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Intent class to a JSON object.
   * The JSON is expected to be valid against the Intent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/poplin/ps/Intent' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default Intent;