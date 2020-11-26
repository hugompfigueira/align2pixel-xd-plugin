/*
 * Align 2 Pixel
 *
 * Align 2 Pixel is a lightweight plugin that allows you to quickly
 * align the selected objects to the grid. Until Adobe XD allows you
 * to change or edit shortcuts, this plugin will come in handy to quickly
 * perform an action that usually takes more than 2 clicks.
 *
 * Simply use the shortcut Cmd + Shift + X (or Ctrl + Shift + X for Win)
 *
 *
 * November 2020
 *
 * Created by Hugo Figueira
 *
 * Website    https://hugofigueira.pt
 * Dribbble   https://dribbble.com/hfigueira_1
 * GitHub     https://github.com/hugompfigueira
 * Instagram  https://www.instagram.com/hugompfigueira/
 *
 * Contribute on
 * https://github.com/hugompfigueira/align2pixel-xd-plugin
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
