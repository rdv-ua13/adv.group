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
        <li><a href="./index.php" target="_blank">Главная (!адаптив 100%)</a></li>
    </ul>
  </div>
</body>

</html>