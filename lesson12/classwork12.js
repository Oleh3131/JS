// 1.
// Отримати відповідь з цього ресурсу https://jsonplaceholder.typicode.com/posts,
// та вивести в документ як в прикладі на занятті
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
        let mainDiv = document.createElement('div');
        for (let user of posts) {
            let secondDiv = document.createElement('div');
            secondDiv.classList.add('post');
            let thirdDiv = document.createElement('div');
            thirdDiv.classList.add('third_div');
            let h1 = document.createElement('h1');
            h1.innerText = `${user.userId}`;
            mainDiv.classList.add('main_info');
            let mainButton = document.createElement('button');
            mainButton.innerText = 'click me';
            let h2 = document.createElement('h2');
            h2.innerText = `${user.id}`;
            let h3 = document.createElement('h3');
            h3.innerText = `${user.title}`;
            let p = document.createElement('p');
            p.innerText = `${user.body}`;
            secondDiv.append(h1,h2, h3, p);
            secondDiv.appendChild(mainButton);
            mainDiv.appendChild(secondDiv);
            document.body.appendChild(mainDiv);
            mainButton.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then((response) => {
                        return response.json();
                    })
                    .then((comments) => {
                        for (let comment of comments) {
                            if (user.userId === comment.postId) {
                                let H1 = document.createElement('h1');
                                H1.innerText = `${comment.postId}`;
                                let H2 = document.createElement('h2');
                                H2.innerText = `${comment.id}`;
                                let H3 = document.createElement('h3');
                                H3.innerText = `${comment.name}`;
                                let H4 = document.createElement('h4');
                                H4.innerText = `${comment.email}`;
                                let P = document.createElement('p');
                                P.innerText = `${comment.body}`;
                                thirdDiv.append(H1, H2, H3, H4, P);
                                secondDiv.appendChild(thirdDiv);
                                mainButton.ondblclick = function () {
                                    thirdDiv.style.display = 'none';
                                };
                            }

                        }

                    });
            }

        }
    })
