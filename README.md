# Stock Management System

Este proyecto es un sistema de gestión de inventario desarrollado con React para el frontend y Express con Drizzle para el backend. El objetivo es proporcionar una aplicación completa para la gestión de productos, pedidos y otros aspectos del inventario.

# Estructura del Proyecto

El proyecto está organizado en un monorepo con las siguientes carpetas principales:

- `frontend`: Contiene la aplicación de React.
- `backend`: Contiene la API construida con Express y Drizzle.

# Roadmap

## Actual

### MVP (Producto Mínimo Viable)

- [ ] Configuración inicial del proyecto
- [ ] Implementación básica del frontend y backend
- [ ] Gestión de productos seriados y no seriados
- [ ] Funciones CRUD básicas
- [ ] Configuración de PostgreSQL como base de datos
- [ ] Búsqueda y filtros por nombre y categoría

## Futuro

### Versión 1.1

- [ ] Implementación de gráficos de barras, líneas y torta
- [ ] Generación de reportes exportables a PDF
- [ ] Notificaciones y alertas sobre el stock crítico
- [ ] Mejora en la interfaz de usuario con Material-UI o Tailwind CSS

### Versión 1.2

- [ ] Optimización del rendimiento y mejoras en la experiencia del usuario
- [ ] Soporte para múltiples idiomas
- [ ] Migración a una base de datos más robusta (por ejemplo, PostgreSQL)
- [ ] Integración con servicios de terceros (por ejemplo, notificaciones push)

### Versión 1.3

- [ ] Implementación de autenticación y autorización de usuarios
- [ ] Gestión avanzada de permisos y roles
- [ ] Integración con sistemas ERP y CRM
- [ ] Implementación de pruebas automatizadas y CI/CD

# Características

- `Gestión de Productos`: Permite agregar, editar y deshabilitar productos seriados y no seriados.

- `Búsqueda y Filtros`: Función de búsqueda por nombre y filtros por categoría y stock crítico.

- `Visualización de Gráficos`: Gráficos de barras, líneas y torta para análisis del uso de productos y flujo de stock.

- `Reportes`: Generación de reportes exportables a PDF.

- `Alertas`: Notificaciones cuando el stock crítico es sobrepasado al asignar productos.

- `Interfaz de Usuario Intuitiva`: Dashboard limpio y fácil de usar, con vistas de lista y detalladas de productos.

# Requisitos

- Node.js (v14 o superior)
- Yarn (v1.22 o superior)
- PostgreSQL (o cualquier otra base de datos soportada por Drizzle)

# Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/stock-management-system.git
   cd stock-management-system
   ```

2. Instala las dependencias del frontend y backend:
   ```bash
   cd frontend
   yarn install
   cd ../backend
   yarn install
   ```

# Configuración

## Backend

1. Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:

   ```env
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/tu_base_de_datos
   PORT=5000
   ```

2. Ejecuta las migraciones de la base de datos:
   ```bash
   yarn migrate
   ```

## Frontend

1. Crea un archivo `.env` en la carpeta `frontend` con las siguientes variables:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

# Ejecución

## Backend

1. Inicia el servidor backend:
   ```bash
   cd backend
   yarn dev
   ```

## Frontend

1. Inicia la aplicación frontend:
   ```bash
   cd frontend
   yarn start
   ```

# Scripts

## Backend

- `yarn dev`: Inicia el servidor en modo desarrollo.
- `yarn migrate`: Ejecuta las migraciones de la base de datos.

## Frontend

- `yarn start`: Inicia la aplicación en modo desarrollo.
- `yarn build`: Construye la aplicación para producción.

# Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request para discutir cualquier cambio importante.

# Licencia

[MIT](LICENSE)
