var nameandSurname = {
    "name": "MUSTAFA KEMAL "+"<br/>", 
    "surname": "ÇELİK"+"<br/>",
    "number": "699"
}

var jsonToString = JSON.stringify(nameandSurname)
var parseJson = JSON.parse(jsonToString)
document.write("Name: " + parseJson.name + "\t" + "Surname: " + parseJson.surname + "\t" + "Number: " + parseJson.number)