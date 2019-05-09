import {TOOLS, toolStack} from '../tools';

const toolCircle = function() {
  const tool = new paper.Tool();
  tool.name = TOOLS.TOOL_CIRCLE;

  let path;

  tool.onMouseDown = function(event) {
    path = new paper.Path.Circle({
      center: event.point,
      radius: 30,
      fillColor: '#9C27B0'
    });
    path.typeOfTool = TOOLS.TOOL_CIRCLE;
  };

  return tool;
};

function selectToolCircle() {
  toolStack.selectToolByName(TOOLS.TOOL_CIRCLE);
}

export {
  toolCircle,
  selectToolCircle
};