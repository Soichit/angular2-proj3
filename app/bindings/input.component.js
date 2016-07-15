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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
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
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        <h1>Your details, please</h1>\n        <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br />\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <br />\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFtQmhFLENBQUM7Z0JBakJHLGdDQUFPLEdBQVA7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQTVDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsbW5CQWVUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztrQ0FBQTtnQkF5QkYscUJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELDJDQXVCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPllvdXIgZGV0YWlscywgcGxlYXNlPC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlZhbGlkOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6IFsnbXlzZWxmJ10sXHJcbiAgICBvdXRwdXRzOiBbJ3N1Ym1pdHRlZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQge1xyXG4gICAgbXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcclxuICAgIGlzRmlsbGVkID0gZmFsc2U7XHJcbiAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICBzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcclxuXHJcbiAgICBvbktleXVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlzZWxmLmFnZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15c2VsZik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
