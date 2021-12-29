var config = {
  "widgets": [
    {
      "elementId": "economy",
      "view": {
        "title": "Economy",
        "legend": "Recent GNI per capita figure based on purchasing power parity",
        "footer": "Data is sourced from Open Data Kazakhstan project.",
        "resources": [
          {
            "datasetId": "gni-per-capita-ppp",
            "name": "gni-per-capita-ppp",
            "transform": [
              {
                "type": "filter",
                "expression": "data['Country Code'] == 'KAZ'"
              },
              {
                "type": "aggregate",
                "fields": [
                  "Year"
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
          "fieldName": "Value",
          "suffix": " Int$"
        }
      }
    },
    {
      "elementId": "gdp-per-capita-ppp",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "gdp-per-capita-ppp",
            "name": "gdp-per-capita",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 280,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "gdp-per-capita",
              "format": {
                "parse": {
                  "Year": "date"
                }
              },
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Year'] > 1987"
                }
              ]
            },
            {
              "name": "kz",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'KAZ'"
                }
              ]
            },
            {
              "name": "kg",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'KGZ'"
                }
              ]
            },
            {
              "name": "ru",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'RUS'"
                }
              ]
            },
            {
              "name": "uz",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'UZB'"
                }
              ]
            },
            {
              "name": "eca",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'ECA'"
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
                "data": "gdp-per-capita",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "gdp-per-capita",
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
                "data": "kz"
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
                    "value": "#01aeca"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "kz"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Kazakhstan"
                  },
                  "y": {
                    "scale": "value",
                    "value": 23000
                  },
                  "fill": {
                    "value": "#01aeca"
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
              "type": "line",
              "from": {
                "data": "ru"
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
                    "value": "#0236a6"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "ru"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Russia"
                  },
                  "y": {
                    "scale": "value",
                    "value": 25000
                  },
                  "fill": {
                    "value": "#0236a6"
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
              "type": "line",
              "from": {
                "data": "uz"
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
                    "value": "#30b24b"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "uz"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Uzbekistan"
                  },
                  "y": {
                    "scale": "value",
                    "value": 21000
                  },
                  "fill": {
                    "value": "#30b24b"
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
              "type": "line",
              "from": {
                "data": "kg"
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
                    "value": "#e50f2b"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "kg"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Kyrgyz Republic"
                  },
                  "y": {
                    "scale": "value",
                    "value": 19000
                  },
                  "fill": {
                    "value": "#e50f2b"
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
              "type": "line",
              "from": {
                "data": "eca"
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
                "data": "eca"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Europe & Central Asia (excluding high income)"
                  },
                  "y": {
                    "scale": "value",
                    "value": 27000
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
      "elementId": "gdp-per-capita",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "gdp-per-capita",
            "name": "gdp-per-capita",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 280,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "gdp-per-capita",
              "format": {
                "parse": {
                  "Year": "date"
                }
              },
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Year'] > 1987"
                }
              ]
            },
            {
              "name": "kz",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'KAZ'"
                }
              ]
            },
            {
              "name": "kg",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'KGZ'"
                }
              ]
            },
            {
              "name": "ru",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'RUS'"
                }
              ]
            },
            {
              "name": "uz",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'UZB'"
                }
              ]
            },
            {
              "name": "eca",
              "source": "gdp-per-capita",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'ECA'"
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
                "data": "gdp-per-capita",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "gdp-per-capita",
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
                "data": "kz"
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
                    "value": "#01aeca"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "kz"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Kazakhstan"
                  },
                  "y": {
                    "scale": "value",
                    "value": 11500
                  },
                  "fill": {
                    "value": "#01aeca"
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
              "type": "line",
              "from": {
                "data": "ru"
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
                    "value": "#0236a6"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "ru"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Russia"
                  },
                  "y": {
                    "scale": "value",
                    "value": 13000
                  },
                  "fill": {
                    "value": "#0236a6"
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
              "type": "line",
              "from": {
                "data": "uz"
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
                    "value": "#30b24b"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "uz"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Uzbekistan"
                  },
                  "y": {
                    "scale": "value",
                    "value": 10000
                  },
                  "fill": {
                    "value": "#30b24b"
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
              "type": "line",
              "from": {
                "data": "kg"
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
                    "value": "#e50f2b"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "kg"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Kyrgyz Republic"
                  },
                  "y": {
                    "scale": "value",
                    "value": 8500
                  },
                  "fill": {
                    "value": "#e50f2b"
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
              "type": "line",
              "from": {
                "data": "eca"
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
                "data": "eca"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Europe & Central Asia (excluding high income)"
                  },
                  "y": {
                    "scale": "value",
                    "value": 14500
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
      "elementId": "gni-per-capita-ppp",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "gni-per-capita-ppp",
            "name": "gni-per-capita-ppp",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 280,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "gni-per-capita-ppp",
              "format": {
                "parse": {
                  "Year": "date"
                }
              },
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Year'] > 1987"
                }
              ]
            },
            {
              "name": "kz",
              "source": "gni-per-capita-ppp",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'KAZ'"
                }
              ]
            },
            {
              "name": "kg",
              "source": "gni-per-capita-ppp",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'KGZ'"
                }
              ]
            },
            {
              "name": "ru",
              "source": "gni-per-capita-ppp",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'RUS'"
                }
              ]
            },
            {
              "name": "uz",
              "source": "gni-per-capita-ppp",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'UZB'"
                }
              ]
            },
            {
              "name": "eca",
              "source": "gni-per-capita-ppp",
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Country Code'] == 'ECA'"
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
                "data": "gni-per-capita-ppp",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "gni-per-capita-ppp",
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
                "data": "kz"
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
                    "value": "#01aeca"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "kz"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Kazakhstan"
                  },
                  "y": {
                    "scale": "value",
                    "value": 23000
                  },
                  "fill": {
                    "value": "#01aeca"
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
              "type": "line",
              "from": {
                "data": "ru"
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
                    "value": "#0236a6"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "ru"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Russia"
                  },
                  "y": {
                    "scale": "value",
                    "value": 25000
                  },
                  "fill": {
                    "value": "#0236a6"
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
              "type": "line",
              "from": {
                "data": "uz"
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
                    "value": "#30b24b"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "uz"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Uzbekistan"
                  },
                  "y": {
                    "scale": "value",
                    "value": 21000
                  },
                  "fill": {
                    "value": "#30b24b"
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
              "type": "line",
              "from": {
                "data": "kg"
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
                    "value": "#e50f2b"
                  }
                }
              }
            },
            {
              "type": "text",
              "from": {
                "data": "kg"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Kyrgyz Republic"
                  },
                  "y": {
                    "scale": "value",
                    "value": 19000
                  },
                  "fill": {
                    "value": "#e50f2b"
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
              "type": "line",
              "from": {
                "data": "eca"
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
                "data": "eca"
              },
              "encode": {
                "enter": {
                  "text": {
                    "value": "Europe & Central Asia (excluding high income)"
                  },
                  "y": {
                    "scale": "value",
                    "value": 27000
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
    }
  ],
  "datasets": [
    "https://github.com/open-data-kazakhstan/gdp-per-capita-ppp",
    "https://github.com/open-data-kazakhstan/gdp-per-capita",
    "https://github.com/open-data-kazakhstan/gni-per-capita-ppp"
  ]
}