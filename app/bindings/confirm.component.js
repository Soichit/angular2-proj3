System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n        <h1>You submitted the following details. Is this correct?</h1>\n        <p> Your name is <span class=\"highlight\">{{myself.name}}</span> and you're <span class=\"highlight\">\n        {{myself.age}}</span> years old. Please click on 'Confirm' if you have made any changes to this information.</p>\n\n        <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br />\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <br />\n        <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Submit</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO29CQUNJLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUErQixDQUFDO2dCQXNCaEUsQ0FBQztnQkFwQkcsa0NBQU8sR0FBUDtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBL0NMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxrNEJBa0JUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztvQ0FBQTtnQkE0QkYsdUJBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELCtDQTBCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktY29uZmlybScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMT5Zb3Ugc3VibWl0dGVkIHRoZSBmb2xsb3dpbmcgZGV0YWlscy4gSXMgdGhpcyBjb3JyZWN0PzwvaDE+XHJcbiAgICAgICAgPHA+IFlvdXIgbmFtZSBpcyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPnt7bXlzZWxmLm5hbWV9fTwvc3Bhbj4gYW5kIHlvdSdyZSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPlxyXG4gICAgICAgIHt7bXlzZWxmLmFnZX19PC9zcGFuPiB5ZWFycyBvbGQuIFBsZWFzZSBjbGljayBvbiAnQ29uZmlybScgaWYgeW91IGhhdmUgbWFkZSBhbnkgY2hhbmdlcyB0byB0aGlzIGluZm9ybWF0aW9uLjwvcD5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZ2VcIj5Zb3VyIEFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV09XCJteXNlbGYuYWdlXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXY+RmlsbGVkIG91dDoge3tpc0ZpbGxlZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XHJcbiAgICAgICAgPGRpdj5WYWxpZDoge3tpc1ZhbGlkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgYCxcclxuICAgIGlucHV0czogWydteXNlbGYnXSxcclxuICAgIG91dHB1dHM6IFsnY29uZmlybWVkJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50IHtcclxuICAgIG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XHJcbiAgICBpc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgY29uZmlybWVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTogc3RyaW5nLCBhZ2U6IHN0cmluZ30+KCk7XHJcblxyXG4gICAgb25LZXl1cCgpIHtcclxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15c2VsZi5hZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybSgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZC5lbWl0KHRoaXMubXlzZWxmKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
