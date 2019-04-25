function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  // сюда вписывать функции js head
  // console.log('DOM ready');
  // а вот эта строчка ниже чтобы svg заработал в ишаке
  svg4everybody();
});
