var config = {
  "widgets": [
    {
      "elementId": "air-quality",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "air-quality",
            "name": "monthly-averages",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 195,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "monthly-averages",
              "format": {
                "parse": {
                  "Month": "date"
                }
              }
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "monthly-averages",
                "field": "Month"
              }
            },
            {
              "name": "roadside",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "monthly-averages",
                "field": "[London Mean Roadside PM2.5 Particulate (ug/m3)]"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelBound": true,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "roadside",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "field": "[London Mean Roadside PM2.5 Particulate (ug/m3)]"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 11
                  },
                  "strokeWidth": {
                    "value": 1
                  },
                  "stroke": {
                    "value": "gray"
                  },
                  "strokeDash": {
                    "value": [
                      5,
                      5
                    ]
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 23
                  },
                  "strokeWidth": {
                    "value": 1
                  },
                  "stroke": {
                    "value": "gray"
                  },
                  "strokeDash": {
                    "value": [
                      5,
                      5
                    ]
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "monthly-averages"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 35
                  },
                  "strokeWidth": {
                    "value": 1
                  },
                  "stroke": {
                    "value": "gray"
                  },
                  "strokeDash": {
                    "value": [
                      5,
                      5
                    ]
                  }
                }
              }
            },
            {
              "type": "text",
              "encode": {
                "enter": {
                  "fill": {
                    "value": "gray"
                  },
                  "zindex": {
                    "value": 10
                  },
                  "text": {
                    "value": "Low (index 1)"
                  },
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 11
                  },
                  "dx": {
                    "value": -55
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontSize": {
                    "value": 9
                  }
                }
              }
            },
            {
              "type": "text",
              "encode": {
                "enter": {
                  "fill": {
                    "value": "gray"
                  },
                  "zindex": {
                    "value": 10
                  },
                  "text": {
                    "value": "Low (index 2)"
                  },
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 23
                  },
                  "dx": {
                    "value": -55
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontSize": {
                    "value": 9
                  }
                }
              }
            },
            {
              "type": "text",
              "encode": {
                "enter": {
                  "fill": {
                    "value": "gray"
                  },
                  "zindex": {
                    "value": 10
                  },
                  "text": {
                    "value": "Low (index 3): Enjoy your usual outdoor activities up to this level."
                  },
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "roadside",
                    "value": 35.5
                  },
                  "dx": {
                    "value": -55
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontSize": {
                    "value": 9
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "crime",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "crime",
            "name": "recorded-offences",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 218,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "recorded-offences",
              "format": {
                "parse": {
                  "Year": "date"
                }
              }
            },
            {
              "name": "inner-almaty",
              "source": "recorded-offences",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum.Borough == 'Inner London'"
                }
              ]
            },
            {
              "name": "outer-almaty",
              "source": "recorded-offences",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum.Borough == 'Outer London'"
                }
              ]
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "recorded-offences",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "recorded-offences",
                "field": "Value"
              },
              "domainMax": 600000,
              "domainMin": 250000
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelBound": true,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "value",
              "labelFont": "Lato",
              "format": "s",
              "domain": false,
              "ticks": false,
              "titleFontWeight": "light",
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "inner-almaty"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "outer-almaty"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#ECAFAF"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "inner-almaty"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Inner Almaty"
                  },
                  "y": {
                    "scale": "value",
                    "value": 570000
                  },
                  "fill": {
                    "value": "#A95F6D"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "outer-almaty"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Outer Almaty"
                  },
                  "y": {
                    "scale": "value",
                    "value": 440000
                  },
                  "fill": {
                    "value": "#ECAFAF"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "economy",
      "view": {
        "title": "Economy",
        "legend": "Recent unemployment rate",
        "footer": "Data are sourced from the Almaty Datastore.",
        "resources": [
          {
            "datasetId": "unemployment",
            "name": "unemployment-rate",
            "transform": [
              {
                "type": "aggregate",
                "fields": [
                  "date"
                ],
                "operations": [
                  "argmax"
                ]
              }
            ]
          }
        ],
        "specType": "figure",
        "spec": {
          "fieldName": "unemployment_rate",
          "suffix": "%"
        }
      }
    },
    {
      "elementId": "gva",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "gva",
            "name": "gva",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 228,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "gva",
              "format": {
                "parse": {
                  "Year": "date"
                }
              },
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Region name'] == 'London'"
                }
              ]
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "gva",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "gva",
                "field": "Value"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "value",
              "labelFont": "Lato",
              "format": "s",
              "grid": true,
              "domain": false,
              "ticks": false,
              "titleFontWeight": "light",
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "gva"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "health-and-safety",
      "view": {
        "title": "Health and Safety",
        "legend": "Recent average roadside PM2.5 level",
        "footer": "Data are sourced from the Almaty Datastore.",
        "resources": [
          {
            "datasetId": "air-quality",
            "name": "monthly-averages",
            "transform": [
              {
                "type": "aggregate",
                "fields": [
                  "Month"
                ],
                "operations": [
                  "argmax"
                ]
              }
            ]
          }
        ],
        "specType": "figure",
        "spec": {
          "fieldName": "London Mean Background PM2.5 Particulate (ug/m3)",
          "suffix": " ug/m3"
        }
      }
    },
    {
      "elementId": "housing",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "home-affordability",
            "name": "london-home-index",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 238,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "london-home-index",
              "format": {
                "parse": {
                  "Year": "date"
                }
              }
            },
            {
              "name": "london",
              "source": "london-home-index",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum.Area == 'London'"
                }
              ]
            },
            {
              "name": "england",
              "source": "london-home-index",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum.Area == 'England'"
                }
              ]
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "london",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": true,
              "domain": {
                "data": "london",
                "field": "Value"
              },
              "domainMin": 2,
              "domainMax": 16
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "value",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "london"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "england"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#ECAFAF"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "london"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Almaty"
                  },
                  "y": {
                    "scale": "value",
                    "value": 9
                  },
                  "fill": {
                    "value": "#A95F6D"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "england"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Kazakhstan"
                  },
                  "y": {
                    "scale": "value",
                    "value": 3
                  },
                  "fill": {
                    "value": "#ECAFAF"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "life-expectancy",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "life-expectancy",
            "name": "male-life-expectancy",
            "transform": []
          },
          {
            "datasetId": "london-life-expectancy",
            "name": "female-life-expectancy",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 238,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "male-life-expectancy",
              "format": {
                "parse": {
                  "Year": "date"
                }
              }
            },
            {
              "name": "female-life-expectancy",
              "format": {
                "parse": {
                  "Year": "date"
                }
              }
            },
            {
              "name": "male-le-london",
              "source": "male-life-expectancy",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Local Authority'] == 'London'"
                }
              ]
            },
            {
              "name": "female-le-london",
              "source": "female-life-expectancy",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Local Authority'] == 'London'"
                }
              ]
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "male-le-london",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": true,
              "domain": {
                "data": "male-le-london",
                "field": "Value"
              },
              "domainMin": 72,
              "domainMax": 86
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "value",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "male-le-london"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "female-le-london"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#ECAFAF"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "male-le-london"
              },
              "encode": {
                "enter": {
                  "fill": {
                    "value": "A95F6D"
                  },
                  "zindex": {
                    "value": 10
                  },
                  "text": {
                    "value": "Male"
                  },
                  "y": {
                    "scale": "value",
                    "value": 75
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontSize": {
                    "value": 9
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "female-le-london"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Female"
                  },
                  "y": {
                    "scale": "value",
                    "value": 81
                  },
                  "fill": {
                    "value": "#ECAFAF"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "livability",
      "view": {
        "title": "Livability",
        "legend": "Bus journeys in recent month",
        "footer": "Data are sourced from the Almaty Datastore.",
        "resources": [
          {
            "datasetId": "public-transport",
            "name": "london-public-transport",
            "transform": [
              {
                "type": "aggregate",
                "fields": [
                  "Period beginning"
                ],
                "operations": [
                  "argmax"
                ]
              }
            ]
          }
        ],
        "specType": "figure",
        "spec": {
          "fieldName": "Bus journeys (m)",
          "suffix": " million"
        }
      }
    },
    {
      "elementId": "population",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "population",
            "name": "london-population-history",
            "transform": []
          },
          {
            "datasetId": "population",
            "name": "london-population-projection",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 238,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "london-population-history",
              "format": {
                "parse": {
                  "Year": "date"
                }
              }
            },
            {
              "name": "london-population-projection",
              "format": {
                "parse": {
                  "Year": "date"
                }
              }
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "london-population-history",
                "field": "Year"
              },
              "domainMax": 2524608000000
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "london-population-history",
                "field": "Value"
              },
              "domainMin": 6700000,
              "domainMax": 11500000
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelBound": true,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "value",
              "labelFont": "Lato",
              "grid": true,
              "format": "s",
              "domain": false,
              "ticks": false,
              "titleFontWeight": "light",
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "london-population-history"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "london-population-projection"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  },
                  "strokeDash": {
                    "value": [
                      5,
                      5
                    ]
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "transport-delays",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "underground-performance",
            "name": "key-trends",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 225,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "key-trends",
              "format": {
                "parse": {
                  "Month": "date"
                }
              }
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "key-trends",
                "field": "Month"
              }
            },
            {
              "name": "hours",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "key-trends",
                "field": "Number of Lost Customer Hours"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelBound": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "hours",
              "labelFont": "Lato",
              "format": "s",
              "domain": false,
              "ticks": false,
              "titleFontWeight": "light",
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "key-trends"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Month"
                  },
                  "y": {
                    "scale": "hours",
                    "field": "Number of Lost Customer Hours"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "transport-journeys",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "public-transport",
            "name": "london-public-transport",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 230,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "london-public-transport",
              "format": {
                "parse": {
                  "Period beginning": "date"
                }
              },
              "transform": [
                {
                  "type": "formula",
                  "expr": "parseInt(datum['DLR Journeys (m)']) + parseInt(datum['Tram Journeys (m)']) + parseInt(datum['Overground Journeys (m)']) || 0 + parseInt(datum['Emirates Airline Journeys (m)']) || 0 + parseInt(datum['TfL Rail Journeys (m)']) || 0",
                  "as": "other total"
                }
              ]
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "london-public-transport",
                "field": "Period beginning"
              }
            },
            {
              "name": "journeys",
              "type": "linear",
              "range": "height",
              "domain": {
                "data": "london-public-transport",
                "field": "[Bus journeys (m)]"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelBound": true,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "journeys",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "titleFontWeight": "light",
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "london-public-transport"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Period beginning"
                  },
                  "y": {
                    "scale": "journeys",
                    "field": "[Bus journeys (m)]"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "london-public-transport"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Period beginning"
                  },
                  "y": {
                    "scale": "journeys",
                    "field": "[Underground journeys (m)]"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#ECAFAF"
                  }
                }
              }
            },
            {
              "type": "line",
              "from": {
                "data": "london-public-transport"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Period beginning"
                  },
                  "y": {
                    "scale": "journeys",
                    "field": "other total"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#D7706C"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "london-public-transport"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Bus"
                  },
                  "y": {
                    "scale": "journeys",
                    "value": 200
                  },
                  "fill": {
                    "value": "#A95F6D"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "london-public-transport"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Underground"
                  },
                  "y": {
                    "scale": "journeys",
                    "value": 100
                  },
                  "fill": {
                    "value": "#ECAFAF"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "london-public-transport"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "All other"
                  },
                  "y": {
                    "scale": "journeys",
                    "value": 25
                  },
                  "fill": {
                    "value": "#D7706C"
                  },
                  "font": {
                    "value": "Lato"
                  },
                  "fontWeight": {
                    "value": 100
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "unemployment",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "unemployment",
            "name": "unemployment-rate",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 245,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "unemployment-rate",
              "format": {
                "parse": {
                  "date": "date"
                }
              }
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "unemployment-rate",
                "field": "date"
              }
            },
            {
              "name": "y",
              "type": "linear",
              "range": "height",
              "nice": true,
              "zero": false,
              "domain": {
                "data": "unemployment-rate",
                "field": "unemployment_rate"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10,
              "labelOverlap": true,
              "labelFontSize": 9
            },
            {
              "orient": "right",
              "scale": "y",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "grid": true,
              "labelFontSize": 9
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "unemployment-rate"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "date"
                  },
                  "y": {
                    "scale": "y",
                    "field": "unemployment_rate"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            }
          ]
        }
      }
    }
  ],
  "datasets": [
    "https://datahub.io/london/air-quality",
    "https://datahub.io/london/crime",
    "https://datahub.io/london/gva",
    "https://datahub.io/london/home-affordability",
    "https://datahub.io/london/life-expectancy",
    "https://datahub.io/london/population",
    "https://datahub.io/london/underground-performance",
    "https://datahub.io/london/public-transport",
    "https://datahub.io/london/unemployment"
  ]
}