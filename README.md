# milano.python.it (fu pythonmilano.xyz)

Il nostro sito!

raggiungibile da qui -> [milano.python.it](http://milano.python.it/)

## Come contribuire

Il sito è sviluppato con `node`, è possibile contribuire usando docker.

per ora utilizziamo solo `scss`, in futuro si vedrà :)

Pull Requests Are Welcome! :-)

### Sviluppo

```
npm i
npm run dev
```

Attiva un live server che lancia `index.html`. 

L'indirizzo è http://localhost:8080

### Build

```
npm i
npm run build
```

### Usando docker o podman

```
podman build -t pythonmilano .
podman run --name pythonmilano --rm -p 8080:8080 pythonmilano
```

## Credits

* Logo: [Giulia Treves](https://www.facebook.com/TU-VES-1442116032759831/)
* Sviluppo principale: [@zanza00](https://github.com/zanza00)
* Sviluppi secondari: [@cstrap](https://github.com/cstrap)
* Template based on _Miniport_ by [HTML5 UP](html5up.net) | [@ajlkn](aj@lkn.io)

