data = {
    "1": {
        "name": "Полина Нестерова",
        "coins": 34,
        "exp": 110,
        "photo": "popo.jpg"
    }, "2": {
        "name": "Андрей Красник",
        "coins": 40,
        "exp": 0,
        "photo": "andrey.jpg"
    }, "3": {
        "name": "Екатерина Сакова",
        "coins": 170,
        "exp": 60,
        "photo": "katya.jpg"
    }, "4": {
        "name": "Елизавета Ясинская",
        "coins": 72,
        "exp": 20,
        "photo": "liza.jpg"
    }, "5": {
        "name": "Елизавета Ветлужских",
        "coins": 0,
        "exp": 0,
        "photo": "liza2.jpg"
    }, "6": {
        "name": "Алина Марченкова",
        "coins": 3,
        "exp": 30,
        "photo": "alina.jpg"
    }, "7": {
        "name": "Анастасия Короткова",
        "coins": 20,
        "exp": 70,
        "photo": "asya.jpg"
    }, "8": {
        "name": "Валентин-Демьян Воронин",
        "coins": 21,
        "exp": 80,
        "photo": "wel.jpg"
    }, "9": {
        "name": "Дария Крымова",
        "coins": 10,
        "exp": 50,
        "photo": "dariy.jpg"
    }, "10": {
        "name": "Евгений Манжеев",
        "coins": 1,
        "exp": 30,
        "photo": "zhenya.jpg"
    }, "11": {
        "name": "Александр Якубов",
        "coins": 0,
        "exp": 0,
        "photo": "sanya.jpg"
    }, "12": {
        "name": "Анастасия Тишкина",
        "coins": 20,
        "exp": 70,
        "photo": "tish.jpg"
    }, "13": {
        "name": "Кирилл Рогачёв",
        "coins": 21,
        "exp": 60,
        "photo": "rog.jpg"
    }, "14": {
        "name": "Светлана Шальнова",
        "coins": 20,
        "exp": 60,
        "photo": "svet.jpg"
    }, "15": {
        "name": "Олеся Минченкова",
        "coins": 20,
        "exp": 50,
        "photo": "olesya.jpg"
    }, "16": {
        "name": "Валерия Антипенко",
        "coins": 0,
        "exp": 30,
        "photo": "lerchic.jpg"
    }, "17": {
        "name": "Даниила Ковалева",
        "coins": 0,
        "exp": 20,
        "photo": "dana.jpg"
    }, "18": {
        "name": "Марина Ермакова",
        "coins": 0,
        "exp": 10,
        "photo": "marina.jpg"
    }, "19": {
        "name": "Иван Залипаев",
        "coins": 10,
        "exp": 70,
        "photo": "ivan.jpg"
    }, "20": {
        "name": "Валерия Бормотова",
        "coins": 20,
        "exp": 70,
        "photo": "bor.jpg"
    }, "21": {
        "name": "Даша Толшмякова",
        "coins": 0,
        "exp": 60,
        "photo": "tolsh.jpg"
    }, "22": {
        "name": "Валерия Толочко",
        "coins": 20,
        "exp": 70,
        "photo": "tolo.jpg"
    }, "23": {
        "name": "Максим Осипов",
        "coins": 0,
        "exp": 10,
        "photo": "osi.jpg"
    }, "24": {
        "name": "Диана Тен",
        "coins": 0,
        "exp": 10,
        "photo": "di.jpg"
    }, "25": {
        "name": "Полина Колесникова",
        "coins": 20,
        "exp": 50,
        "photo": "kol.jpg"
    }, "26": {
        "name": "Михаил Виноградов",
        "coins": 0,
        "exp": 0,
        "photo": "vino.jpg"
    }, "27": {
        "name": "Алёна Чумак",
        "coins": 0,
        "exp": 10,
        "photo": "alena.jpg"
    }, "28": {
        "name": "Валерия Гришина",
        "coins": 20,
        "exp": 50,
        "photo": "grish.jpg"
    }, "29": {
        "name": "Катерина Плешакова",
        "coins": 0,
        "exp": 0,
        "photo": "pleshakova.jpg"
    }, "30": {
        "name": "Павел Максимов",
        "coins": 0,
        "exp": 0,
        "photo": "max.jpg"
    }, "31": {
        "name": "Римма Калиничева",
        "coins": 0,
        "exp": 0,
        "photo": "rimma.jpg"
    }, "32": {
        "name": "Оля Акуленко",
        "coins": 0,
        "exp": 0,
        "photo": "shark.jpg"
    }, "33": {
        "name": "Тася Карпунина",
        "coins": 4,
        "exp": 0,
        "photo": "tasya.jpg"
    }, "34": {
        "name": "Татьяна Сафронова",
        "coins": 20,
        "exp": 50,
        "photo": "saf.jpg"
    }, "35": {
        "name": "Мария Соломян",
        "coins": 0,
        "exp": 40,
        "photo": "sol.jpg"
    }, "36": {
        "name": "Юлия Ярыгина",
        "coins": 5,
        "exp": 0,
        "photo": "yar.jpg"
    }, "37": {
        "name": "Анжела Финаева",
        "coins": 2,
        "exp": 30,
        "photo": "angel.png"
    }
}

const sortedData = Object.entries(data)
  .sort((a, b) => b[1].coins - a[1].coins)
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

body = document.querySelector("body")

for (const [key, value] of Object.entries(sortedData)) {
    let item = document.createElement("div")
    item.classList.add("item")

    let img = document.createElement("img")
    img.src = "img/" + value["photo"]
    img.classList.add("photo")
    item.append(img)

    let name = document.createElement("span")
    name.classList.add("name")
    name.innerText = value["name"]
    item.append(name)

    let coins = document.createElement("span")
    coins.classList.add("coins")
    coins.innerText = value["coins"] + " DriveCoins"
    item.append(coins)

    let level = document.createElement("span")
    level.classList.add("level")
    level.innerText = (Math.floor(value["exp"] / 100) + 1) + " Level"
    item.append(level)

    let range = document.createElement("input")
    range.type = "range"
    range.disabled = true
    range.classList.add("progress-bar")
    range.value = Math.floor(value["exp"] / 100)
    item.append(range)

    let exp = document.createElement("span")
    exp.classList.add("exp")
    exp.innerText = value["exp"] + " DriveExp"
    item.append(exp)

    body.append(item);
}
