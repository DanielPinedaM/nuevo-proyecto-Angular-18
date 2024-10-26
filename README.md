# Nuevo proyecto en Angular 18, Angular Material 18, Tailwind 3 y Sass

#### Estructura del Proyecto

* **src/app/guards/auth.guard.ts**: Protección de rutas

* **src/app/app-routing.module.ts**: Redireccionamiento de rutas

* Estilos en **tailwind.config.js**: Tailwind 3 y **src/scss/** Sass

* **src/enviroments/**: Variables de entorno

  * **src/enviroments/interface-environment.ts**: interface para tipos de datos de las variables de entorno

  * **src/enviroments/environment.ts**: Variables de entorno de ***produccion***

  * **src/enviroments/environment.test.ts**: Variables de entorno de ***pruebas***

  * **src/enviroments/environment.development.ts**: Variables de entorno de ***desarrollo (local)***

* **src/app/service/api/http.service.ts**: clase general para hacer peticiones http

* **src/app/service/RxJS-BehaviorSubject**: Archivos con [RxJS Behavior Subject](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject) 

* **src/app/service/RxJS-BehaviorSubject/layout/loader.service.ts**: loader general. Cuando se ejecuta **http.service.ts** el loader se muestra y oculta

* **src/app/components/home-route/dialog/dialog-accept-or-cancel**: modal aceptar o cancelar accion

* **src/app/utils/func/sessionStorage.ts** funciones con sessionStorage en base 64

* **src/app/types/constants**: constantes generales para usar en toda la web

* **src/app/types/interface**: interface generales para usar en toda la web

* **src/app/utils/class/GeneralClass.ts**: Clase general con funciones (metodos) generales para usar en toda la web

* **src/app/utils/class/AngularMaterialCustomPaginatorIntl.ts**: Traducir a español paginador de tablas de Angular Material

* **src/assets/icon**: Iconos de la pagina web

* **src/assets/img**: Imagenes de la pagina web

* Modulos separados en 3 archivos

  * **src/app/module/angular-material.module.ts**: Importar todos los de Angular Material
  * **src/app/module/pages.module.ts**: Componentes de Angular
  * **src/app/module/app.module.ts**: Modulo principal donde se importan los 2 archivos anteriores

#### Instalar paquetes

```javascript
nvm install 22
```

```javascript
nvm use 22
```

```javascript
npm i
```

#### [Ejecutar proyecto](https://youtu.be/xBMEvd7PyEY?si=4KH0nBKGi1dz0rW1)

```javascript
nvm use 22
```

comando | apunta a... | ruta archivo
------------ | ------------- | -------------
npm start | localhost | src/environments/environment.development.ts
npm run start:test | pruebas | src/environments/environment.test.ts
npm run start:prod | producción | src/environments/environment.ts

#### Generar build (dist) para desplegar

comando | apunta a... | ruta archivo
------------ | ------------- | -------------
npm run build:test | pruebas | src/environments/environment.test.ts
npm run build:prod | producción | src/environments/environment.ts

#### Maquetación
* Todos los componentes de Angular **no** pueden tener archivos de Sass con ```styleUrls```, se tiene que maquetar en Tailwind.

* Mezclar Sass con Tailwind es mala práctica porque Sass sobrescribe los estilos de Tailwind porque Sass tiene más especificidad que Tailwind.

* Los únicos archivos de Sass tienen que ser globales y estar en ```src/scss/global```.

#### Estructura de módulos
* **src/app/module**: Carpeta con los modulos (import) de todo el proyecto. **No** usar ```standalone: true```.

* **src/app/module/angular-material.module.ts**: import de Angular Material (```MatTableModule```, ```MatInputModule```, etc).

* **src/app/module/pages.module.ts**: import de componentes de Angular. Cada vez que se cree un nuevo componente de Angular agregarlo al array llamado ```angularComponents``` que esta en ```pages.module.ts```.

* **src/app/module/app.module.ts**: Módulo principal que importa *angular-material.module.ts* y *pages.module.ts*. En *app.module.ts* **no** se pueden importar modulos de Angular Material ni componentes de Angular.
