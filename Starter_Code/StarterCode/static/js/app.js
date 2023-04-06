const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
    let names = data.names;
    let samples = data.samples;
    let top10 = [];
    let topOTUString = [];
    let topLabels = [];
    let allVal = [];
    let allOTU = [];
    let allLabels = [];
    let name = names[0];
    for (sample of samples) {
        if (sample["id"] == name) {
            let len = sample.sample_values.length;
                for (let i = 0; i < len; i++) {
                    allVal.push(sample.sample_values[i]);
                    allOTU.push(sample.otu_ids[i]);
                    allLabels.push(sample.otu_labels[i]);
                }
            if (sample.sample_values.length >= 10) {
                for (let i = 0; i < 10; i++) {
                    top10.push(sample.sample_values[i]);
                    topOTUString.push(`OTU ${sample.otu_ids[i].toString()}`);
                    topLabels.push(sample.otu_labels[i]);
                }
            }
            else { 
                let len = sample.sample_values.length;
                for (let i = 0; i < len; i++) {
                    top10.push(sample.sample_values[i]);
                    topOTUString.push(`OTU ${sample.otu_ids[i].toString()}`);
                    topLabels.push(sample.otu_labels[i]);
                }
            }
            let trace1 = {
                x: top10.reverse(),
                y: topOTUString.reverse(),
                text: topLabels.reverse(),
                type: "bar",
                orientation: "h"
            };
            let traces1 = [trace1];
            let layout1 = {
                title: `Top 10 OTUs for sample ${name}`,
            };
            Plotly.newPlot("bar",traces1,layout1);
            let trace2 = {
                x: allOTU,
                y: allVal,
                text: allLabels,
                mode: "markers",
                marker: {
                    size: allVal,
                    color: allOTU,
                    colorscale: "Viridis"
                },
            };
            let traces2 = [trace2];
            let layout2 = {
                height: 600,
                width: 1800
            };
            Plotly.newPlot("bubble",traces2,layout2);
        }
    }
});

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a letiable
    let name = dropdownMenu.property("value");
    d3.json(url).then(function(data) {
        let names = data.names;
        let samples = data.samples;
        let top10 = [];
        let topOTUString = [];
        let topLabels = [];
        let allVal = [];
        let allOTU = [];
        let allLabels = [];
        console.log(names[0]);
        for (sample of samples) {
            if (sample["id"] == name) {
                let len = sample.sample_values.length;
                for (let i = 0; i < len; i++) {
                    allVal.push(sample.sample_values[i]);
                    allOTU.push(sample.otu_ids[i]);
                    allLabels.push(sample.otu_labels[i]);
                }
                if (sample.sample_values.length >= 10) {
                    for (let i = 0; i < 10; i++) {
                        top10.push(sample.sample_values[i]);
                        topOTUString.push(`OTU ${sample.otu_ids[i].toString()}`);
                        topLabels.push(sample.otu_labels[i]);
                    }
                }
                else { 
                    let len = sample.sample_values.length;
                    for (let i = 0; i < len; i++) {
                        top10.push(sample.sample_values[i]);
                        topOTUString.push(`OTU ${sample.otu_ids[i].toString()}`);
                        topLabels.push(sample.otu_labels[i]);
                    }
                }
                console.log(top10);
                console.log(topOTUString);
                let trace1 = {
                    x: top10.reverse(),
                    y: topOTUString.reverse(),
                    text: topLabels.reverse(),
                    type: "bar",
                    orientation: "h"
                };
                let traces = [trace1];
                let layout = {
                    title: `Top 10 OTUs for sample ${name}`,
                };
                Plotly.newPlot("bar",traces,layout);
                let trace2 = {
                    x: allOTU,
                    y: allVal,
                    text: allLabels,
                    mode: "markers",
                    marker: {
                        size: allVal,
                        color: allOTU,
                        colorscale: "Viridis"
                    },
                };
                let traces2 = [trace2];
                let layout2 = {
                    height: 600,
                    width: 1800
                };
                Plotly.newPlot("bubble",traces2,layout2);
            }
        }
    });
}



/*
let title = `Test Chart`;
let userID = names[0];
let books = ["The Visual Display of Quantitative Information", "Automate the Boring Stuff", "Data Science from Scratch"];

let timesRead = [100, 50, 25];

let trace1 = {
  x: books,
  y: timesRead,
  type: 'bar'
};

let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("plot", data, layout);
*/
