/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
exports.ButtonClickEvents = {
    left:  { button: 0 },
    right: { button: 2 }
};

 /** Simulate element click. Defaults to mouse left-button click event. */
exports.click = function(el, eventObj = ButtonClickEvents.left) {
   if (el instanceof HTMLElement) {
     el.click();
   } else {
     el.triggerEventHandler('click', eventObj);
   }
 }

exports.asyncData = function (data) {
    return defer(() => Promise.resolve(data));
}