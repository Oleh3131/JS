// 1.
// Отримати відповідь з цього ресурсу https://jsonplaceholder.typicode.com/users,
// та вивести в документ як в прикладі на занятті
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((users) => {
//
//         let userDivtwo = document.createElement('div');
//
//         userDivtwo.classList.add(`user_div_two`);
//         for (let user of users) {
//             let userDiv = document.createElement('div');
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post_div');
//             userDiv.classList.add('user_div');
//             userDiv.innerHTML =
//                 `<h2>id: ${user.id}</h2>
//             <h4>name: ${user.name}</h4>
//             <h4>username: ${user.username}</h4>
//             <h4>email: ${user.email}</h4>
//             <ul>address:
//                 <li>street: ${user.address.street}</li>
//                 <li>suite: ${user.address.suite}</li>
//                 <li>city: ${user.address.city}</li>
//                 <li>zipcode: ${user.address.zipcode}</li>
//                     <ul>geo:
//                         <li>lat: ${user.address.geo.lat}</li>
//                         <li>lng: ${user.address.geo.lng}</li></ul>
//                     </ul>
//                 <h4>phone: ${user.phone}</h4>
//                 <h4>website: ${user.website}</h4>
//                     <ul>company:
//                         <li>name: ${user.company.name}</li>
//                         <li>catchPhrase: ${user.company.catchPhrase}</li>
//                         <li>bs: ${user.company.bs}</li>
//                     </ul>`;
//             let mainButton = document.createElement('button');
//             mainButton.innerText = 'click me';
//             userDiv.appendChild(mainButton);
//             userDivtwo.appendChild(userDiv);
//             document.body.appendChild(userDivtwo);
//             mainButton.onclick = function () {
//                 fetch('https://jsonplaceholder.typicode.com/posts')
//                     .then((response) => {
//                         return response.json();
//                     })
//                     .then((posts) => {
//                         for (let post of posts) {
//                             if (user.id === post.userId) {
//                                 let commentDiv = document.createElement('div');
//                                 commentDiv.classList.add('comment_div');
//                                 postDiv.innerHTML =
//                                     `<h2>userId: ${post.userId}</h2>
//                                     <h4>id: ${post.id}</h4>
//                                     <h4>title: ${post.title}</h4>
//                                     <h4>body: ${post.body}</h4>`;
//                                 let newButton = document.createElement('button');
//                                 newButton.innerText = 'click me';
//                                 postDiv.appendChild(newButton);
//                                 userDiv.appendChild(postDiv);
//                                 mainButton.ondblclick = function () {
//                                     postDiv.style.display = 'none';
//
//                                 };
//                                 newButton.onclick = function () {
//                                     fetch('https://jsonplaceholder.typicode.com/comments')
//                                         .then((response) => {
//                                             return response.json();
//                                         })
//                                         .then((comments) => {
//                                             for (let comment of comments) {
//                                                 if (post.userId === comment.postId) {
//                                                     commentDiv.innerHTML =
//                                                         `<h2>postId: ${comment.postId}</h2>
//                                                              <h4>id: ${comment.id}</h4>
//                                                              <h4>name: ${comment.name}</h4>
//                                                              <h4>email: ${comment.email}</h4>
//                                                               <p>body: ${comment.body}</p>`;
//
//                                                     postDiv.appendChild(commentDiv);
//                                                     newButton.ondblclick = function () {
//                                                         commentDiv.style.display = 'none';
//
//                                                     };
//                                                 }
//                                             }
//
//                                         });
//                                 }
//                             }
//                         }
//
//                     });
//             }
//         }
//     });