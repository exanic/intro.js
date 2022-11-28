import addClass from "../util/addClass";
import getOffset from "../util/getOffset";
import isFixed from "../util/isFixed";
import removeClass from "../util/removeClass";

/**
 * Update the position of the helper layer on the screen
 *
 * @api private
 * @method _setHelperLayerPosition
 * @param {Object} helperLayer
 */
export default function setHelperLayerPosition(helperLayer) {
  if (helperLayer) {
    //prevent error when `this._currentStep` in undefined
    if (!this._introItems[this._currentStep]) return;

    const currentElement = this._introItems[this._currentStep];
    const elementPosition = getOffset(
      currentElement.element,
      this._targetElement
    );
    let widthHeightPadding = this._options.helperElementPadding;

    // If the target element is fixed, the tooltip should be fixed as well.
    // Otherwise, remove a fixed class that may be left over from the previous
    // step.
    if (isFixed(currentElement.element)) {
      addClass(helperLayer, "introjs-fixedTooltip");
    } else {
      removeClass(helperLayer, "introjs-fixedTooltip");
    }

    if (currentElement.position === "floating") {
      widthHeightPadding = 0;
    }
  }
}
