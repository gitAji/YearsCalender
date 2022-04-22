const url = "https://noroff.norgetamil.com/wp-json/wp/v2/posts";
let myData;
fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log('Success:', data);
        myData = data;
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
            <p>Student</p>
          </div>
          <div class="course">
            <i class="fa-solid fa-book"></i>
            <p>FED</p>
          </div>
          <div class="due-date">
            <i class="fa-solid fa-calendar"></i>
            <p>${task.date}</p>
          </div>
          <div class="location">
            <i class="fa-solid fa-location-dot"></i>
            <p>Bergen</p>
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
        //console.log(myList);
    }
    // listPosts(myList);
    output.innerHTML = myList;
}


const roleDropdown = document.querySelector("#role");
const courseDropdown = document.querySelector("#course");


const makeStuffHappen = () => {
    let myFilteredList = [];
    let myList = "";
    console.log("Hello");
    console.log(roleDropdown.value);
    myFilteredList.push(roleDropdown.value);
    console.log(myFilteredList);
    // Do filtering on ALL the tasks
    if (roleDropdown == "All") {
        myFilteredList = myData.slice();
    } else {
        // Filter ot those animals with type equal to the type chosen
        myFilteredList = myData.filter((task) => {
            console.log(task.categories);
            //console.log (`Check if ${role} is in ${roleDropdown}`)
            if (role == roleDropdown);
            if (roleDropdown.value == "student"); {
                return true;
            }

            return false;

        }); {
            //myList(myFilteredList);

        }
    }

    listPosts(myFilteredList);

    //   let myFilteredList2 = []; 
    //   myFilteredList2.push(courseDropdown.value);
    //   console.log (myFilteredList2);
    // Do filtering on Filtered stuff from above

}
roleDropdown.addEventListener("change", makeStuffHappen);
// courseDropdown.addEventListener("change", makeStuffHappen);
