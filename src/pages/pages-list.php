<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>page list</title>
  <style type="text/css">
    body {
      margin: 0;
      font: sans-serif 16px/1.4;
      box-sizing: border-box;
    }

    li {
      margin-bottom: 10px;
    }

    a {
      display: inline-block;
    }

    a:focus {
      color: chocolate;
    }

    div {
      padding-left: 40px;
      margin-bottom: 20px;
    }

    div svg {
      width: 200px;
      height: 40px;
    }

    div svg use {
      fill: #141b4d;
    }

    ul {
      padding-left: 15px;
      list-style: none;
    }

    li {
      position: relative;
      padding-left: 15px;
    }

    li:before {
      position: absolute;
      content: "";
      top: 7px;
      left: 0;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #000;
    }

    .note {
      color: green;
      font-size: 18px;
      margin-top: 5px;
      margin-bottom: 0;
    }

    .note span {
      color: red;
    }
  </style>
</head>

<body>
  <div style="padding: 15px 40px;">
    <svg class="">
      <use xlink:href="/build/img/sprite.svg#logo"></use>
    </svg>
  </div>

  <div>
    <ul>
        <li><a href="./vendors.php" target="_blank">Вендоры (!адаптив 100%)</a></li>
        <li><a href="./index.php" target="_blank">Главная (!адаптив 100%)</a></li>
        <li><a href="./contracts.php" target="_blank">Договоры (!адаптив 100%)</a></li>
        <li><a href="./contacts.php" target="_blank">Контакты (!адаптив 100%)</a></li>
        <li><a href="./cooperation.php" target="_blank">Коопирейшн (!адаптив 100%)</a></li>
        <li><a href="./leasing.php" target="_blank">Лизинг оргтехники (!адаптив 100%)</a></li>
        <li><a href="./about.php" target="_blank">О компании (!адаптив 100%)</a></li>
        <li><a href="./wholesale.php" target="_blank">Оптовые продажи (!адаптив 100%)</a></li>
        <li><a href="./copy-contract.php" target="_blank">Покопийный контракт (!адаптив 100%)</a></li>
        <li><a href="./business-solutions.php" target="_blank">Решения для бизнеса (!адаптив 100%)</a></li>
        <li><a href="./service-repair.php" target="_blank">Сервис и ремонт (!адаптив 100%)</a></li>
        <li><a href="./write-off.php" target="_blank">Списание оргтехники (!адаптив 100%)</a></li>
        <li><a href="./vendors-page.php" target="_blank">Страница вендоров (!адаптив 100%)</a></li>
        <li><a href="./trade-in.php" target="_blank">Трейд-ин оргтехники (!адаптив 100%)</a></li>
        <li><a href="./cooperation-form.php" target="_blank">Форма сотрудничества (!адаптив 100%)</a></li>
    </ul>
  </div>
</body>

</html>