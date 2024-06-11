import React from "react";
import Input from "@components/Input/Input";

const Login = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-lg-row flex-column-fluid">
        <div
          className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-2 justify-content-center align-items-center"
          style={{
            backgroundImage: `url('https://amex-miwallet-dev.insuranceservices.mx/back-office/pattern-insuranceservices.svg')`,
          }}
        >
          <div className="d-flex flex-center flex-column flex-lg-row-fluid">
            <div className="w-lg p-10 bg-light rounded-4">
              <form
                className="form w-100"
                id="kt_sign_in_form"
                data-kt-redirect-url="index.html"
                action="#"
              >
                <div className="text-center">
                  <h1 className="text-gray-900 fw-bolder mb-3">
                    Inicia sesión
                  </h1>
                </div>

                <div className="my-5 text-center">
                  <span>
                    Ingresa las credenciales que te fueron proporcionadas
                  </span>
                </div>

                <Input
                  className="mb-4"
                  type="text"
                  placeHolder="Usuario"
                  name="email"
                />
                <Input
                  className="mb-4"
                  type="password"
                  placeHolder="Contraseña"
                  name="password"
                />

                <div className="d-grid mb-10">
                  <button type="submit" className="btn btn-primary">
                    <span className="indicator-label">Iniciar sesión</span>
                  </button>
                </div>

                <div className="text-center">
                  <span>
                    Al firmarte en el sitio, estás de acuerdo con las
                    Condiciones de uso.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="d-none d-lg-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center"
          style={{
            backgroundImage: `url('https://amex-miwallet-dev.insuranceservices.mx/back-office/pattern-insuranceservices.svg')`,
          }}
        >
          <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
            <div className="h-[175px] w-[300px] flex items-center justify-center">
              <img
                className="h-auto w-auto"
                alt="Logo"
                src="/public/media/svg/aramis/insuranceservices-logo-h.png"
              />
            </div>

            <img
              className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
              src="assets/media/misc/auth-screens.png"
              alt=""
            />

            <h1 className="d-none d-lg-block fw-bolder text-center mb-7">
              Importante
            </h1>

            <div className="d-none d-lg-block text-white fs-base text-center">
              Este sistema está restringido a personas autorizadas para fines
              comerciales. <br /> Las personas no deben tener una expectativa de
              privacidad al usar este sistema. <br />
              Las personas responsables del acceso no autorizado o uso
              inapropiado que resulte <br />
              en daños a socios y/o clientes pueden estar sujetos a acciones
              civiles o penales.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
