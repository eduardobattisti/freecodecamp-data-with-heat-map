import * as D3 from '../../node_modules/d3/dist/d3.js';

(async function main() {

	const subtitle = document.getElementById('subtitle');

	const dataset = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => console.log(`Something happened: ${err}`));

	console.log(dataset);

	const w = 1260;
	const h = 500;
	const padding = 20;
	const monthlyVariance = dataset.monthlyVariance.map((elem) => elem);
	subtitle.innerText = `1753 - 2015: Base Temperature $${dataset.baseTemperature}°C`

	// const dates = dataset.data.map((elem) => new Date(elem[0]));
	// const maxDate = new Date(d3.max(dates));
	// maxDate.setMonth(maxDate.getMonth() + 3);

	// const xScale = d3.scaleTime()
	// 	.domain([d3.min(dates), maxDate])
	// 	.range([padding * 2.2, w - padding]);

	// const yScale = d3.scaleLinear()
	// 	.domain([0, d3.max(gdp)])
	// 	.range([h - padding * 3, 15]);

	// const linearScale = d3.scaleLinear()
	// 	.domain([0, d3.max(gdp)])
	// 	.range([0, h - (padding * 3) - 15]);

	// const valueScaled = gdp.map((elem) => linearScale(elem));

	// const xAxis = d3.axisBottom(xScale);
	// const yAxis = d3.axisLeft(yScale);

	// const svg = d3.select('#wrapper-bar-chart')
	// 	.append('svg')
	// 	.attr('width', w)
	// 	.attr('height', h);

	// svg.append('text')
	// 	.attr('transform', 'rotate(-90)')
	// 	.attr('x', -200)
	// 	.attr('y', 80)
	// 	.text('Gross Domestic Product');

	// svg.append('text')
	// 	.attr('x', w / 2.3)
	// 	.attr('y', h - 13)
	// 	.text('More Information: http://www.bea.gov/national/pdf/nipaguid.pdf')
	// 	.attr('class', 'info');

	// const barChart = d3.select('svg')
	// 	.selectAll('rect')
	// 	.data(valueScaled)
	// 	.enter()
	// 	.append('rect')
	// 	.attr('x', (d, i) => (i * 3.04) + padding * 2.2)
	// 	.attr('y', (d, i) => h - d - (padding * 3))
	// 	.attr('data-date', (d, i) => dataset.data[i][0])
	// 	.attr('data-gdp', (d, i) => dataset.data[i][1])
	// 	.attr('width', '2')
	// 	.attr('height', (d) => d)
	// 	.attr('fill', '#242440')
	// 	.attr('class', 'bar')
	// 	.append('title');

	// svg.append('g')
	// 	.attr('id', 'x-axis')
	// 	.attr('transform', `translate(0, ${h - padding * 3})`)
	// 	.call(xAxis)
	// 	.attr('fill', 'none');

	// svg.append('g')
	// 	.attr('id', 'y-axis')
	// 	.attr('transform', `translate(${padding * 2.2}, 0)`)
	// 	.call(yAxis)
	// 	.attr('fill', 'none');

	// const bars = document.getElementsByClassName('bar');
	// for (const bar of bars) {
	// 	bar.addEventListener('mouseenter', inToolTip);
	// 	bar.addEventListener('mouseout', outToolTip);
	// }
}());

// function inToolTip(e) {
// 	const tooltip = document.getElementById('tooltip');
// 	const { target, clientX } = e;
// 	const date = target.getAttribute('data-date').split('-');
// 	const gpd = Number(target.getAttribute('data-gdp')).toLocaleString('en');

// 	tooltip.animate({
// 		opacity: 0.9,
// 	}, {
// 		duration: 200,
// 		fill: 'forwards',
// 	});
// 	tooltip.style.left = `${clientX + 25}px`;
// 	tooltip.setAttribute('data-date', date.join('-'));

// 	switch (date[1]) {
// 		case '01':
// 			tooltip.children[0].textContent = `${date[0]} Q1`;
// 			break;
// 		case '04':
// 			tooltip.children[0].textContent = `${date[0]} Q2`;
// 			break;
// 		case '07':
// 			tooltip.children[0].textContent = `${date[0]} Q3`;
// 			break;
// 		case '10':
// 			tooltip.children[0].textContent = `${date[0]} Q4`;
// 			break;
// 	}

// 	tooltip.children[1].textContent = `$ ${gpd} Billions`;
// }

// function outToolTip() {
// 	const tooltip = document.getElementById('tooltip');
// 	tooltip.animate({
// 		opacity: 0,
// 	}, {
// 		duration: 200,
// 		fill: 'forwards',
// 	});
// }
