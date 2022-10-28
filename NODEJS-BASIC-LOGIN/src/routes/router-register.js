// Definisikan router dari express
const router = require('express').Router();
// Ambil inde.js dari controller dan panggil variable di dalamnya
const registerController = require('../controllers').register;
// Definisikan middleware verify.js
const verifyUser = require('../configs/verify');

// Rute 'http://localhost:5050/register/' digunakan untuk menampilkan form register
router.get('/', verifyUser.isLogout, registerController.formRegister);
// Rute 'http://localhost:5050/register/' digunakan untuk menyimpan data yang diinput user saat register
router.post('/save', verifyUser.isLogout, registerController.saveRegister);

// Export agar dapat dibaca oleh express
module.exports = router;