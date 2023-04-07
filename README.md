# belly-button-challenge

In this repository, we access json data regarding belly button bacteria (url: <https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json>).

This data is used to populate a webpage with HTML and Javascript code. After accessing the data, a dropdown menu is created with each sample ID number (by default loads the first entry in our dataset). Upon selection, we loop through our data to find the matching sample ID and then gather their metadata and information on each microbial species present (also called operational taxonomic units or OTUs). The top 10 OTUs are put into a horizontal bar chart and all OTUs will be included in a size- and color-coded bubble chart. The subject metadata will be printed in a display panel as well.

The HTML file is then deployed with Github Pages and is accessible at <https://lampzzz.github.io/>.
