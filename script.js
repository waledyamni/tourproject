Array.from(document.querySelectorAll
 (".navigation-button")).forEach(item) => {
  item.onclick = ()=> {
      item.parentElement.classList.toggle("change");
  };  
});

