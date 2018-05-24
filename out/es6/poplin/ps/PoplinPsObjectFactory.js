import { getNamespaceAndName } from '../../json-helper';
import Intent from './Intent';
import Task from './Task';

/**
 * Generated object factory for the poplin.ps namespace.
 */
export default class PoplinPsObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'poplin.ps') {
      throw new Error(`Unsupported type in PoplinPsObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Intent': return Intent.fromJSON(json);
    case 'Task': return Task.fromJSON(json);
    default: throw new Error(`Unsupported type in PoplinPsObjectFactory: ${type}`);
    }
  }
}
