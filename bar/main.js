let myB = document.getElementById('myBar');

let bar1 = {};
bar1.type = "bar";
bar1.x = [];
bar1.y = [];
bar1.text = [];
bar1.name = "Taipei";

for(let i=0;i<animals_Taipei_zoo.length;i++){
    bar1.x[i] = animals_Taipei_zoo[i]["name"];
    bar1.y[i] = animals_Taipei_zoo[i]["count"];
}
bar1.text = bar1.y;

let bar2 = {};
bar2.type = "bar";
bar2.x = [];
bar2.y = [];
bar2.name = "Taoyuan";

for(let i=0;i<animals_Taoyuan_zoo.length;i++){
    bar2.x[i] = animals_Taoyuan_zoo[i]["name"];
    bar2.y[i] = animals_Taoyuan_zoo[i]["count"];
}
bar2.text = bar2.y;
bar2.textfont = {
    color: 'white',
    size: 20
};

let data_b = [];
data_b.push(bar1);
data_b.push(bar2);

let layout_b = {
    margin:{
        t:50
    },
    barmode:'stack',
    title:'Zoo'
};

Plotly.newPlot(myB, data_b, layout_b);