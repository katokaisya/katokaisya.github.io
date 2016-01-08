/*
 * # Pursuit - tmlib.js
 * マウスに追跡してくるよ♪
 */

// 定数
var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 960;
var SCREEN_CENTER_X = SCREEN_WIDTH/2;
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;
var CIRCLE_RADIUS   = 30;
var CIRCLE_MAX_NUM  = 15;
var CIRCLE_PURSUIT_RATE = 0.20;  // 収束率

// main
tm.main(function() {
    var app = tm.display.CanvasApp("#world");
    app.resize(640, 960);
    app.fitWindow();
    
    var circleGroup = tm.display.CanvasElement().addChildTo(app.currentScene);

    var circleList = [];
    (CIRCLE_MAX_NUM).times(function(i) {
        var c = "hsla({0}, 75%, 50%, 0.75)".format(360/CIRCLE_MAX_NUM*i);
        var circle = Circle(c).addChildTo(circleGroup);
        circle.x = tm.util.Random.randint(0, SCREEN_WIDTH);
        circle.y = tm.util.Random.randint(0, SCREEN_HEIGHT);
    });
    
    // チェイン
    circleGroup.children.reduce(function(prev, current) {
        current.target = prev;
        return current;
    }, null);

    // 実行
    app.run();
});


tm.define("Circle", {
    superClass: "tm.app.CanvasElement",

    init: function(color) {
        this.superInit();
        this.color = color;
        this.blendMode = "lighter";
    },
    
    update: function(app) {
        if (this.target) {
            this.x += (this.target.x-this.x)*CIRCLE_PURSUIT_RATE;
            this.y += (this.target.y-this.y)*CIRCLE_PURSUIT_RATE;
        }
        else {
            this.x = app.pointing.x;
            this.y = app.pointing.y;
        }
    },
    
    draw: function(c) {
        c.fillStyle = this.color;
        c.fillCircle(0, 0, CIRCLE_RADIUS);
	//中心からの距離
    },
});





