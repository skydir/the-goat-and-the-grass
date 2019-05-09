import {initializePaper} from './paper/paper';
import {selectToolPointer} from './tools/tool-pointer/tool-pointer';
import {selectToolPath} from './tools/tool-path/tool-path';
import {selectToolCircle} from './tools/tool-circle/tool-circle';
import {selectToolStick} from './tools/tool-stick/tool-stick';
import {initializeTools} from './tools/tools';


//TODO onclick="selectToolPath()" не работает с parcel почему-то, поэтому listener
//https://github.com/parcel-bundler/parcel/issues/1618
document.getElementById('toolPointer').addEventListener('click', selectToolPointer);
document.getElementById('toolPath').addEventListener('click', selectToolPath);
document.getElementById('toolCircle').addEventListener('click', selectToolCircle);
document.getElementById('toolStick').addEventListener('click', selectToolStick);

initializePaper();
initializeTools();