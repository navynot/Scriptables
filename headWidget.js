//Colors
const COLORS = {
    bg0:'#29323c',
    bg1: '#1c1c1c',
}

const NAME = 'Tony Van';

function createWidget(data) {
    console.log('Creating widget with data', data);

    const widget = new ListWidet();

    const bgColor = new LinearGradient();
    bgColor.colors = [new Color(COLORS.bg0), new Color(COLORS.bg1)];
    bgColor.locations = [0.0, 1.0];
    widget.backgroundGradient = bgColor;
    widget.setPadding(10, 15, 15, 10);

    const stack = widget.addStack();
    stack.layoutVertically();
    stack.spacing = 4;
    stack.size = new Size(320, 0);

    return widget;
}

Script.setWidget(widget);
Script.complete();
