import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for poplin.ps.Task.
 */
class Task {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {Task} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Intent.
   * @returns {Intent} The poplin.ps.Intent
   */
  get intent() {
    return this._intent;
  }

  /**
   * Set the Intent.
   * This field/value is required.
   * @param {Intent} intent - The poplin.ps.Intent
   */
  set intent(intent) {
    this._intent = intent;
  }

  /**
   * Set the Intent and return 'this' for chaining.
   * This field/value is required.
   * @param {Intent} intent - The poplin.ps.Intent
   * @returns {Task} this.
   */
  withIntent(intent) {
    this.intent = intent; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Task class.
   * The JSON must be valid against the Task JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Task} An instance of Task populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Task();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Task class to a JSON object.
   * The JSON is expected to be valid against the Task JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/poplin/ps/Task' };
    if (this.intent != null) {
      inst['Intent'] = typeof this.intent.toJSON === 'function' ? this.intent.toJSON() : this.intent;
    }
    return inst;
  }
}
export default Task;
