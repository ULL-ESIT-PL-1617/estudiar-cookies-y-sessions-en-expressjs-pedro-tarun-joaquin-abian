# Set-get-check-cookie.js

---

> Credits: w3schools.com

### ¿Qué son las cookies?

Las cookies son datos, almacenados en archivos de texto pequeños, en el equipo.

Cuando un servidor web envia una pagina web a un navegador, la conexion se cierra, y el servidor olvida todo lo realcionado con el usuario.

Las cookies se inventaron para resolver el problema de "cómo recordar la informacion sobre el usuario":

* Cuando un usuario visita una pagina web, su nombre puede ser almacenado en una cookie
* La proxima vez que el usuario visite la página, la cookie "recuerda" su nombre.

Las cookies se guardan en pares de nombre y valor como:

```js
username = John Doe
```

Cuando un navegador solicita una página web desde un servidor, las cookies de la página se agregan a la solicitud. De esta manera el servidor recibe los datos necesarios para "recordar" toda esa informacion acerca de los usuarios.

### Creando un cookie con Javascript

JavaScript puede crear, leer y borrar las cookies con el **document.cookie**.

Con JavaScript, un cookie se puede crear de esta manera:

```js
document.cookie = "username=John Doe";
```

Se le puede dar también una fecha de expiración. Por defecto, el cookie es borrado cuando se cierra el navegador:

```js
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
```

Con un parámetro de path, le puedes decir al navegador a que path pertenece el cookie. Por defecto, los cookies pertenecen a la página actual:

```js
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

### Leer un Cookie con JavaScript

Con JavaScript, los cookies se pueden leer así:

```js
var x = document.cookie;
```

> document.cookie devuelve todas las cookies en un string parecido a: cookie1=value; cookie2=value; cookie3=value;

### Cambiar un Cookie con JavaScript

Con Javascript, puedes cambiar un cookie de la misma manera que lo creaste:

```js
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

De esta manera, el cookie antiguo se sobreescribe.

### Borrar un cookie con Javascript

Borrar un cookie es muy sencillo. Para ello, actualiza el tiempo de expiracion en una fecha ya pasada:

```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

### Ejemplo de cookie en JavaScript

En el ejemplo que verémos a continuación, crearemos un cookie que almacena el nombre de un visitante. Estos ejemplos se pueden comprobar desde la consola de cualquier navegador.

La primera vez que un visitante visita la pagina web, se le hará rellenar su nombre. El nombre quedará almacenado en un cookie.

La siguiente vez que el visitante llegue a la pagina, recibirá un mensaje de bienvenida.

Para el ejemplo crearemos 3 funciones en JavaScript:

* Una funcion para añadir un valor a una cookie
* Una funcion para obtener un valor de una cookie
* Una funcion para comprobar el valor de una cookie

#### La función para añadir una cookie

Primero vamos a crear la funcion que almacena el nombre del visitante en una cookie:

```js
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
```

###### Explicación del ejemplo

Los parámetros de la funcion son el nombre de la cookie \(cname\), el valor de la cookie \(cvalue\), y el numero de dias para que expire el cookie \(exdays\).

La función almacena un cookie añadiendo el nombre del cookie, su valor y la fecha de expiración mediante la última línea:

```js
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
```

#### La función para obtener un cookie

A continuación, vamos a crear una función que devuelve el valor de un cookie específico:

```js
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
```

###### Explicación del ejemplo

El nombre del cookie se obtiene por parámetros \(cname\).

Se crea una variable nombre con el nombre del cookie y "=".

Se decodifica el cookie string, para poder manejar cookies con caracteres especiales, como '$'.

Se parte el document.cookie por ";" en un array de tokens \(ca\).

Se recorren todos los tokens del vector en un bucle "for", es decir, todas las cookies y se almacena el cookie actual en la variable "c". Si el cookie se encuentra, es decir si c contiene \(cname\), se devuelve el valor del cookie \(name.length y c.length\).

#### La función para comprobar un cookie

Por último, crearemos una funcion que comprueba si un cookie está añadido.

```js
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
```

###### Explicación del ejemplo

Si se encuentra el cookie dentro del string, se enviará un mensaje de saludo con el nombre del usuario que ya ha sido añadido al string de cookies. Si no, se le pide que introduzca su nombre y se crea un cookie con su nombre correspondiente y fecha de expiración en un año. Este cookie por último se almacena con la funcion previamente creada
