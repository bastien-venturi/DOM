let importants = document.querySelectorAll('.important');
importants.forEach(element => {
    element.setAttribute('title', 'This is an important item');
});



let imgTags = document.querySelectorAll('img');
imgTags.forEach(function(img) {
  if (!img.classList.contains('important')) {
    img.style.display = 'none';
  }
});



let paras = document.querySelectorAll('p');
paras.forEach(function(para) {
    let content = para.textContent;
    if (para.classList.length > 0) {
     console.log(`Class: ${para.className}, Content: ${content}`);
    } else {
    console.log(`Content: ${content}`);
    }
  });


  function rand() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  paras.forEach(function(para) {
    if (para.classList.length === 0) {
      para.style.color = rand();
    }
  });
