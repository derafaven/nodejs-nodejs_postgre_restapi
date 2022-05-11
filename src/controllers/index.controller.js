//postgre
const {Pool} = require('pg');
const connectionString = 'postgresql://postgres:pgroot@localhost:5432/postgres'

const pool = new Pool({connectionString})

const getUsers = async (req, res) => {
    try {
        //consulta asincrona, node no bloquea o espera que la bd retorne algo
        const response = await pool.query('select * from usuario');
        console.log(response.rows);
        //res.json(response.rows); //para que se muestre en pantalla
        res.status(200).json(response.rows);
        //res.send('users');
        //pool.end(); //cierra conexion
    } catch (e) {
        console.log(e);
    }
};

const insertUsuariosAsin = async (req, res) => {
    try {
        const {email, nombre} = req.body

        //consulta asincrona, node no bloquea o espera que la bd retorne algo
        const sql = 'INSERT INTO public.usuario(email, nombre) VALUES($1, $2);';
        const values = [email, nombre]
        const response = await pool.query(sql, values);
        console.log(response);
        res.status(200).json({
            message: 'User Added Succesfully',
            body: {
                user: {email, nombre}
            }
        });
        //pool.end(); //cierra conexion
    } catch (e) {
        console.log(e);
    }
};

const getUsuarioPorIdAsin = async (req, res) => {
    try {
        //consulta asincrona, node no bloquea o espera que la bd retorne algo
        const response = await pool.query('select * from usuario where id = ' + req.params.id);
        console.log(response.rows);
        //res.json(response.rows); //para que se muestre en pantalla
        res.status(200).json(response.rows);
        //res.send('users');
        //pool.end(); //cierra conexion
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getUsers,
    insertUsuariosAsin,
    getUsuarioPorIdAsin
}