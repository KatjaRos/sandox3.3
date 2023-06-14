import "./styles.css";
const table_body = document.getElementById("table-body");
getData();

async function getData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const data = await fetch(url);
  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const datasetMuni = await data.json();
  const area = datasetMuni.dataset.dimension.Alue.category.label;
  const values1 = datasetMuni.dataset.value;
  const data2 = await fetch(url2);
  const datasetEmp = await data2.json();
  const employment = datasetEmp.dataset.value;

  for (var i = 0; i < values1.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    const emp_pros = ((employment[i] / values1[i]) * 100).toFixed(2) + "%";
    // this was my original:const emp_pros = ((employment[i]/values1[i])*100) +"%"
    //asked a little hel from chatGPt to format it
    td1.innerHTML = Object.values(area)[i];
    td2.innerHTML = values1[i];
    td3.innerHTML = employment[i];
    td4.innerHTML = emp_pros;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    console.log(Object.values(area)[i]);
    console.log(values1[i]);
    table_body.appendChild(tr);
  }
}
