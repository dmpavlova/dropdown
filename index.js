const books = [
    {'title': 'book1',
      'text' : 'smth',
      'metabook':'1'},
      {'title': 'book2',
      'text' : 'smth else',
      'metabook':'1'},
      {'title': 'book3',
      'text' : 'another book',
      'metabook':'2'}
  ]
  const select = document.querySelector('#books')
   
                
          let titles = books.filter(b=>b.metabook==='1').map(b=>b.title);
          console.log(titles)
  
          function showBooks(){
              for (let i = 0; i < titles.length; i++) {
                  let optn = titles[i];
                  let el = document.createElement("option");
                  el.textContent = optn;
                  el.value = optn;
                  select.appendChild(el);
              }        
          }