import { getNamespaceAndName } from './json-helper';
import PoplinPsObjectFactory from './poplin/ps/PoplinPsObjectFactory';

/**
 * Generated top-level object factory for SHR classes.
 */
export default class ObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace } = getNamespaceAndName(json, type);
    switch (namespace) {
    case 'poplin.ps': return PoplinPsObjectFactory.createInstance(json, type);
    default: throw new Error(`Unsupported namespace: ${namespace}`);
    }
  }
}
