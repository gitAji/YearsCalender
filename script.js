const url = "https://noroff.norgetamil.com/wp-json/wp/v2/posts";

fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log('Success:', data);
        listPosts(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const output = document.querySelector(".results");
console.log(output);
function listPosts(tasks) {
    let myList = "";
    for (let task of tasks) {
        console.log(task);
        myList += `
        <div class="result-card">
        <div class="result-header">
          <div class="role">
            <i class="fa-solid fa-user"></i>
            <p> ${task.categories}</p>
          </div>
          <div class="course">
            <i class="fa-solid fa-book"></i>
            <p>${task.tags}</p>
          </div>
          <div class="due-date">
            <i class="fa-solid fa-calendar"></i>
            <p>${task.date}</p>
          </div>
          <div class="location">
            <i class="fa-solid fa-location-dot"></i>
            <p>${task.tags}</p>
          </div>
        </div>
        <div class="result-body">
          <div class="dot">
            <i class="fa-solid fa-circle-dot student"></i>
          </div>
          <div class="task">
            <ul id="tasks">  <a href="post.html?id=${task.id}">
            ${task.title.rendered}
        </a></ul>
          </div>
        </div>
      </div>
      </div>
      
        `;
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