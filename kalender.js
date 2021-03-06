let allData;

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today test">${i}</div>`;
        } else {
            days += `<div class="test">${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log('Success:', data);
            allData = data;

            //listPosts(allData);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    const month = document.querySelector('div.date');
    const resultOutput = document.querySelector('div.content-box');
    const test = document.querySelectorAll('div.test');
    let listPosts = (allData) => {
        resultOutput.innerHTML = "";
        let myList = "";
        for (item of allData) {
            let tags = item.tags;
            let title = item.title.rendered;

            myList += `
        <p class="black">
           ${title}
        </p>`;
        }
        resultOutput.innerHTML = myList;
    }

    let interval = setInterval(function () {
        // get elem
        if (typeof allData == 'undefined') return;
        clearInterval(interval);

        for (let item of allData) {
            for (let divs of test) {
                test.innerHTML = divs;
                if (divs.innerHTML == item.date.slice(8, 10)) {
                    divs.style.backgroundColor = "#fb4040";
                    divs.style.borderRadius = "10px";
                }
            }

        }


    }, 10);




    for (let item of test) item.addEventListener('click', function (e) {
        //console.log(item.innerHTML)
        resultOutput.innerHTML = item.innerHTML;
        //console.log(allData);
        let temporary = [];
        for (let myEvent of allData) {
            if (myEvent.date.slice(8, 10) == item.innerHTML) {
                temporary.push(myEvent);
                //console.log("datoriktig");
            }
            //console.log(myEvent);

        }
        //console.log(temporary.length);
        if (temporary.length === 0) {
            resultOutput.innerHTML = `<p>Ingen treff</p>`;
        } else {
            listPosts(temporary);
        }

    });

}

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();