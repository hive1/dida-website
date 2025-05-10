const ctx = document.getElementById('exp-year');
let years = ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
let expend = [299027.23, 69555086.9, 2980579.07, 221250700, 3653966.81, 64927114.39, 551611.44, 316524.2, 7991080.36, 120237345.3, 5065363.77, 7792310.39, 101102922.39, 266697671.77, 5434932.44, 6519601.95, 15698102.98, 459988314.32, 50948.44, 547220.3, 156620187.34, 1032155000, 1547938.89]

const data = {
    labels: years,
    datasets: [{
        data: expend,
        fill: false,
        borderColor: '#B31942',
        tension: 0.3
    }]
};

// i used this to help with the annotations: https://www.geeksforgeeks.org/how-to-draw-a-vertical-line-at-a-particular-point-on-the-x-axis-using-chart-js/
const stackedLine = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// total expenditure per political party, order is descending 
const partyPie = document.getElementById('party');
parties = ['Democrats', 'Republicans', 'Independent', 'Libertarian', 'Green']
percentages = [56.51, 26.28, 0.55, 0.40, 0.03]

const partyData = {
    labels: parties,
    datasets: [{
        label: 'Percentage Total Expenditure By Party',
        data: percentages,
        backgroundColor: [
            '#6399f7',
            '#f57a7a',
            '#e8e8e8',
            '#ffe680',
            '#b3ff80'
        ]
    }]
};

new Chart(partyPie, {
    type: 'pie',
    data: partyData
});


// https://stackoverflow.com/questions/7346563/loading-local-json-file
// i wanted to at least make the pipeline from data manipulation to js cleaner, so i used this json method

$.getJSON('data/top_15_percentages.json', function(json) {
    const top15 = document.getElementById('pac');

    let pacs;
    let percs;
    let colors;

    pacs = Object.values(json).map(item => item.committee_name);
    percs = Object.values(json).map(item => item.percentage_exp)

    colors = Object.values(json).map(item => {
        if (item.candidate_party == 'DEM') return "#6399f7";
        if (item.candidate_party == 'REP') return "#f57a7a";
        return '#e8e8e8';
    })

    const pacData = {
        labels: pacs,
        datasets: [{
            label: 'Percentage Total Expenditure By PACs',
            data: percs,
            backgroundColor: colors
        }]
    };
    
    new Chart(top15, {
        type: 'pie',
        data: pacData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

});


