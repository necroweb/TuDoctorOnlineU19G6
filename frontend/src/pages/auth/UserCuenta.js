import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';

const CrearCuenta = () => {
    // Hook para manejar el estado del formulario de creación de cuenta
    const [usuario, setUsuario] = useState({
        name:'',
        amail:'',
        password:'',
        confirmar:''
    });

    const {name, email, password, confirmar} = usuario;

    const onChange = (e) => {
            setUsuario({
                ...usuario,
                [e.target.name]: e.target.value
            })
    }

    useEffect(() =>{
      document.getElementById("name").focus();
    }, [])

    
    const crearCuenta = async () => {
    
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
        
    }

    return (
        <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to={"#"}><b> TuDoctorOnlineU19G6 </b></Link>
          </div>
          
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              
              <form action="../../index3.html" method="post">
                
              <div className="input-group mb-3">
                  <input type="Text" 
                    className="form-control" 
                    placeholder="Name" 
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                    />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required/>

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                
                <div className="input-group mb-3">
                  <input type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    id="password"
                    name="password" 
                    value={password}
                    onChange={onChange}
                    required/>
                  
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
              
                <div className="input-group mb-3">
                  <input type="password" 
                    className="form-control" 
                    placeholder="Confirmar Contraseña" 
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                    required />
                  
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
              
                <div className="social-auth-links text-center mb-3">
                  <button type='submit' className="btn btn-block btn-dark">
                      Crear cuenta 
                  </button>
                  <Link to={"/"} className="btn btn-block btn-primary">
                      Regresar al Login  
                  </Link>
                </div>
              </form>



            </div>
          </div>
        </div>
      </div>
    );
}

export default CrearCuenta;
