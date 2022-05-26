fetch("https://www.breakingbadapi.com/api/characters") //api for the get request
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    for (let charIndex = 0; charIndex < data.length; charIndex++) {
      const myData = data[charIndex];
      const wrapper = document.querySelector("#wrapper");
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      wrapper.appendChild(card);
 
      const cardImg = document.createElement("img");
      cardImg.setAttribute("class", "cardImg");
      cardImg.setAttribute("src", myData.img);
      card.appendChild(cardImg);

      const cardName = document.createElement("h3");
      cardName.innerText = myData.name;
      card.appendChild(cardName);
    
      const cardNickname = document.createElement("h4");
      cardNickname.innerText = myData.nickname;
      card.appendChild(cardNickname);
   
      const attribute1 = document.createElement("div");
      attribute1.setAttribute("class", "attribute");
      card.appendChild(attribute1);
    
      const p1 = document.createElement("p");
      p1.setAttribute("class", "p1");
      p1.innerText = "Birthday";
      attribute1.appendChild(p1);
    
      const p2 = document.createElement("p");
      p2.setAttribute("class", "p2");
      p2.innerText = myData.birthday;
      attribute1.appendChild(p2);

      const button = document.createElement("button");
      button.innerText = 'Click me';
      card.appendChild(button);

      button.addEventListener('click', function(evt){
         alert('Status: ' + myData.status);
      });
   };
});