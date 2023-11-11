let myB = document.getElementById('myBar');

let bar1 = {};
bar1.type = "bar";
bar1.x = [];
bar1.y = [];
bar1.text = [];
bar1.name = "理工類";

for(let i=0;i< science.length;i++){
    bar1.x[i] = science[i]["name"];
    bar1.y[i] = science[i]["count"];
}
bar1.text = bar1.y;

let bar2 = {};
bar2.type = "bar";
bar2.x = [];
bar2.y = [];
bar2.name = "文院、客院";

for(let i=0;i<nonscience.length;i++){
    bar2.x[i] = nonscience[i]["name"];
    bar2.y[i] = nonscience[i]["count"];
}
bar2.text = bar2.y;
bar2.textfont = {
    // color: 'white',
    // size: 20
};

let data_b = [];
data_b.push(bar1);
data_b.push(bar2);

let layout_b = {
    margin:{
        t:50
    },
    barmode:'stack',
    title:'中大學生赴姐妹校交換'
};

Plotly.newPlot(myB, data_b, layout_b);