// var traverseDomAndCollectElements = function (matchFunc, startEl) {
//   var resultSet = [];

//   if (typeof startEl === "undefined") {
//     startEl = document.body;
//   }

//   // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
//   // usa matchFunc para identificar elementos que matchien

//   // TU CÓDIGO AQUÍ


  


  
// };
var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  var children = startEl.children;
  for (var i = 0; i < children.length; i++) {
    var childResultSet = traverseDomAndCollectElements(matchFunc, children[i]);
    resultSet = resultSet.concat(childResultSet);
  }

  return resultSet;
};


// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if(selector[0] === '#'){
    return 'id'; 
  }
  else if(selector[0]=== '.'){
    return 'class';
  }
  else  {
    for (let i = 1; i < selector.length; i++) {
      if( selector[i] == '.' ){ return 'tag.class' }
    }
      return 'tag';

  }
};
console.log(selectorTypeMatcher('sd')
)

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    var id = selector.slice(1); // remover el "#" del inicio del selector
    matchFunction = function (element) {
      return element.id === id;
    };
  } else if (selectorType === "class") {
    var className = selector.slice(1); // remover el "." del inicio del selector
    matchFunction = function (element) {
      return element.classList.contains(className);
    };
  } else if (selectorType === "tag.class") {
    var tagAndClass = selector.split(".");
    var tag = tagAndClass[0];
    var className = tagAndClass[1];
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === tag && element.classList.contains(className);
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

matchFunctionMaker('asd')
var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
