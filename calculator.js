var block = document.querySelectorAll('.subitem');
var itog = document.querySelector('.itog');
var area = document.querySelector('.input-area-value');
var subtitle = document.querySelector('.subtitle-area');
var sum = '';
var result = {};

document.body.onload = function () {

    itog.textContent = "Ориентировочная стоимость: 0";

    for (var i = 0; i < block.length; i++) {
        block[i].addEventListener('input', function (event) {
            var target = event.target;
            if (target.name == 'type-house') {
                if (target.className === 'radio-calc set-tanhaus') {
                    subtitle.textContent = "Площадь таунхауса/коттеджа (м2)";
                } else {
                    subtitle.textContent = "Площадь квартиры (м2)";
                }
                result.typeObject = target.value;
                result.typeObject = parseFloat(result.typeObject);

            }
            if (target.name == 'view-house') {
                result.viewObject = target.value;
                result.viewObject = parseFloat(result.viewObject);
            }
            if (target.name == 'apartment-area') {
                if (target.value.length <= 0) {
                    return area.value = '';
                }
                result.areaObject = target.value;
                result.areaObject = parseFloat(result.areaObject);
                area.value = result.areaObject;

            }
            valueOut();
        })
    }
}


function valueOut() {
    var res = 0;
    for (var key in result) {
        var values = result[key];
        res += result[key];
    }
    if (result.areaObject > 0) {
        res = res * result.areaObject;
    }
    itog.innerHTML = 'Ориентировочная стоимость:' + ":" + res;
}

