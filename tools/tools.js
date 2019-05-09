import {toolPointer} from './tool-pointer/tool-pointer';
import {toolPath} from './tool-path/tool-path';
import {toolCircle} from './tool-circle/tool-circle';
import {toolStick} from './tool-stick/tool-stick';

const TOOLS = {
  TOOL_POINTER: 'toolPointer',
  TOOL_PATH: 'toolPath',
  TOOL_CIRCLE: 'toolCircle',
  TOOL_STICK: 'toolStick'
};

class ToolStack {
  constructor(tools) {
    this.tools = tools.map(function(tool) { return tool();});
    this.selectedTool = null;
    this.previousSelectedTool = null;

    this.selectToolByName(TOOLS.TOOL_PATH);
  }

  activateTool(tool) {
    tool.activate();
  }

  selectToolByName(toolName) {
    if (this.selectedTool && toolName === this.selectedTool.name) return;

    this.previousSelectedTool = this.selectedTool;
    this.selectedTool = this.tools.find(tool => tool.name === toolName);

    this.setInactiveBorderForTool(this.previousSelectedTool);
    this.setActiveBorderForTool(this.selectedTool);

    this.activateTool(this.selectedTool);
  }

  setActiveBorderForTool(tool) {
    if (!tool) return;

    document.getElementById(tool.name).style.borderColor = '#4cff13';
  }

  setInactiveBorderForTool(tool) {
    if (!tool) return;

    document.getElementById(tool.name).style.borderColor = '#ff0054';
  }
}

let toolStack = null;

function initializeTools() {
  toolStack = new ToolStack([
    toolPointer,
    toolPath,
    toolCircle,
    toolStick
  ]);
}

export {
  toolStack,
  initializeTools,
  TOOLS
};