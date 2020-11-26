/*
 * Align 2 Pixel
 *
 * Align 2 Pixel is a lightweight plugin that allows you to quickly
 * align the selected objects to the grid. Until Adobe XD allows you
 * to change or edit shortcuts, this plugin will come in handy to quickly
 * perform an action that usually takes more than 2 clicks.
 *
 */

const commands = require("commands");

function alignToPixel() {
  // Align to Pixel Grid command
  commands.alignToPixelGrid();
}

module.exports = {
  commands: {
    alignToPixel,
  },
};
