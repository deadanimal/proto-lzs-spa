import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { TabsetComponent } from "ngx-bootstrap/tabs";
import { TabsetConfig } from "ngx-bootstrap/tabs";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), {
    type: "pills",
    isKeysAllowed: true,
  });
}

@Component({
  selector: "app-pengurusan-kerjaya",
  templateUrl: "./pengurusan-kerjaya.component.html",
  styleUrls: ["./pengurusan-kerjaya.component.scss"],
})
export class PengurusanKerjayaComponent implements OnInit {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;

  // Tab
  @ViewChild("staticTabs", { static: false }) staticTabs: TabsetComponent;

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  modalRef: BsModalRef;

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      start: "2011/04/25",
      is_active: "Active",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      start: "2011/07/25",
      is_active: "Inactive",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      start: "2009/01/12",
      is_active: "Active",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      start: "2012/03/29",
      is_active: "Active",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      start: "2008/11/28",
      is_active: "Pending",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      start: "2012/12/02",
      is_active: "Active",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      start: "2012/08/06",
      is_active: "Active",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      start: "2010/10/14",
      is_active: "Active",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      start: "2009/09/15",
      is_active: "Inactive",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      start: "2008/12/13",
      is_active: "Pending",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "30",
      start: "2008/12/19",
      is_active: "Pending",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "22",
      start: "2013/03/03",
      is_active: "Active",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "36",
      start: "2008/10/16",
      is_active: "Inactive",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "43",
      start: "2012/12/18",
      is_active: "Active",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone, private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  // db_function
  entriesChange($event) {
    this.entries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onActivate(event) {
    this.activeRow = event.row;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
      this.getChart1();
      this.getChart2();
    });
  }

  getChart() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    let chart = am4core.create("pk1", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = [
      {
        year: "1950",
        value: -0.307,
      },
      {
        year: "1951",
        value: -0.168,
      },
      {
        year: "1952",
        value: -0.073,
      },
      {
        year: "1953",
        value: -0.027,
      },
      {
        year: "1954",
        value: -0.251,
      },
      {
        year: "1955",
        value: -0.281,
      },
      {
        year: "1956",
        value: -0.348,
      },
      {
        year: "1957",
        value: -0.074,
      },
      {
        year: "1958",
        value: -0.011,
      },
      {
        year: "1959",
        value: -0.074,
      },
      {
        year: "1960",
        value: -0.124,
      },
      {
        year: "1961",
        value: -0.024,
      },
      {
        year: "1962",
        value: -0.022,
      },
      {
        year: "1963",
        value: 0,
      },
      {
        year: "1964",
        value: -0.296,
      },
      {
        year: "1965",
        value: -0.217,
      },
      {
        year: "1966",
        value: -0.147,
      },
      {
        year: "1967",
        value: -0.15,
      },
      {
        year: "1968",
        value: -0.16,
      },
      {
        year: "1969",
        value: -0.011,
      },
      {
        year: "1970",
        value: -0.068,
      },
      {
        year: "1971",
        value: -0.19,
      },
      {
        year: "1972",
        value: -0.056,
      },
      {
        year: "1973",
        value: 0.077,
      },
      {
        year: "1974",
        value: -0.213,
      },
      {
        year: "1975",
        value: -0.17,
      },
      {
        year: "1976",
        value: -0.254,
      },
      {
        year: "1977",
        value: 0.019,
      },
      {
        year: "1978",
        value: -0.063,
      },
      {
        year: "1979",
        value: 0.05,
      },
      {
        year: "1980",
        value: 0.077,
      },
      {
        year: "1981",
        value: 0.12,
      },
      {
        year: "1982",
        value: 0.011,
      },
      {
        year: "1983",
        value: 0.177,
      },
      {
        year: "1984",
        value: -0.021,
      },
      {
        year: "1985",
        value: -0.037,
      },
      {
        year: "1986",
        value: 0.03,
      },
      {
        year: "1987",
        value: 0.179,
      },
      {
        year: "1988",
        value: 0.18,
      },
      {
        year: "1989",
        value: 0.104,
      },
      {
        year: "1990",
        value: 0.255,
      },
      {
        year: "1991",
        value: 0.21,
      },
      {
        year: "1992",
        value: 0.065,
      },
      {
        year: "1993",
        value: 0.11,
      },
      {
        year: "1994",
        value: 0.172,
      },
      {
        year: "1995",
        value: 0.269,
      },
      {
        year: "1996",
        value: 0.141,
      },
      {
        year: "1997",
        value: 0.353,
      },
      {
        year: "1998",
        value: 0.548,
      },
      {
        year: "1999",
        value: 0.298,
      },
      {
        year: "2000",
        value: 0.267,
      },
      {
        year: "2001",
        value: 0.411,
      },
      {
        year: "2002",
        value: 0.462,
      },
      {
        year: "2003",
        value: 0.47,
      },
      {
        year: "2004",
        value: 0.445,
      },
      {
        year: "2005",
        value: 0.47,
      },
    ];

    chart.data = data;
    chart.dateFormatter.inputDateFormat = "yyyy";

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.baseInterval = { timeUnit: "year", count: 1 };

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = chart.series.push(new am4charts.StepLineSeries());
    series.dataFields.dateX = "year";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.fullWidthLineX = true;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = chart.colors.getIndex(2);
    chart.cursor.lineX.fillOpacity = 0.1;

    chart.scrollbarX = new am4core.Scrollbar();

    this.chart1 = chart;
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("pk2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czech Republic",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart2 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    let chart = am4core.create("pk3", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Lithuania",
        value: 260,
      },
      {
        country: "Czechia",
        value: 230,
      },
      {
        country: "Ireland",
        value: 200,
      },
      {
        country: "Germany",
        value: 165,
      },
      {
        country: "Australia",
        value: 139,
      },
      {
        country: "Austria",
        value: 128,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;

    chart.legend = new am4charts.Legend();

    this.chart3 = chart;
  }
}
