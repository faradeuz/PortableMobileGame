// Глобальные данные
var name_images = new Array();  // Массив хранения массивов

// Обработчик события пришедшего от дочерних элементов таблицы
function eventMouse(event_object, x, y) {
    //var TableList = new Array();
	
    if (x >= 1 && x <= 2 && y >= 1 && y <= 2) {
        if (name_images[x - 1][y].length == 0) {
            name_images[x - 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        if (name_images[x + 1][y].length == 0) {
            name_images[x + 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        if (name_images[x][y - 1].length == 0) {
            name_images[x][y - 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        if (name_images[x][y + 1].length == 0) {
            name_images[x][y + 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    else if (x == 0 && y == 0) // угловые
    {
        if (name_images[x][y + 1].length == 0) {
            name_images[x][y + 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x + 1][y].length == 0) {
            name_images[x + 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    else if(x == 0 && y == 3)
    {
        if (name_images[x][y - 1].length == 0) {
            name_images[x][y - 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x + 1][y].length == 0) {
            name_images[x + 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    else if (x == 3 && y == 0) {
        if (name_images[x][y + 1].length == 0) {
            name_images[x][y + 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x - 1][y].length == 0) {
            name_images[x - 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    else if (x == 3 && y == 3) {
        if (name_images[x][y - 1].length == 0) {
            name_images[x][y - 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x - 1][y].length == 0) {
            name_images[x - 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    // угловые
    else if(x == 1 && y == 0 || x == 2 && y == 0)
    {
        if (name_images[x][y + 1].length == 0) {
            name_images[x][y + 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x - 1][y].length == 0) {
            name_images[x - 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x + 1][y].length == 0) {
            name_images[x + 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    else if (x == 1 && y == 3 || x == 2 && y == 3) {
        if (name_images[x][y - 1].length == 0) {
            name_images[x][y - 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x - 1][y].length == 0) {
            name_images[x - 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x + 1][y].length == 0) {
            name_images[x + 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    else if (x == 0 && y == 1 || x == 0 && y == 2) {
        if (name_images[x][y - 1].length == 0) {
            name_images[x][y - 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x][y + 1].length == 0) {
            name_images[x][y + 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x + 1][y].length == 0) {
            name_images[x + 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    else if (x == 3 && y == 1 || x == 3 && y == 2) {
        if (name_images[x][y - 1].length == 0) {
            name_images[x][y - 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x - 1][y].length == 0) {
            name_images[x - 1][y] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
        else if (name_images[x][y + 1].length == 0) {
            name_images[x][y + 1] = name_images[x][y];
            //TableList[x][y] = "";
            name_images[x][y] = "";
        }
    }
    // -------------------------------
    var tr = document.getElementById("tbl").getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        var td = tr.item(i).getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            //td.item(j).innerText = TableList[i][j];
            td.item(j).style.backgroundImage = "url(" + folder + "/" + name_images[i][j] + ".jpg)";
        }
    }
}
