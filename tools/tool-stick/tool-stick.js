import {TOOLS, toolStack} from '../tools';

let allSticks = [];

const toolStick = function() {
  const tool = new paper.Tool();
  tool.name = TOOLS.TOOL_STICK;

  let path;

  tool.onMouseDown = function(event) {
    path = new paper.Path.Circle({
      center: event.point,
      radius: 5,
      fillColor: '#b06042'
    });
    path.typeOfTool = TOOLS.TOOL_STICK;
    allSticks = [...allSticks, path];
  };

  return tool;
};

function removeStick(stickItem) {
  allSticks = allSticks.filter(item => item.id !== stickItem.id);
  stickItem.remove();
}

function selectToolStick() {
  toolStack.selectToolByName(TOOLS.TOOL_STICK);
}

export {
  toolStick,
  selectToolStick,
  allSticks,
  removeStick
};