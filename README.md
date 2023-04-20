## Nombre
> prueba tecnica.

## Herramientas que tienes que tener instaladas en tu sistema operativo
* nodejs __v16.13.1__
* typescript __v4.5.4__

# Instalación
* ```npm install``` o ```yarn install ```
    
## Uso
### Crear variables de entorno
* Crear archivo __.env__ y __.production.env__
    
    - Dentro del archivo __.env__
        
        - `PORT=`
        - `HOST=`
        - `DB_PORT=27015`
        - `DB_HOST=localhost`
        - `DB_DATABASE=micro_gw_negocios_mvp`
        - `DB_USER=gootwork`
        - `DB_PASSWORD=secret`
        - `JWT_SECRET=`
        - `GOOGLE_CLIENT_ID=`
        - `GOOGLE_CLIENT_SECRET=`
        - `FACEBOOK_APP_ID=`
        - `FACEBOOK_APP_SECRET=`
    - Dentro del archivo __.production.env__
        
        - `PORT=`
        - `HOST=`
        - `GOOGLE_CLIENT_ID=`
        - `GOOGLE_CLIENT_SECRET=`
        - `FACEBOOK_APP_ID=`
        - `FACEBOOK_APP_SECRET=`

* ```docker-compose up -d```
##### Desarrollo
* ```npm run start:dev``` o ```yarn start:dev```
##### Producción
* ```npm run start:prod``` o ```yarn start:prod```

También puede documentar comandos para limpiar el código o ejecutar pruebas . Estos pasos ayudan a garantizar una alta calidad del código y reducen la probabilidad de que los cambios rompan algo sin darse cuenta. Tener instrucciones para ejecutar pruebas es especialmente útil si requiere una configuración externa, como iniciar un servidor Selenium para realizar pruebas en un navegador.

## Autores y reconocimiento
Muestre su agradecimiento a aquellos que han contribuido al proyecto.

## Licencia
Para proyectos de código abierto, diga cómo se licencia .