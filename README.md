# Onboarding App
## Descripción
La aplicación de Onboarding es una solución desarrollada en Node.js para la gestión de talento de tu empresa. Su objetivo es facilitar el proceso de incorporación de nuevos empleados al proporcionar un control centralizado y automatizado.

La aplicación sigue los principios de clean code mediante una correcta estructura de carpetas, donde los controladores, las rutas y los modelos se encuentran separados para mejorar la organización y mantenibilidad del código. Además, utiliza el patrón de diseño de middleware y las clases se crearon extendiendo Sequelize, lo cual permite una mayor flexibilidad y escalabilidad en el desarrollo.

La base de datos se implementó en AWS utilizando RDS, lo que garantiza la escalabilidad, disponibilidad y seguridad de los datos. La aplicación se desplegará en Lambda para aprovechar la arquitectura serverless, lo cual proporciona una infraestructura altamente escalable y reduce los costos operativos.


# Estructura del repositorio
El repositorio de la aplicación sigue una estructura organizada y fácil de navegar. A continuación, se describen las principales carpetas y archivos:

- controllers: Contiene los controladores de la aplicación, donde se define la lógica de negocio y las operaciones relacionadas con el onboarding de los empleados.

- routes: Aquí se encuentran las rutas de la aplicación, que definen las API endpoints y su correspondiente controlador para cada operación.

- models: Contiene los modelos de datos utilizados por Sequelize para interactuar con la base de datos. Cada modelo representa una entidad de la aplicación, como "Criterio" o "Evaluación".

- database: En esta carpeta se encuentran los archivos relacionados con la base de datos. El archivo "SP's" contiene los Stored Procedures escritos en TSQL que se utilizan en la aplicación.

- middleware: Aquí se encuentran los archivos de middleware, que se utilizan para realizar operaciones comunes antes o después de ejecutar una ruta.

- utils: Contiene archivos de utilidades o funciones auxiliares que se utilizan en diferentes partes de la aplicación.

- serverless: Esta archivo contiene las configuraciones necesarias para el despliegue de la aplicación en Lambda. Se utiliza el framework Serverless para facilitar el despliegue y la configuración de la aplicación.

- README.md: Este archivo README, que proporciona información sobre la aplicación, su estructura y cómo utilizarla.

## Requisitos previos
Antes de utilizar la aplicación, asegúrate de tener instalado lo siguiente:

- Node.js (versión 16)
- Serverless Framework (versión 3)

## Configuración
Sigue los pasos a continuación para configurar la aplicación:

1. Clona este repositorio en tu máquina local.
```
git clone https://github.com/tu-usuario/onboarding-app.git
```
2. Instala las dependencias de la aplicación.
```
npm install
```
3. Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
```
ACCESS_TOKEN_SECRET= # JWT access token secret
REFRESH_TOKEN_SECRET= # JWT refresh token secret
SES_HOST= # AWS SES host
HOST= # Database host
USER= # Database user
PASSWORD= # Database password
DB= # Database name
DIALECT= # Database dialect
```

## Uso
Una vez que hayas completado la configuración, puedes utilizar los siguientes comandos para ejecutar la aplicación:

1. Iniciar la aplicación localmente:
```
npm start
```

2. Desplegar la aplicación en Lambda:
```
serverless deploy
```


## Información adicional
Para obtener más información sobre cómo utilizar la aplicación y sus características, consulta la documentación incluida en el repositorio o ponte en contacto con el equipo de desarrollo.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para obtener más información.