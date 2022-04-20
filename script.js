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