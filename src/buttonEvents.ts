import {setCurrentlineW,setMode,redo,undo,setColorCustom,setCurrentFill,getCurrentFill,getIfShapesEmpty,getIfUndoEmpty } from "./index.js";

const saveButton = document.getElementById("saveButton") as HTMLElement;
saveButton.addEventListener("click", (e) => {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = (document.getElementById('canvas') as HTMLCanvasElement).toDataURL()
    link.click();
})
const saveButtonMobile = document.getElementById("saveButtonMobile") as HTMLElement;
saveButtonMobile.addEventListener("click", (e) => {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = (document.getElementById('canvas') as HTMLCanvasElement).toDataURL()
    link.click();
})

const brushButton = document.getElementById("brushButton") as HTMLInputElement;
brushButton.addEventListener("click", (e) => {
    unfokusButtons();
    brushButton.src = "Hover_Buttons/brush_hover.png";
    setMode('bru');
})
const brushButtonMobile = document.getElementById("brushButtonMobile") as HTMLInputElement;
brushButtonMobile.addEventListener("click", (e) => {
    unfokusButtons();
    brushButtonMobile.src = "Hover_Buttons/brush_hover.png";
    setMode('bru');
})

const lineButton = document.getElementById("lineButton") as HTMLInputElement;
lineButton.addEventListener("click", (e) => {
    unfokusButtons();
    lineButton.src = "Hover_Buttons/line_hover.png";
    setMode('lin');
})
const lineButtonMobile = document.getElementById("lineButtonMobile") as HTMLInputElement;
lineButtonMobile.addEventListener("click", (e) => {
    unfokusButtons();
    lineButtonMobile.src = "Hover_Buttons/line_hover.png";
    setMode('lin');
})

const circleButton = document.getElementById("circleButton") as HTMLInputElement;
circleButton.addEventListener("click", (e) => {
    unfokusButtons();
    circleButton.src = "Hover_Buttons/circle_hover.png";
    setMode('cir');
})
const circleButtonMobile = document.getElementById("circleButtonMobile") as HTMLInputElement;
circleButtonMobile.addEventListener("click", (e) => {
    unfokusButtons();
    circleButtonMobile.src = "Hover_Buttons/circle_hover.png";
    setMode('cir');
})

const rectangleButton = document.getElementById("recktangleButton") as HTMLInputElement;
rectangleButton.addEventListener("click", (e) => {
    unfokusButtons();
    rectangleButton.src = "Hover_Buttons/recktangle_hover.png";
    setMode('rec');
})
const rectangleButtonMobile = document.getElementById("recktangleButtonMobile") as HTMLInputElement;
rectangleButtonMobile.addEventListener("click", (e) => {
    unfokusButtons();
    rectangleButtonMobile.src = "Hover_Buttons/recktangle_hover.png";
    setMode('rec');
})

const eraserButton = document.getElementById("rubberButton") as HTMLInputElement;
eraserButton.addEventListener("click", (e) => {
    unfokusButtons();
    eraserButton.src = "Hover_Buttons/rubber_hover.png";
   setMode('era');

})
const eraserButtonMobile = document.getElementById("rubberButtonMobile") as HTMLInputElement;
eraserButtonMobile.addEventListener("click", (e) => {
    unfokusButtons();
    eraserButtonMobile.src = "Hover_Buttons/rubber_hover.png";
    setMode('era');
})

const blueButton = document.getElementById("blueButton") as HTMLElement;
blueButton.addEventListener("click", (e) => {
    setColorCustom('#0000FF');
})
const blueButtonMobile = document.getElementById("blueButtonMobile") as HTMLElement;
blueButtonMobile.addEventListener("click", (e) => {
    setColorCustom('#0000FF');
})

const redButton = document.getElementById("redButton") as HTMLElement;
redButton.addEventListener("click", (e) => {
    setColorCustom('#FF0000');
})
const redButtonMobile = document.getElementById("redButtonMobile") as HTMLElement;
redButtonMobile.addEventListener("click", (e) => {
    setColorCustom('#FF0000');
})

const greenButton = document.getElementById("greenButton") as HTMLElement;
greenButton.addEventListener("click", (e) => {
    setColorCustom('#009b00');
})
const greenButtonMobile = document.getElementById("greenButtonMobile") as HTMLElement;
greenButtonMobile.addEventListener("click", (e) => {
    setColorCustom('#009b00');
})

const pinkButton = document.getElementById("pinkButton") as HTMLElement;
pinkButton.addEventListener("click", (e) => {
    setColorCustom('#f200ff');
})
const pinkButtonMobile = document.getElementById("pinkButtonMobile") as HTMLElement;
pinkButtonMobile.addEventListener("click", (e) => {
    setColorCustom('#f200ff');
})

const yellowButton = document.getElementById("yellowButton") as HTMLElement;
yellowButton.addEventListener("click", (e) => {
    setColorCustom('#ffe000');
})
const yellowButtonMobile = document.getElementById("yellowButtonMobile") as HTMLElement;
yellowButtonMobile.addEventListener("click", (e) => {
    setColorCustom('#ffe000');
})

const undoButton = document.getElementById("undoButton") as HTMLInputElement;
undoButton.addEventListener("click", (e) => {
    undo();
});

const undoButtonMobile = document.getElementById("undoButtonMobile") as HTMLInputElement;
undoButtonMobile.addEventListener("click", (e) => {
    undo();
});

const redoButton = document.getElementById("redoButton") as HTMLInputElement;
redoButton.addEventListener("click", (e) => {
    redo();
});

const redoButtonMobile = document.getElementById("redoButtonMobile") as HTMLInputElement;
redoButtonMobile.addEventListener("click", (e) => {
    redo();

});

const colorPicker = document.getElementById("colorPicker") as HTMLInputElement;
const colorValue = document.getElementById("colorValue") as HTMLSpanElement;
colorPicker.addEventListener("input", (e) => {
    setColorCustom(colorPicker.value);
})

const colorPickerMobile = document.getElementById("colorPickerMobile") as HTMLInputElement;
const colorValueMobile = document.getElementById("colorValueMobile") as HTMLSpanElement;
colorPickerMobile.addEventListener("input", (e) => {
    setColorCustom(colorPickerMobile.value);
})

const slider = document.getElementById("slider") as HTMLInputElement;
const sliderValue = document.getElementById("sliderValue") as HTMLSpanElement;
slider.addEventListener("input", (e) => {
    setCurrentlineW(parseInt(slider.value));
})

const sliderMobile = document.getElementById("sliderMobile") as HTMLInputElement;
const sliderValueMobile = document.getElementById("sliderValueMobile") as HTMLSpanElement;
sliderMobile.addEventListener("input", (e) => {
    setCurrentlineW(parseInt(sliderMobile.value));
})

const fillButton = document.getElementById("fillButton") as HTMLInputElement;
fillButton.addEventListener("click", (e) => {
    setCurrentFill();
    updateFillButton();
})
const fillButtonMobile = document.getElementById("fillButtonMobile") as HTMLInputElement;
fillButtonMobile.addEventListener("click", (e) => {
    setCurrentFill();
    updateFillButton();
})

function updateFillButton(){
    if(getCurrentFill()){
        fillButton.src = "Hover_Buttons/fill_hover.png";
        fillButtonMobile.src = "Hover_Buttons/fill_hover.png";
    } else {
        fillButton.src = "Color Images/fill.png";
        fillButtonMobile.src = "Color Images/fill.png";
    }
}

const pointButton = document.getElementById("pointerButton") as HTMLInputElement;
pointButton.addEventListener("click", (e) => {
    unfokusButtons();
    pointButton.src = "Hover_Buttons/pointer_hover.png";
    setMode('poi');
})
const pointButtonMobile = document.getElementById("pointerButtonMobile") as HTMLInputElement;
pointButtonMobile.addEventListener("click", (e) => {
    unfokusButtons();
    pointButtonMobile.src = "Hover_Buttons/pointer_hover.png";
    setMode('poi');
})

export function unfokusButtons(){
    brushButton.src = "Tools/paint-brush.png";
    lineButton.src = "Shape/line.png";
    circleButton.src = "Shape/circle.png";
    rectangleButton.src = "Shape/recktangle.png";
    eraserButton.src = "Tools/rubber.png";
    pointButton.src = "Tools/pointer.png";

    brushButtonMobile.src = "Tools/paint-brush.png";
    lineButtonMobile.src = "Shape/line.png";
    circleButtonMobile.src = "Shape/circle.png";
    rectangleButtonMobile.src = "Shape/recktangle.png";
    eraserButtonMobile.src = "Tools/rubber.png";
    pointButtonMobile.src = "Tools/pointer.png";
}

export function setColorPicker(color: string){
    colorPicker.value = color;
    colorValue.innerText = color;

    colorPickerMobile.value = color;
    colorValueMobile.innerText = color;
}

export function setSliderValue(value: number){
    slider.value = value.toString();
    sliderValue.innerText = value.toString();
    sliderMobile.value = value.toString();
    sliderValueMobile.innerText = value.toString();
}

export function updateUndoRedoButton() {
    const UndoEmpty: boolean = getIfShapesEmpty();
    const RedoEmpty: boolean = getIfUndoEmpty();


    if (UndoEmpty) {
        undoButton.src = "Hover_Buttons/Undo_hover.png";
        undoButtonMobile.src = "Hover_Buttons/Undo_hover.png";
    } else {
        undoButton.src = "Tools/UndoButton.png";
        undoButtonMobile.src = "Tools/UndoButton.png";
    }

    if (RedoEmpty) {
        redoButton.src = "Hover_Buttons/Redo_hover.png";
        redoButtonMobile.src = "Hover_Buttons/Redo_hover.png";
    } else {
        redoButton.src = "Tools/RedoButton.png";
        redoButtonMobile.src = "Tools/RedoButton.png";
    }
}