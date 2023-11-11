let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.mode = "line";
trace1.type = "scatter";
trace1.name ="Total";
trace1.visible = true;
trace1.x = [];
trace1.y = [];
trace1.text = [];

for(let i=0;i<set1.length;i++){
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 = {};
trace2.mode = "line";
trace2.type = "scatter";
trace2.name ="Europe";
trace2.visible = false;

trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.textposition = "bottom center";
trace2.textfont = {
    family:"Raleway, sans-serif",
    size:10
};

for(let i=0;i<set2.length;i++){
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let trace3 = {};
trace3.mode = "line";
trace3.type = "scatter";
trace3.name ="North America";
trace3.visible = false;
trace3.x = [];
trace3.y = [];
trace3.text = [];

for(let i=0;i<set3.length;i++){
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let trace4 = {};
trace4.mode = "line";
trace4.type = "scatter";
trace4.name ="Asia";
trace4.visible = false;
trace4.x = [];
trace4.y = [];
trace4.text = [];

for(let i=0;i<set4.length;i++){
    trace4.x[i] = set4[i][0];
    trace4.y[i] = set4[i][1];
    trace4.text[i] = set4[i][2];
}

let trace5 = {};
trace5.mode = "line";
trace5.type = "scatter";
trace5.name ="大陸";
trace5.visible = false;
trace5.x = [];
trace5.y = [];
trace5.text = [];

for(let i=0;i<set5.length;i++){
    trace5.x[i] = set5[i][0];
    trace5.y[i] = set5[i][1];
    trace5.text[i] = set5[i][2];
}


let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
// data.push(trace5);

let layout = {
    margin:{
        t:25
    },
    // // xaxis:{
    // //     range:[107,113]
    // },
    // // yaxis:{
    // //     range:[100,220]
    // },
    title:'歷年交換學生申請數量',
    updatemenus:[
        {
            y:1.2,
            x:0,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false, false, false]],
                    label:'Total'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false, false, false]],
                    label: 'EU'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true, false, false]],
                    label: 'North America'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, false, true, false]],
                    label: 'Asia'
                },
                // {
                //     method: 'restyle',
                //     args: ['visible', [false, false, false, false, true]],
                //     label: '大陸'
                // },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true, true, true]],
                    label: 'Display All'
                }
            ]
        }
        ]

};

Plotly.newPlot(myGraph, data, layout);