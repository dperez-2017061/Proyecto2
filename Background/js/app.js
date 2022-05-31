"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function change() {
    return __awaiter(this, void 0, void 0, function* () {
        let color = '#' + Math.floor(Math.random() * 123165487984).toString(16).slice(2, 8);
        let back = document.querySelector('body');
        back.style.backgroundColor = color;
        document.querySelector('h2').innerText = color;
    });
}
