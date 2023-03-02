
let heading = document.createElement('h1');
heading.classList.add('heading');
heading.innerText = 'SATELLITES LAUNCHED BY ISRO IS DISPLAYED IN CHRONOLOGICAL ORDER';
let attachment = document.querySelector('body');
attachment.insertAdjacentElement('afterbegin',heading);

let div_start = document.getElementsByClassName('heading')[0];


let div1 = document.createElement('div');
div1.classList.add('container');
div1.classList.add('table-responsive');
div_start.insertAdjacentElement('afterend',div1);

let div1_inside = document.getElementsByClassName('container')[0];

let table = document.createElement('table');
table.classList.add('table');
table.classList.add('table-bordered');
table.classList.add('table-hover');
table.classList.add('text-center');
div1_inside.append(table);

let inside_table = document.getElementsByClassName('table')[0];

let thead = document.createElement('thead');
thead.classList.add('table-dark');
inside_table.append(thead);

let thead_inside = document.getElementsByClassName('table-dark')[0];

let tr1 = document.createElement('tr');
tr1.classList.add('tr1');
thead_inside.append(tr1);

let tr1_inside = document.getElementsByClassName('tr1')[0];

let th1 = document.createElement('th');
th1.setAttribute('scope','col');
th1.innerText = 'ORDER' ;
tr1_inside.append(th1);

let th2 = document.createElement('th');
th2.setAttribute('scope','col');
th2.innerText = 'SATELLITE NAME' ;
tr1_inside.append(th2);

let tbody = document.createElement('tbody');
tbody.classList.add('table-body');
inside_table.append(tbody);
inside_table.append(tbody);

let tbody_inside = document.getElementsByClassName('table-body')[0];

let tr2 = document.createElement('tr');
tr2.classList.add('tr2');
tbody_inside.append(tr2);

let tr2_inside = document.getElementsByClassName('tr2')[0];

let td1 = document.createElement('td');
td1.innerText = 'id' ;
tr2_inside.append(td1);

let td2 = document.createElement('td');
td2.innerText = 'name' ;
tr2_inside.append(td2);







var url = 'https://isro.vercel.app/api/spacecrafts' ;

async function isro() {

    try {

        let promise = fetch(url);

        let response = await promise;

        let promise2 = response.json();

        let objectData = await promise2;

        let tableData = '';

        objectData.spacecrafts.map((value) => {  // map method is used to get data from objectData.spacecrafts(api) and write it into the innerHTML  

            tableData += `<tr class='rdata'>
                          <td>${value.id}</td>
                           <td>${value.name}</td>
                           </tr>`;

        });

        document.getElementsByClassName('table-body')[0].innerHTML = tableData;

    } catch(x) {
        console.log(x)
    }

}
isro()