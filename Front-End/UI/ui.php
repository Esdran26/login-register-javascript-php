<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Css/ui.css">
    <title>Document</title>
</head>
<body>

    <form action="ui.php" method="post">
        <input type="search" name="searchId" id="searchId">
        <input type="submit" value="Buscar">
    </form>

    <table border="1" cellpadding="12">
        <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
        
        <!--<tr>
            <td>1005105044</td>
            <td>Lápiz</td>
            <td>500</td>
            <td><input type="number" name="quantity" id="quantity"></td>
        </tr>
        <tr>
            <td>1005105045</td>
            <td>Lapicero</td>
            <td>1000</td>
            <td><input type="number" name="quantity" id="quantity"></td>
        </tr>-->
    </table>

    <script src="ui.js"></script>
</body>
</html>