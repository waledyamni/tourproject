Array.from(document.querySelectorAll
 (".navigation-button")).forEach(item => {
  item.onclick = () => {
      item.parentElement.classlist.toggle("change");
  };  
});

