const url = "https://noroff.norgetamil.com/wp-json/wp/v2/posts";
//const url = "https://www.geek.no/wp-json/wp/v2/pages";
fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log('Success:', data);
        listPosts(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const output = document.querySelector("#tasks");
console.log(output);
function listPosts(tasks) {
    let myList = "";
    for (let task of tasks) {
        console.log(task);
        myList += `
        <li>
            <a href="post.html?id=${task.id}">
                ${task.title.rendered}
            </a>
        </li>`;
    }
    output.innerHTML = myList;
}


// var el = document.getElementsByClassName("test");
// document.addEventListener('click', function () {
//     console.log('hellooox')
// })

// function ut() {
//     console.log(hellloooooo);
// }

// var tet = document.getElementsByClassName("test");
// tet.addEventListener("click", ut, true);

// var test = document.getElementsByClassName('test');
// test.onclick = function () {
//     console.log('Hellooooo');
// }


// const log = function () {
//     console.log('Hellooooo');
// }

// document.getElementsByClassName('test').onclick = log;

const test = document.querySelectorAll('div.test');
console.log(test);