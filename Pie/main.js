let myP = document.getElementById('myPie');

let pie1 = {};
pie1.type = "pie";
pie1.title = "全台";
pie1.values = [];
pie1.labels = [];
pie1.domain = {
    row:0,
    column:0
};

for(let i=0;i<evaluation_ratio_1.length;i++){
    pie1.labels[i] = evaluation_ratio_1[i]["name"];
    pie1.values[i] = evaluation_ratio_1[i]["count"];
}

let pie2 = {};
pie2.type = "pie";
pie2.title = "台北市";
pie2.labels = [];
pie2.values = [];
pie2.domain = {
    row:0,
    column:1
};

for(let i=0;i<evaluation_ratio_2.length;i++){
    pie2.labels[i] = evaluation_ratio_2[i]["name"];
    pie2.values[i] = evaluation_ratio_2[i]["count"];
}


let pie3 = {};
pie3.type = "pie";
pie3.title = "台南市";
pie3.labels = [];
pie3.values = [];
pie3.domain = {
    row:1,
    column:0
};

for(let i=0;i<evaluation_ratio_3.length;i++){
    pie3.labels[i] = evaluation_ratio_3[i]["name"];
    pie3.values[i] = evaluation_ratio_3[i]["count"];
}

let pie4 = {};
pie4.type = "pie";
pie4.title = "花蓮縣";
pie4.labels = [];
pie4.values = [];
pie4.domain = {
    row:1,
    column:1
};

for(let i=0;i<evaluation_ratio_4.length;i++){
    pie4.labels[i] = evaluation_ratio_4[i]["name"];
    pie4.values[i] = evaluation_ratio_4[i]["count"];
}
let data_p = [];
data_p.push(pie1);
data_p.push(pie2);
data_p.push(pie3);
data_p.push(pie4);

let layout_p = {
    margin:{
        t:50,
        l:0
    },
    grid:{
        rows:2,
        columns:2
    }
};

Plotly.newPlot(myP, data_p, layout_p);