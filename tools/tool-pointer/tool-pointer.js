import {TOOLS, toolStack} from '../tools';
import {removeStick} from '../tool-stick/tool-stick';

const toolPointer = function() {
  const tool = new paper.Tool();
  tool.name = TOOLS.TOOL_POINTER;

  tool.onMouseDown = function(event) {
    //снимаем выделение с текущих выделенных объектов
    paper.project.selectedItems.forEach(item => {
      item.selected = false;
    });


    const hitResults = project.hitTestAll(event.point);
    //TODO не забывать о случае, кога под указателем два объекта
    //Пока селектим первый попавшийся объект
    for (let i = 0; i < hitResults.length; i++) {
      const hitResult = hitResults[i];
      if (hitResult) {
        hitResult.item.selected = true;
        break;
      }
    }
  };

  tool.onMouseDrag = function(event) {
    paper.project.selectedItems.forEach(item => {
      //TODO при первом перемещении курсор мыши относительно объекта не должен съезжать
      item.position = event.point;
    });
  };

  tool.onKeyDown = function(event) {
    //удаляем выбранный объект
    if(event.key == 'delete') {
      paper.project.selectedItems.forEach(item => {
        switch (item.typeOfTool) {
          case TOOLS.TOOL_STICK:
            removeStick(item);
            break;
          default:
            item.remove();
        }
      });
    }
  };

  return tool;
};

function selectToolPointer() {
  toolStack.selectToolByName(TOOLS.TOOL_POINTER);
}

export {
  toolPointer,
  selectToolPointer
};