var links=document.querySelectorAll(".header-nav ul  a"),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=links[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var link=_step.value;link.addEventListener("click",clickHandler)}}catch(r){_didIteratorError=!0,_iteratorError=r}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}function clickHandler(r){r.preventDefault();var t=this.getAttribute("href"),e=document.querySelector(t).offsetTop;scroll({top:e,behavior:"smooth"})}
//# sourceMappingURL=index.6f9aa9b4.js.map
