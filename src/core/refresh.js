import fetchIntroSteps from "./fetchIntroSteps";


import setHelperLayerPosition from "./setHelperLayerPosition";
import { _recreateBullets, _updateProgressBar } from "./showElement";

/**
 * Update placement of the intro objects on the screen
 * @api private
 * @param {boolean} refreshSteps to refresh the intro steps as well
 */
export default function refresh(refreshSteps) {
  const referenceLayer = document.querySelector(
    ".introjs-tooltipReferenceLayer"
  );
  const helperLayer = document.querySelector(".introjs-helperLayer");
  const disableInteractionLayer = document.querySelector(
    ".introjs-disableInteraction"
  );

  // re-align intros
  setHelperLayerPosition.call(this, helperLayer);
  setHelperLayerPosition.call(this, disableInteractionLayer);

  if (refreshSteps) {
    this._introItems = fetchIntroSteps.call(this, this._targetElement);
    _recreateBullets.call(
      this,
      referenceLayer,
      this._introItems[this._currentStep]
    );
    _updateProgressBar.call(this, referenceLayer);
  }
  return this;
}
