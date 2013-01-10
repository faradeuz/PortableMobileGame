var folder = "image1";
// Функция генерации случайного целого числа в заданном диапазоне
function randomNumber(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

// Функция генерация частей изображения
function reload_rand() {
var rand_name_id = new Array();

var n = -1;
rand_name_id[0] = n;
var w = 0;

for (var j = 0; j < 4; j++) {
    name_images[j] = new Array();
    for (var k = 0; k < 4; k++) {
        var valid = false;
        var p = false;
        while (!valid) {
            n = randomNumber(1, 16);

            for (var q = 0; q < rand_name_id.length; q++) {
                if (rand_name_id[q] == n) {
                    p = true;
                    break;
                }
            }
            if (!p) {
                rand_name_id[w++] = n;
                valid = true;
                p = false;
            }
            p = false;
        }
        name_images[j][k] = 'pic' + n;
    }
}

n = randomNumber(1, 16);
for (var l = 0; l < 4; l++)
    for (var t = 0; t < 4; t++)
        if (name_images[l][t] == "pic" + n) {
            name_images[l][t] = "";
            break;
        }
    var tr = document.getElementById("tbl").getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var td = tr.item(i).getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
                td.item(j).style.backgroundImage = "url(" + folder + "/" + name_images[i][j] + ".jpg)";
        }
    }
}

// Функция переключения изображений из заранее заготовленных файлов
function next_image() {
    if (folder == "image")
	{
        folder = "image1";
		reset_image();
	}
    else
	{
        folder = "image";
		reset_image();
	}
}

// Функция сброса в исходное состояние изображения
function reset_image()
{
	var n;
	var n2 = 1;
	
	n = randomNumber(1, 16);
	
	var tr = document.getElementById("tbl").getElementsByTagName("tr");
	for (var i = 0; i < tr.length; i++) {
	var td = tr.item(i).getElementsByTagName("td");

	for (var j = 0; j < td.length; j++) {
			td.item(j).style.backgroundImage = "url(" + folder + "/" + "pic" + n2++ + ".jpg)";
		}
	}	
}
