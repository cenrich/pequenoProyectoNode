// Tarea: Crear un módulo en Node. El módulo debe usar una dependencia external. El módulo debe ser llamado desde el index
// y darnos una respuesta.
// Pasos:
// - npm init 
// - ignorar node_modules
// - subirlo a un repo
const keKreatiba = require ("./modules/moduloCustom")
console.log(`Acá te dejo un día en el que soy creativa: ${keKreatiba()}`)