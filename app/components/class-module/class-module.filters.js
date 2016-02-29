angular.module('lazyload').filter('tel', function () {
    return function (tel) {
        if (tel) {
            var value = tel.toString().trim().replace(/^\+/, '');
            if (value.match(/[^0-9]/)) {
                return tel;
            }
            var country, city, number;
            switch (value.length) {
                case 1:
                case 2:
                case 3:
                    city = value;
                    break;
                default:
                    city = value.slice(0, 3);
                    number = value.slice(3);
            }
            if (number) {
                if (number.length>3) {
                    number = number.slice(0, 3) + '-' + number.slice(3,7);
                } else {
                    number = number;
                }
                return ("(" + city + ") " + number).trim();
            } else {
                return "(" + city;
            }
        }
    }
})
.filter('class_filter', function () {
    return function (input) {
        var result = [];
        var tmp = {};
        for (var i = 0; i < input.length; i++) {
            if (typeof tmp[input[i]['class']] == 'undefined') {
                tmp[input[i]['class']] = [];
            }
            tmp[input[i]['class']].push(input[i]);
        }
        for (i in tmp) {
            var sorted = tmp[i].sort(function(a,b){
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            result.push(sorted);
        }
        result = [].concat.apply([], result);
        return result;
    }
});