


// 1.
// Отримати з цього ресурсу // https://jsonplaceholder.typicode.com/posts відповідь,
//  та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//       let mainDivtwo = document.createElement('div');
//       for (let value of data) {
//           let mainDiv = document.createElement('div');
//           mainDiv.classList.add('post');
//           let mainH1 = document.createElement('h1');
//           mainH1.innerText = `${value.userId}`;
//           mainDiv.appendChild(mainH1);
//           let mainH2 = document.createElement('h2');
//           mainH2.innerText = `${value.id}`;
//           mainDiv.appendChild(mainH2);
//           let mainH3 = document.createElement('h3');
//           mainH3.innerText = `${value.title}`;
//           mainDiv.appendChild(mainH3);
//           let mainP = document.createElement('p');
//           mainP.innerText = `${value.body}`;
//           mainDiv.appendChild(mainP);
//           mainDivtwo.classList.add('info');
//           mainDivtwo.appendChild(mainDiv);
//           document.body.appendChild( mainDivtwo);
//       }
//
//   });



// --------------------------------------------------------------------------------------------------------------------------


     2.
// Отримати відповідь з цього ресурсу https://jsonplaceholder.typicode.com/comments,
// та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment



// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//       console.log(data);
//       let mainDivtwo = document.createElement('div');
//       for (let value of data) {
//           let mainDiv = document.createElement('div');
//           mainDiv.classList.add('comment');
//           let mainH1 = document.createElement('h1');
//           mainH1.innerText = `${value.postId}`;
//           mainDiv.appendChild(mainH1);
//           let mainH2 = document.createElement('h2');
//           mainH2.innerText = `${value.id}`;
//           mainDiv.appendChild(mainH2);
//           let mainH3 = document.createElement('h3');
//           mainH3.innerText = `${value.name}`;
//           mainDiv.appendChild(mainH3);
//           let mainPs = document.createElement('p');
//           mainPs.innerText = `${value.email}`;
//           mainDiv.appendChild(mainPs);
//           let mainP = document.createElement('p');
//           mainP.innerText = `${value.body}`;
//           mainDiv.appendChild(mainP);
//           mainDivtwo.classList.add('info');
//           mainDivtwo.appendChild(mainDiv);
//           document.body.appendChild( mainDivtwo);
//       }
//
//   });