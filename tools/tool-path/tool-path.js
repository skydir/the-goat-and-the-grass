import {TOOLS, toolStack} from '../tools';

const toolPath = function() {
  const tool = new paper.Tool();
  tool.name = TOOLS.TOOL_PATH;

  let path;

  tool.onMouseDown = function(event) {
    path = new paper.Path();
    path.strokeColor = '#424242';
    path.strokeWidth = 4;
    path.add(event.point);
    path.typeOfTool = TOOLS.TOOL_PATH;
  };

  tool.onMouseDrag = function(event) {
    path.add(event.point);
  };

  return tool;
};

function selectToolPath() {
  toolStack.selectToolByName(TOOLS.TOOL_PATH);
}

export {
  toolPath,
  selectToolPath
};