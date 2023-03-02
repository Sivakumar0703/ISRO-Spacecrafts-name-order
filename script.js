
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

        document.getElementsByClassName('table_body')[0].innerHTML = tableData;

    } catch(x) {
        console.log(x)
    }

}
isro()