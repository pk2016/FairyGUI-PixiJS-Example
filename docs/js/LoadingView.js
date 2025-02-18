var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingView = /** @class */ (function (_super) {
        __extends(LoadingView, _super);
        function LoadingView() {
            var _this = _super.call(this) || this;
            _this.createView();
            return _this;
        }
        LoadingView.prototype.createView = function () {
            this.textField = new fgui.GTextField();
            this.textField.width = 500;
            this.textField.fontSize = 26;
            this.textField.x = this.textField.width * .5;
            this.textField.y = this.textField.height * .5 - 40;
            this.addChild(this.textField);
            this.textField.addRelation(this, 3 /* Center_Center */);
            this.textField.addRelation(this, 10 /* Middle_Middle */);
        };
        LoadingView.prototype.setProgress = function (p) {
            this.textField.text = "Loading..." + Math.round(p) + "%";
        };
        return LoadingView;
    }(fgui.GComponent));
    exports.LoadingView = LoadingView;
});
//# sourceMappingURL=LoadingView.js.map