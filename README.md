# Gestor de solicitudes de cambio

Aplicación **React** para registrar y dar seguimiento a **solicitudes de cambio** de software: se
captura el proyecto, la descripción del cambio, su justificación y el área afectada; las solicitudes se
listan, se actualizan y cada una se descarga como **PDF**. Proyecto grupal de Ingeniería de Software
(mayo de 2024).

## Funcionalidades

- Inicio de sesión y barra de navegación.
- Formulario de nueva solicitud (`/inicio`).
- Listado de solicitudes con actualización de estado (`/solicitudes`).
- Exportación de cada solicitud a PDF con **jsPDF**.
- Persistencia en el navegador con `localStorage` (no requiere backend).

## Ejecutar

```bash
npm install
npm start          # http://localhost:3000
```

## Estructura

```
src/
├── login/          Pantalla de inicio de sesión
└── paginas/        Navbar, formulario (inicio), listado (solicitudes) y generador de PDF (doPDF)
```

**Stack:** React 18 · React Router 6 · jsPDF · Create React App.
