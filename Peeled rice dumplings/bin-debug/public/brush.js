var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TouchBrushEvent = (function (_super) {
    __extends(TouchBrushEvent, _super);
    function TouchBrushEvent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    TouchBrushEvent.prototype.onAddToStage = function (event) {
        //添加显示文本
        this.drawText();
        //绘制一个透明度为1的绿色矩形，宽高为100*80
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00, 1);
        spr1.graphics.drawRect(0, 0, 640, 640);
        spr1.graphics.endFill();
        spr1.width = 640;
        spr1.height = 640;
        this.addChild(spr1);
        //设置显示对象可以相应触摸事件
        spr1.touchEnabled = true;
        //注册事件
        spr1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTaps, this, true);
    };
    TouchBrushEvent.prototype.onTouch = function (evt) {
        this.txt.text += "\n点击了spr1";
    };
    TouchBrushEvent.prototype.onTouchTap = function (evt) {
        this.txt.text += "\n容器冒泡侦听\n---------";
    };
    TouchBrushEvent.prototype.onTouchTaps = function (evt) {
        this.txt.text += "\n容器捕获侦听";
    };
    TouchBrushEvent.prototype.drawText = function () {
        this.txt = new egret.TextField();
        this.txt.size = 12;
        this.txt.x = 250;
        this.txt.width = 200;
        this.txt.height = 200;
        this.txt.text = "事件文字";
        this.addChild(this.txt);
    };
    return TouchBrushEvent;
}(egret.DisplayObjectContainer));
__reflect(TouchBrushEvent.prototype, "TouchBrushEvent");
//# sourceMappingURL=brush.js.map