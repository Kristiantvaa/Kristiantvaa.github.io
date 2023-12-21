google.charts.load("current", {packages:['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            let n = 35;
            var data = google.visualization.arrayToDataTable([
              ["Week", "Score", { role: "style" } ],
              ["Week "  + String(n-4), 70, "#b87333"],
              ["Week " + String(n-3), 65, "silver"],
              ["Week " + String(n-2), 70, "gold"],
              ["Week "+ String(n-1), 80, "color: #e5e4e2"], 
              ["Week "+ String(n), 85, "color: #e5e4e2"]
            ]);
      
            var view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                             { calc: "stringify",
                               sourceColumn: 1,
                               type: "string",
                               role: "annotation" },
                             2]);
      
            var options = {
              title: "Performance over the last weeks",
              width: 600,
              height: 400,
              bar: {groupWidth: "50%"},
              legend: { position: "none" },
            };
            var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
            chart.draw(view, options);
        }