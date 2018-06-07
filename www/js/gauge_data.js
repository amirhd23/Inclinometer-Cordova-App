class GaugeData {
    constructor(canvasWidth) {
        this.radialGaugeParams = {
            width: canvasWidth,
            animationDuration: 500,
            borderShadowWidth: 0,
            //colorNeedleShadowDown: "#E65100",
            //colorBorderOuterEnd: "#fff",
            //colorBorderOuter: "#C0C0C0",
            borders: true,
            needleWidth: 3,
            needleType: "arrow",
            animationRule: "linear",
            needleCircleOuter: true,
            needleCircleSize: 7,
            //colorNeedleCircleOuter: "#333",
            //colorNumbers: "#444",//"#eee"
            //colorMinorTicks: "#666",//"ddd"
            //colorMajorTicks: "#444",//"ddd"
            //colorPlate: "#fff",//"#212121"
            highlights: [
                {
                    "from": -90,
                    "to": 0,
                    "color" : "#ccc"
                    //"color": "rgba(33, 150, 243, 0.5)"
                },
                {
                    "from": 0,
                    "to": 90,
                    "color" : "#eee"
                    //"color": "rgba(244, 67, 54, 0.5)"
                }
            ],
            strokeTicks: true,
            startAngle: 90,
            ticksAngle: 180,
            minorTicks: 5,
            majorTicks: [
                -90,
                -75,
                -60,
                -45,
                -30,
                -15,
                0,
                15,
                30,
                45,
                60,
                75,
                90
            ],
            maxValue: 90,
            minValue: -90,
            //colorTitle: "#888",//"#eee"
            units: "Degree",
            needleCircleInner: false,
            height: canvasHeight,
            /*colorValueBoxRectEnd: "#333",
            colorValueBoxRect: "#222",*/
            /*valueBoxBorderRadius: 2,
            colorNeedleCircleInnerEnd: "#222",
            colorNeedleCircleInner: "#111",
            colorNeedleCircleOuterEnd: "#111",
            colorBorderInnerEnd: "#333",
            colorBorderInner: "#111",
            colorBorderMiddleEnd: "#111",
            colorBorderMiddle: "#222",
            colorUnits: "#888"//"#ccc"*/
        };
    }

    
}